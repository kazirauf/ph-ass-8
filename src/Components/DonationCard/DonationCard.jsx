
import { Link } from "react-router-dom";


const DonationCard = ({c}) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price } =
    c;
    
    return (
        <div>
            <div style={{backgroundColor: card_bg, }} className="card card-side md:h-48 h-48 lg:h-48 bg-base-100 shadow-xl">
  <figure><img src={picture} className="lg:h-48 lg:w-72 md:h-48 md:w-72" alt="Movie"/></figure>
  <div className="card-body">
  <p style={{backgroundColor: category_bg, color: text_button_bg }} className="px-3 rounded-lg w-20" >{category}</p>
  <h2 style={{ color: text_button_bg }} className="card-title lg:text-xl md:text-xl text-xs">{title}</h2>
  <h2 style={{ color: text_button_bg }} className="card-title lg:text-xl md:text-xl text-xs">${price}</h2>
 <Link  to={`/card/${id}`}>
 <button style={{ backgroundColor: text_button_bg }} className="btn text-white lg:w-40 md:w-40 lg:text-lg md:text-lg text-xs w-28 h-7 mb-2">View Detail</button></Link>
  </div>
</div>
        </div>
    );
};

export default DonationCard;