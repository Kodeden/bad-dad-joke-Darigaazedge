import PropTypes from "prop-types";

export default function JokeVote({ onClick }) {
  return (
    <div className="my-4 flex justify-center gap-x-4">
      <button onClick={onClick}>👍🏾</button>
      <button onClick={onClick}>👎🏾</button>
    </div>
  );
}

JokeVote.propTypes = {
  onClick: PropTypes.func.isRequired,
};
