import { useState } from "react";

function App() {
  const [randomDadJoke, setRandomDadJoke] = useState("");
  const handleclick = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);
    const joke = await response.json();
    setRandomDadJoke(joke.setup + " " + joke.punchline);
  };
  const voteUp = () => {
    console.log("vote up!");
  };

  const voteDown = () => {
    console.log("vote Down!");
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
      <div className="flex justify-around">
        <div id="vote up box">
          <button onClick={voteUp}>
            <img src="Thumbs Up.png" alt="Thumbs Up" />
          </button>
          <ul></ul>
        </div>
        <div id="vote down box">
          <button onClick={voteDown}>
            <img src="Thumbs Down.png" alt="Thumbs Down" />
          </button>
          <ul></ul>
        </div>
      </div>
    </main>
  );
}

export default App;
