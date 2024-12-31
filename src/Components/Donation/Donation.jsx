import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getStoredForSelectedCard } from "../../utillity/Local";
import DonationCard from "../DonationCard/DonationCard";


const Donation = () => {
  const [dataLength, setDataLength] = useState(4);
  const [selectedCard, setSelectedCard] = useState([]);

  const cards = useLoaderData();
  

  useEffect(() => {
    const storedCardIds = getStoredForSelectedCard();
    if (cards.length > 0) {
      const selectedCards = [];
      for (const id of storedCardIds) {
        const card = cards.find((card) => card.id === id);
        if (card) {
          selectedCards.push(card);
        }
      }
      setSelectedCard(selectedCards);
    }
  }, [cards]);


  const cssClass =
    selectedCard.length === 4 || selectedCard.length > 4 ? "" : "hidden";

  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 container mx-auto mt-20 lg:ml-10 md:ml-0 ml-10">
        {selectedCard.slice(0, dataLength).map((c) => (
          <DonationCard key={c.id} c={c}></DonationCard>
        ))}
      </div>
      <div className={cssClass}>
        <div className={dataLength === selectedCard.length ? "hidden" : ""}>
          <div className="flex justify-center">
            <button
              onClick={() => setDataLength(selectedCard.length)}
              className="btn bg-green-600 text-white mt-20"
            >
              See All
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Donation;