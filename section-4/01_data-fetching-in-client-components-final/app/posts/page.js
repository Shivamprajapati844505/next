"use client";
import { useEffect, useState } from 'react';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data); 
      console.log(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
        posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
        }
      </ul>
    </div>
  );
}
