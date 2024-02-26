import { useLoaderData, Link } from "react-router-dom";

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
              // Wraping the deck div in a Link component
              <Link to={`/deck/${set._id}`} key={set._id} style={{ textDecoration: 'none' }}>
                <div className="deck">
                  <h3>{set.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
    </div>
  );
};

export default Landing;
