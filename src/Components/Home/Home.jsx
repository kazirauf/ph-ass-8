import { useLoaderData } from "react-router-dom";

import Card from "../../Card/Card";
import { useState } from "react";



const Home = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const donationCards = (value) => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const results = data.filter((card) =>
          card?.category?.toLowerCase().includes(value?.toLowerCase())
        );
        setSearchResults(results);
      });
  };
  const handleInput = (value) => {
   setInput(value)
  }
  const handleSearch = (e) => {
    donationCards(input)
    e.preventDefault();
  }
    const myCard = useLoaderData()
    // console.log(myCard);
    // const handleSearch = e => {
    //  e.preventDefault()
    // const search = e.target.search.value;
    // console.log(search);
    // }
    return (
        <div>
  <div>
<div className="hero relative h-[500px]">
  <img
    src="https://vacjc.com/wp-content/uploads/2021/05/vac-donations.jpg"
    alt="Background Image"
    className="w-full h-[500px] object-cover"
  />
  <div className="hero-overlay absolute top-0 left-0 lg:w-full md:w-full w-[400px] h-full bg-white opacity-95"></div>
  <div className="hero-content text-center text-neutral-content relative">
    <div className="">
      <h1 className="mb-5 lg:text-5xl font-bold text-slate-900 ">I Grow By Helping People In Need</h1>
      <div className="h-40 lg:w-full lg:flex-none flex w-[320px] ml-10 mt-10">
       <form >
       <input onChange={(e) => handleInput(e.target.value)} value={input} name="search" type="text" placeholder="Search here...." className="input input-bordered text-black lg:w-[420px] md:w-[420px] lg:ml-24 " />
        <input onClick={handleSearch} className="btn bg-red-500 text-white rounded-lg lg:px-5 md:px-5 py-3" type="submit" value="Search" />
       </form>
      </div>
    </div>
  </div>
</div>

        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6 my-24 place-items-center">
        {searchResults.length > 0
          ? searchResults.map((result) => (
              <Card key={result.id} card={result}></Card>
            ))
          : myCard.map((card) => <Card key={card.id} card={card}></Card>)}
      </div>
     
        </div>
    );
};

export default Home;


