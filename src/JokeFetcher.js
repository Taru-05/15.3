import React, { useState, useEffect } from "react";

export const JokeFetcher = () => {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      if (!res.ok) throw new Error("Failed to fetch joke");
      const data = await res.json();
      setJoke(`${data.setup} - ${data.punchline}`);
      setError(null);
    } catch (err) {
      setError("Could not fetch a joke at this time. Please try again.");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h3>Random Joke</h3>
      {error ? <p style={{ color: "red" }}>{error}</p> : <p>{joke}</p>}
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
};
