import { useLoaderData, } from "react-router-dom";

const Landing = () => {
  const deck = useLoaderData();

  return (
    <div className="landing-container">
        <div className="title-container">
          <h1>Decks</h1>
        </div>

        <div className="decks-container">
          {deck.map((set) => {
            return (
              <div key={set._id} className="deck">
                <h3>{set.name}</h3>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Landing;
