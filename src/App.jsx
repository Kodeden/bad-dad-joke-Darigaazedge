import VoteButtons from "./components/VoteButtons";
import VotedListContainer from "./components/VotedListContainer";
import useRandomDadJoke from "./hooks/useRandomDadJoke";
import useVoting from "./hooks/useVoting";

function App() {
  const { keepVoteUp, keepVoteDown, voteUp, voteDown } = useVoting();
  const { randomDadJoke, fetchRandomDadJoke } = useRandomDadJoke();

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
          data-testid="getDadJoke"
          className="rounded-full bg-green-500 p-4 text-white"
          onClick={fetchRandomDadJoke}
        >
          Click for DadJoke
        </button>
      </div>

      <VoteButtons
        onVoteUp={() => voteUp(randomDadJoke)}
        onVoteDown={() => voteDown(randomDadJoke)}
      />
      <div className="flex justify-around space-x-4">
        <VotedListContainer jokes={keepVoteUp} />
        <VotedListContainer jokes={keepVoteDown} />
      </div>
    </main>
  );
}

export default App;
