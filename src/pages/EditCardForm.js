import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCardForm = () => {
    const { deckId, cardId } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState({ question: '', answer: '' });

    useEffect(() => {
        const fetchCard = async () => {
            const response = await fetch(`${process.env.REACT_APP_URL}/card/${cardId}`);
            const data = await response.json();
            setCard(data);
        };
        fetchCard();
    }, [cardId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCard((prevCard) => ({
            ...prevCard,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
        <form onSubmit={handleSubmit}>
            <h2>Edit Card</h2>
            <label>
                Question:
                <textarea name="question" value={card.question} onChange={handleChange} required />
            </label>
            <label>
                Answer:
                <textarea name="answer" value={card.answer} onChange={handleChange} required />
            </label>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditCardForm;
