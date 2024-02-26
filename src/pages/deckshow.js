import { useLoaderData, useNavigate } from "react-router-dom";
import Card from '../components/Card'

const Deckshow = () => {
    const deck = useLoaderData();
    const navigate = useNavigate();

    return (
      <div>
        <h1>{deck.name}</h1> {/* Display deck name */}
        <div className="cards-container">
          {/* Iterate over cards and use Card component to display them */}
          {deck.cards.map((card) => (
            <Card key={card._id} card={card} /> // Use Card component for each card
          ))}
        </div>
        <button onClick={() => navigate(-1)}>Back to Decks</button> {/* Navigate back */}
      </div>
    );
  };

export default Deckshow;
