const Card = ({ card }) => {
  return (
    <div className="flashcard">
      <div className="card-content">
        <h4 className="card-question">{card.question}</h4>

        <div className="card-front"></div>

        <div className="card-back">
          <p className="card-answer">{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
