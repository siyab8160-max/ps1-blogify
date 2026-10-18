import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommentCard from "../components/CommentCard";

function PostDetails() {
    const { id } = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [id]);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <h2>Comments</h2>

            {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}

            <Link to="/posts">
                <button>Back to Posts</button>
            </Link>
        </div>
    );
}

export default PostDetails;