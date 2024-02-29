import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../index.css"

const EditCardForm = () => {
    const { deckId, cardId } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState({ question: '', answer: '' });

    useEffect(() => {
        const fetchDeckAndCard = async () => {
            // Adjusted to fetch the deck first
            const response = await fetch(`${process.env.REACT_APP_URL}/deck/${deckId}`);
            const deckData = await response.json();

            // Find the specific card within the deck's cards array
            const cardData = deckData.cards.find(card => card._id === cardId);

            // Set the found card as the current card state
            if (cardData) setCard(cardData);
        };

        fetchDeckAndCard();
    }, [cardId, deckId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCard((prevCard) => ({
            ...prevCard,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Assuming the backend expects the card to be updated within a specific deck
        await fetch(`${process.env.REACT_APP_URL}/card/${deckId}/${cardId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(card),
        });
        navigate(`/deck/${deckId}`);
    };

    return (
        <form onSubmit={handleSubmit} className="edit-card-form">
            <h2>Edit Card</h2>
            <div className="form-group">
                <label htmlFor="question">Question:</label>
                <textarea id="question" name="question" value={card.question} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="answer">Answer:</label>
                <textarea id="answer" name="answer" value={card.answer} onChange={handleChange} required />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditCardForm;
