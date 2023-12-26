import { useState } from "react";
import React from "react";
import "./hardluck.css";

const Header = () => {
  const [MenuOn, setMenuOn] = useState(false);

  const handleToggle = () => {
    setMenuOn(!MenuOn);
  };

  const heroStyles = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  };

  return (
    <div
      className={`rt-header flex justify-around p-5 bg-[#0a0a0a] text-white china 
      ${
        MenuOn ? "menu-visible" : ""
      }`}
      style={heroStyles}
    >
      <div className="logo font-bold tracking-wider ">
        <h1 className="text-[2em] font-bold border-b-4 border-indigo-500 text-[#FFA500] ">
          food
        </h1>
      </div>
      <div className={`navbar res ${MenuOn ? "visible" : ""}`}>
        <ul className="flex font-bold text-[1.4em]">
          <li className="p-2 tracking-wide text-[#FFA500] md:filter-none hover:text-[#FFA500]">
            <a href="/">Home</a>
          </li>
          <li className="p-2 tracking-wide hover:text-[#FFA500]">
            <a href="/recipes">Recipes</a>
          </li>
          <li className="p-2 tracking-wide hover:text-[#FFA500]">
            <a href="/addrecipes">Add-Recipes</a>
          </li>
          <li className="p-2 tracking-wide hover:text-[#FFA500]">
            <a href="/detailrecipes">Detail-Recipes</a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        <i
          className="fa-solid fa-bars nono"
          style={{ color: "#ff7300" }}
        ></i>
      </div>
    </div>
  );
};

export default Header;
