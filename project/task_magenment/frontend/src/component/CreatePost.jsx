import { useState } from "react";

function CreatePost({ onCreatePost }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (content.trim().length < 5) {
        setError("Post must contain at least 5 characters.");
      return;
    }

    onCreatePost(content.trim());

    setContent("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What do you want to talk about?"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    {error && <p>{error}</p>}
      <button type="submit">
        Post
      </button>
    </form>
  );
}

export default CreatePost;