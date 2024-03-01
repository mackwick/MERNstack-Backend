import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDeckForm = () => {
    const navigate = useNavigate();
    const [deck, setDeck] = useState({
        name: '',
        description: '',
        isPrivate: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDeck({
            ...deck,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${process.env.REACT_APP_URL}/deck`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deck),
        }).then(response => {
            if (response.ok) {
                // Redirect to the landing page after successful deck creation
                navigate('/');
            } else {
                // Handle server errors or invalid responses
                alert("An error occurred while creating the deck. Please try again.");
            }
        }).catch(error => {
            // Handle network errors
            console.error("Network error:", error);
            alert("An error occurred. Please check your network and try again.");
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Deck</h2>
            <label>
                Name:
                <input type="text" name="name" value={deck.name} onChange={handleChange} required />
            </label>
            <label>
                Description:
                <textarea name="description" value={deck.description} onChange={handleChange} />
            </label>

            <button type="submit">Create Deck</button>
        </form>
    );
};

export default AddDeckForm;
