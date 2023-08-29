import { useState } from "react";

export default function useRandomDadJoke() {
  const [randomDadJoke, setRandomDadJoke] = useState("");

  const fetchRandomDadJoke = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);
    const joke = await response.json();
    setRandomDadJoke(joke.setup + " " + joke.punchline);
  };

  return { randomDadJoke, fetchRandomDadJoke };
}
