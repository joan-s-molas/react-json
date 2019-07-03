import * as React from 'react';
import { render } from 'react-dom';
import './styles.css';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface TableProps {
    posts: Array<Post>;
}

interface RowProps {
    post: Post;
}

function Table(props: TableProps) {
    const { posts } = props;

    return (
        <table className="table-dark table-hover table-responsive">
            <tbody>
                {posts.map(post => (
                    <Row post={post} />
                ))}
            </tbody>
        </table>
    );
}

function Row(props: RowProps) {
    const { post } = props;

    return (
        <tr>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.body}</td>
            <td>{post.title}</td>
        </tr>
    );
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(posts => {
        const rootElement = document.getElementById('root');
        render(<Table posts={posts} />, rootElement);
    });
