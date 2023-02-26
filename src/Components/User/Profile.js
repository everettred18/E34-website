import React, { useState, useEffect } from "react";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user data from API
    fetch(`https://example.com/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    // Fetch user's previous posts from API
    fetch(`https://example.com/api/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [userId]);

  return (
    <div>
      <img src={user.photoUrl} alt={`${user.firstName} ${user.lastName}`} />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>{user.bio}</p>
      <h3>Previous Posts:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
