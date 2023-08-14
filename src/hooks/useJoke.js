import { useState } from "react";

export default function useJoke() {
  const [joke, setJoke] = useState(null);
  const [goodJokes, setGoodJokes] = useState([]);
  const [badJokes, setBadJokes] = useState([]);

  const handleVote = (event) => {
    if (event.target.textContent === "👍🏾") {
      setGoodJokes([...goodJokes, joke]);
    } else {
      setBadJokes([...badJokes, joke]);
    }

    // Clear the joke
    setJoke(null);
  };

  return { joke, setJoke, goodJokes, badJokes, handleVote };
}
