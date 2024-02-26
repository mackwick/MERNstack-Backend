import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const ManageCards = () => {
    const { id: deckId } = useParams();
    const location = useLocation();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            // Updated to use REACT_APP_URL
            const response = await fetch(`${process.env.REACT_APP_URL}/deck/${deckId}/cards`);
            const data = await response.json();
            setCards(data);
        };
        fetchCards();
    }, [deckId, location.state?.cardAdded]);

    return (
        <div>
            <h2>Manage Cards</h2>
            {cards.map(card => (
                <div key={card._id}>
                    <p>{card.question}</p>
                    <Link to={`/edit/card/${deckId}/${card._id}`}>Edit</Link>
                </div>
            ))}
            <Link to={`/create/card/${deckId}`}>Add New Card</Link>
        </div>
    );
};

export default ManageCards;
