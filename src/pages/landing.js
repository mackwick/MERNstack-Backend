import { useLoaderData, Link } from "react-router-dom";

const Landing = (props) => {
  const deck = useLoaderData();
  return (
    <div className="landing">
      <h1>Decks</h1>
      {deck.map((set) => {
        return (
          <div key={set._id} className="set">
            <h3>{set.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
