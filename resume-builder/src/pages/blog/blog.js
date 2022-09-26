import { useEffect, useState } from 'react';
import './blog.css';

const Blog = () => {

    let [posts, setPosts] = useState([]);
    let [isLoading, setIsLoading] = useState(false);

    const getPosts = async () => {
        setIsLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts1 = await response.json();
        setPosts(posts1);
        setIsLoading(false);
    }

    useEffect(() => {
        getPosts();
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => response.json())
        //     .then((data) => setPosts(data));// Rule: 2 then()
    }, []);



    return (
        <>
            {
                isLoading ? `<h1>Loading.......</h1>` :
                    posts.map((post, index) => {
                        return (
                            <div className="post" key={post.id}>
                                <div className="postHeading">
                                    <h3>{index + 1}. {post.title}</h3>
                                </div>
                                <div className="body">
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        )
                    })
            }
        </>
    );
}

export default Blog;