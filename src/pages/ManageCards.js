import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const ManageCards = () => {
    const { id: deckId } = useParams();
    const location = useLocation();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchDeck = async () => {
            // Fetch the deck data, which includes the cards
            const response = await fetch(`${process.env.REACT_APP_URL}/deck/${deckId}`);
            if(response.ok) {
                const data = await response.json();
                setCards(data.cards); // Set cards from the deck's cards array
            } else {
                console.error("Failed to fetch deck with cards");
            }
        };
        fetchDeck();
    }, [deckId, location.state?.cardAdded]);

    return (
        <div>
            <h2>Manage Cards</h2>
            {cards.length > 0 ? (
                cards.map(card => (
                    <div key={card._id}>
                        <p>Question: {card.question}</p>
                        <p>Answer: {card.answer}</p>
                        <Link to={`/edit/card/${deckId}/${card._id}`}>Edit</Link>
                        {' | '}
                        <Link to={`/delete/card/${deckId}/${card._id}`}>Delete</Link>
                    </div>
                ))
            ) : (
                <p>No cards available. Add some!</p>
            )}
            <Link to={`/create/card/${deckId}`}>Add New Card</Link>
        </div>
    );
};

export default ManageCards;
