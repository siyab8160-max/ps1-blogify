import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Blogify</h1>
      <p>Read interesting posts here.</p>

      <Link to="/posts">
        <button>Read Posts</button>
      </Link>
    </div>
  );
}

export default Home;