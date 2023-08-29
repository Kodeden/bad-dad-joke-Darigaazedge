export default function VotedList({ jokes }) {
  return (
    <div className="container flex flex-col items-center border-4 p-4">
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke}</li>
        ))}
      </ul>
    </div>
  );
}
