function PostCard({ title, body, image, tags, date, readTime }) {
  return (
    <div className="post-card">
      <img src={image} alt={title} className="post-image" />

      <div className="post-content">
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>

        <h3>{title}</h3>
        <p className="description">{body}</p>

        <div className="post-info">
          <span>{date}</span>
          <span>• {readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
