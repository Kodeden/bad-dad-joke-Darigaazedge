import { useState } from "react";
import voteDownImage from "./images/ThumbsDown.png";
import voteUpImage from "./images/ThumbsUp.png";

function App() {
  const [randomDadJoke, setRandomDadJoke] = useState("");
  const [keepVoteUp, setKeepVoteUp] = useState([]);
  const [keepVoteDown, setKeepVoteDown] = useState([]);
  const handleclick = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);
    const joke = await response.json();
    setRandomDadJoke(joke.setup + " " + joke.punchline);
  };
  const voteUp = () => {
    setKeepVoteUp([...keepVoteUp, randomDadJoke]);
    setRandomDadJoke("");
  };

  const voteDown = () => {
    setKeepVoteDown([...keepVoteDown, randomDadJoke]);
    setRandomDadJoke("");
  };

  return (
    <main>
      <div>
        <h1 className="flex justify-center text-3xl font-bold underline">
          Dad Jokes!!
        </h1>
        ;
        <h2 className="flex justify-center text-xl font-bold">
          Vote up your favs and down vote the duds!!
        </h2>
      </div>

      <p className="flex justify-center">Dad Joke: {randomDadJoke}</p>

      <div className="flex justify-center">
        <button
          type="submit"
          className="rounded-full bg-green-500 p-4 text-white"
          onClick={handleclick}
        >
          Click for DadJoke
        </button>
      </div>
      <div id="vote buttons" className="flex justify-around">
        <button onClick={voteUp}>
          <img src={voteUpImage} alt="Thumbs Up" className="H-32 w-32" />
          Vote Up!!
        </button>

        <button onClick={voteDown}>
          <img src={voteDownImage} alt="Thumbs Down" className="H-32 w-32" />{" "}
          Vote Down!!
        </button>
      </div>
      <div className="flex justify-center space-x-4">
        <div
          className="container flex flex-col items-center border-4 p-4"
          id="vote up box"
        >
          <ul id="voteUpList">
            {keepVoteUp.map((joke, index) => (
              <li key={index}>{joke}</li>
            ))}
          </ul>
        </div>
        <div
          className="container flex flex-col items-center border-4 p-4"
          id="vote down box"
        >
          <ul id="voteDownList">
            {keepVoteDown.map((joke, index) => (
              <li key={index}>{joke}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
