const getStoredForSelectedCard = () =>{
    const storedCard = localStorage.getItem('selected-card');
    if(storedCard){
        return JSON.parse(storedCard);
    }
    return [];
}


const saveCards = id =>{
    const storedCards = getStoredForSelectedCard();
    const exists = storedCards.find(cId => cId === id);
    if(!exists){
        storedCards.push(id);
        localStorage.setItem('selected-card', JSON.stringify(storedCards))
    }
}


const savePrice = () => {
    const storedPrice = [];
    const total = 0 + 1;
    const priceStored = JSON.parse(localStorage.getItem('donate-price'));
    if(!priceStored){
                storedPrice.push(total);
                localStorage.setItem('donate-price', JSON.stringify(storedPrice))
            }
            else{
              
                storedPrice.push(...priceStored,total);
                localStorage.setItem('donate-price', JSON.stringify(storedPrice))
            }

}

export { getStoredForSelectedCard, saveCards, savePrice}