import { Link, NavLink } from "react-router-dom";

import img from "../../assets/Logo.png"
const Navbar = () => {
    const links = <>
      <li><NavLink style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "white" : "",
      color: isActive ? "red" : "",
      textDecorationLine: isActive ? "underline" : "",
       
    };
  }}  to="/">Home</NavLink></li>
      <li><NavLink  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "white" : "",
      color: isActive ? "red" : "",
      textDecorationLine: isActive ? "underline" : "",
       
    };
  }} to="/donation">Donation</NavLink></li>
      <li><NavLink  style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "white" : "",
      color: isActive ? "red" : "",
      textDecorationLine: isActive ? "underline" : "",
       
    };
  }} to="/statistics">Statistics</NavLink></li>
    </>
    return (
        <div>
           <div className="navbar px-10 flex justify-between lg:w-full w-[420px] gap-10">
  <div className="">
   <Link><img className="lg:w-52 md:w-52 w-48" src={img} alt="" /></Link>
  </div>
  <div className="">
    <ul className="flex justify-around gap-4">
    {links}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;