import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditDeckForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [deck, setDeck] = useState({ name: '', description: '', isPrivate: false });

    useEffect(() => {
        const fetchDeck = async () => {
            const response = await fetch(`${process.env.REACT_APP_URL}/deck/${id}`);
            const data = await response.json();
            setDeck(data);
        };
        fetchDeck();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDeck((prevDeck) => ({
            ...prevDeck,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${process.env.REACT_APP_URL}/deck/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deck),
        });
        navigate(`/deck/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Deck</h2>
            <label>
                Name:
                <input type="text" name="name" value={deck.name} onChange={handleChange} required />
            </label>
            <label>
                Description:
                <textarea name="description" value={deck.description} onChange={handleChange} />
            </label>
            <label>
                Private:
                <input type="checkbox" name="isPrivate" checked={deck.isPrivate} onChange={handleChange} />
            </label>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditDeckForm;
