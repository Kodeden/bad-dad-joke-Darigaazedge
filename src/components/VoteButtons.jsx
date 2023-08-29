import voteDownImage from "../images/ThumbsDown.png";
import voteUpImage from "../images/ThumbsUp.png";

export default function VoteButtons({ onVoteUp, onVoteDown }) {
  return (
    <div id="bote buttons" className="flex justify-around">
      <button data-testid="voteUpBtn" onClick={onVoteUp}>
        <img src={voteUpImage} alt="Thumbs Up" className="H-32 w-32" />
        Vote Up!!
      </button>

      <button data-testid="voteDownBtn" onClick={onVoteDown}>
        <img src={voteDownImage} alt="Thumbs Down" className="H-32 w-32" /> Vote
        Down!!
      </button>
    </div>
  );
}
