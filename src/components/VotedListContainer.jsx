import VotedList from "./VotedList";

export default function VotedListContainer({ jokes }) {
  return (
    <div className="container">
      <VotedList jokes={jokes} />
    </div>
  );
}
