import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>All Posts</h1>

      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {posts
        .filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>

            <p>{post.body.slice(0, 80)}...</p>
          </div>
        ))}
    </div>
  );
}

export default Posts;