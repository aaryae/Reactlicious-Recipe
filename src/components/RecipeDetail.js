import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/recipes.json";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = data.find((recipe) => recipe.id.toString() === recipeId);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const imagePath = require(`../Images/${recipe.image}`);
  return (
    <div className="Recipieshoni max-w-screen-2xl mx-auto mt-20 mb-0 bg-[#ffffff] p-5 ">
      <img src={imagePath} alt="" />
      <h2>{recipe.title}</h2>
      <p>ID: {recipe.id}</p>

      {/* Render other recipe details here */}
    </div>
  );
};

export default RecipeDetail;
