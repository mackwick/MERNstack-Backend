import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AddCardForm = () => {
    const { deckId } = useParams();
    const navigate = useNavigate();
    const [card, setCard] = useState({ question: '', answer: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCard({ ...card, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${process.env.REACT_APP_URL}/card/${deckId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(card),
        }).then(response => {
            if (response.ok) {
                // Reset the card state to clear the form for the next card
                setCard({ question: '', answer: '' });
            } else {
                // Handle server errors or invalid responses
                alert("An error occurred. Please try again.");
            }
        }).catch(error => {
            // Handle network errors
            console.error("Network error:", error);
            alert("An error occurred. Please check your network and try again.");
        });
    };

    // Function to handle clicking the "Done Adding Cards" button
    const handleDone = () => {
        navigate(`/deck/${deckId}`); // Navigate away when done
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Card</h2>
            <label>
                Question:
                <textarea name="question" value={card.question} onChange={handleChange} required />
            </label>
            <label>
                Answer:
                <textarea name="answer" value={card.answer} onChange={handleChange} required />
            </label>
            <button type="submit">Add Card</button>
            <button type="button" onClick={handleDone} style={{marginLeft: "10px"}}>Done Adding Cards</button>
        </form>
    );
};

export default AddCardForm;
