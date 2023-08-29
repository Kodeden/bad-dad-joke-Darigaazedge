import { useState } from "react";

export default function useVoting() {
  const [keepVoteUp, setKeepVoteUp] = useState([]);
  const [keepVoteDown, setKeepVoteDown] = useState([]);

  const voteUp = (randomDadJoke, setRandomDadJoke) => {
    setKeepVoteUp([...keepVoteUp, randomDadJoke]);
    setRandomDadJoke("");
  };

  const voteDown = (randomDadJoke, setRandomDadJoke) => {
    setKeepVoteDown([...keepVoteDown, randomDadJoke]);
    setRandomDadJoke("");
  };

  return { keepVoteUp, keepVoteDown, voteUp, voteDown };
}
