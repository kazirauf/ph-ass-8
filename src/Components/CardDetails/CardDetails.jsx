import { useLoaderData, useParams } from "react-router-dom";
import { saveCards, savePrice } from "../../utillity/Local";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((c) => c.id === idInt);
  console.log(card);

  

  const justDonate = () =>{
    toast.success("your donation is successfully done ",{
        position: "top-center",
    })
    saveCards(idInt);

    savePrice()


}
  return (
    <div className="container mx-auto mt-20 relative">
      <div className="relative">
      <img
        className="w-[1700px] h-[600px] rounded-lg"
        src={card.picture}
        alt=""
      />
      <div className="bg-black bottom-0 py-4 absolute w-full bg-blend-overlay bg-opacity-50">
        <button onClick={justDonate} style={{ backgroundColor: card.text_button_bg }} className="btn text-white ml-5">Donate: ${card.price}</button>
      </div>
      </div>
     
      <h2 className="text-5xl mt-10 font-bold">{card.title}</h2>
      <p className="mt-5">{card.description}</p>
      <ToastContainer />
    </div>
  );
};

export default CardDetails;
