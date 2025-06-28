import { useEffect, useState } from "react";

const APIData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4"
      />
      {loading ? <p>Loading...</p> : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredPosts.map(post => (
            <div key={post.id} className="p-4 border rounded shadow">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default APIData;
