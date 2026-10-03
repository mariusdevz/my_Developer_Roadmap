import "./Card.css";
const Card = ({ title, description, moreInfo }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{moreInfo}</button>
    </div>
  );
};

export default Card;
