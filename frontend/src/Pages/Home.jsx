import React, { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));

  }, []);

  let content;

  if (loading) content = <h1>Loading</h1>;

  if (error) content = <h1>Something Wrong</h1>

  if (!loading && !error) content = users.map((user, i) => <h1 key={i}>{user}</h1>)

  return <div>
    <h1 style={{color : 'red'}}>Users</h1>
    {content}
  </div>;
}

export default Home;
