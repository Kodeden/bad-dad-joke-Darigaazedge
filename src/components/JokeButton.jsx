import PropTypes from "prop-types";

export default function JokeButton({ setJoke }) {
  return (
    <button
      className="rounded bg-blue-500 p-2 text-white"
      onClick={() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
          .then((res) => res.json())
          .then((joke) => setJoke(joke));
      }}
      type="button"
    >
      Get Joke
    </button>
  );
}

JokeButton.propTypes = {
  setJoke: PropTypes.func.isRequired,
};
