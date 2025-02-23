import React, { useEffect, useState } from 'react'

const API_list = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div><h1>Posts</h1>
        <div>
        {posts.map(post => (
          <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        ))}
        </div>
        <h1>{posts.id}</h1>
        <p>{posts.body}</p></div>
    )
}

export default API_list