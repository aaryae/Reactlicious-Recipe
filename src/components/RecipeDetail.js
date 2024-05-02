import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/recipes.json";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = data.find((recipe) => recipe.id.toString() === recipeId);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.value !== null && event.target.value !== "") {
      window.alert("Thanks for your suggestion");
    } else {
      window.alert("Please type your suggestion");
    }
  };

  const imagePath = require(`../Images/${recipe.image}`);
  return (
    <div className="max-w-screen-lg mx-auto mt-20 mb-0 bg-[#e8e8e8] p-5 ">
      <img src={imagePath} alt="NaN" />
      <div className="m-6 px-6 ">
        <h2 className="font-bold p-2 text-4xl text-[#008080] underline">
          {recipe.title}
        </h2>
        <h1 className=" text-[#008080] font-bold p-2 text-xl">Ingredients</h1>
        {recipe.ingredients.map((array, index) => {
          return (
            <li
              key={index}
              className="text-[#424242] marker:text-[#008080] font-serif tracking-wide"
            >
              {" "}
              {array}{" "}
            </li>
          );
        })}
        <h1 className="font-bold p-4 text-xl text-[#008080] ">Description</h1>
        <p className="p-2  text-justify font-serif tracking-wide text-[#424242]">
          {recipe.description}
        </p>
      </div>
      <div className="font-bold m-6 px-6 mt-11 text-[#008080]">
        <input
          className="p-3 px-11 w-9/12"
          type="text"
          placeholder="Any suggestion? We will appreciate"
        />
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            variant="default"
            className="w-[100px] bg-black text-white rounded p-3 m-2 hover:tracking-wide"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeDetail;
