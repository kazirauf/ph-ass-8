import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg } =
    card;
  return (
    <Link to={`/card/${id}`}>
      <div className="card card-compact w-72 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-72 h-48"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div style={{backgroundColor: card_bg, }} className="card-body">
        <p style={{backgroundColor: category_bg, color: text_button_bg }} className="px-3 rounded-lg w-20" >{category}</p>
          <h2 style={{ color: text_button_bg }} className="card-title">{title}</h2>
        
        </div>
      </div>
    </Link>
  );
};

export default Card;    
