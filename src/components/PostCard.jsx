import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>

      <p>{post.body.slice(0, 80)}...</p>
    </div>
  );
}

export default PostCard;