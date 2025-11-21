import { useEffect, useState } from "react";
import { getPosts } from "./api/Post";
import PostCard from "./components/PostCard";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <header className="hero">
        <h1>Herbal Haven</h1>
        <p>
          Discover the healing power of nature through herbs, their benefits, and traditional remedies.
        </p>
      </header>

      <h2 className="section-title">Latest Articles</h2>

      <div className="grid">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            image={post.image}
            tags={post.tags}
            date={post.date}
            readTime={post.readTime}
          />
        ))}
      </div>

      <footer className="footer">© 2025 Herbal Haven</footer>
    </div>
  );
}

export default App;
