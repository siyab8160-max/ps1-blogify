function CommentCard({ comment }) {
  return (
    <div className="comment">
      <h3>{comment.name}</h3>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
}

export default CommentCard;