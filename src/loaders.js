const URL = process.env.REACT_APP_URL;

export const deckLoader = async () => {
  const response = await fetch(`${URL}/deck`);
  const deck = await response.json();
  return deck;
};

export const cardLoader = async ({ params }) => {
  const response = await fetch(`${URL}/deck/${params.id}`);
  const cards = await response.json();
  return cards;
};
