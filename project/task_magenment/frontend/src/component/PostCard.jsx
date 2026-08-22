
import { useState } from "react";

function PostCard({ post }) {
 const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

   const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };
    
  return (
    <article className="post-card">
      <h3>{post.author}</h3>

      <p>{post.role}</p>

      <div>{post.content}</div>
      
      <button onClick={handleLike}>
        {liked ? "Liked" : "Like"}
      </button>

      <span>{likes} likes</span>
    </article>
  );
}

export default PostCard;