import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;