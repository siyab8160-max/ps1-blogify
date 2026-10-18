import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Blogify</Link>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
}

export default Navbar;