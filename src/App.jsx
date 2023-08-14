import JokeButton from "./components/JokeButton";
import JokeList from "./components/JokeList";
import Joke from "./components/JokeText";
import JokeVote from "./components/JokeVote";
import useJoke from "./hooks/useJoke";

function App() {
  const { joke, setJoke, goodJokes, badJokes, handleVote } = useJoke();

  return (
    <main className="container mx-auto flex flex-col items-center gap-y-8 ">
      <section className="flex flex-col items-center gap-y-8 border-y py-8">
        <JokeButton setJoke={setJoke} />
        <Joke joke={joke} />
        {joke && <JokeVote onClick={handleVote} />}
      </section>

      <section className="grid grid-cols-2 divide-x [&>*]:px-8">
        <JokeList title="👍🏾 Jokes 😆" jokes={goodJokes} />
        <JokeList title="👎🏾 Jokes 😿" jokes={badJokes} />
      </section>
    </main>
  );
}

export default App;
