
import {  useEffect,useState } from "react";
import PostList from "../component/PostList";
import CreatePost from "../component/CreatePost";
// import { posts as initialPosts } from "../data/posts";

function Feed() {
    const [posts, setPosts] = useState([]);
       useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);



      const handleCreatePost = async (content) => {
    const response = await fetch(
      "http://localhost:3000/api/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      }
    );

    const newPost = await response.json();

    setPosts((currentPosts) => [
      newPost,
      ...currentPosts,
    ]);
  };

  return (
    <main>
      <h1>ProConnect Feed</h1>
          <CreatePost onCreatePost={handleCreatePost} />
      <PostList posts={posts} />
    </main>
  );
}

export default Feed;