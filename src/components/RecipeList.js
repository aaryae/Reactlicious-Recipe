import React, { useEffect, useState } from 'react';
import foodjson from '../data/recipes.json';
import "./hardluck.css"

const RecipeList = () => {
  const [Recipe, SetRecipe] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        SetRecipe(foodjson); 
        
      };

      fetchData(); 
    } catch (error) {
      console.error('error found ', error);
    }
  }, []);
  const truncateDescription = (description) => {
    if (Array.isArray(description)) {
      description = description.join(' ');
    }
    return description.slice(0, 66);
  };
  return (
    <div className="Recipieshoni max-w-screen-2xl mx-auto mt-20 mb-0  bg-[#ffffff] p-5 ">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4   ">
    {Recipe.map((recipe, index) => {
      const truncatedDescription = truncateDescription(recipe.description);
      const imagePath = require(`../Images/${recipe.image}`);
      return (
        <div key={index} className="mb-4 cursor-pointer group hello">
  <img className='p-1 border-2' src={imagePath} alt={recipe.id} width="500" />
  <h1 className='p-2 font-bold ramro-bold tracking-wider transition-colors duration-300 group-hover:text-red-500'>
    - {recipe.title}
  </h1>
  <p className=' p-2 text-justify ramro tracking-wider'>{truncatedDescription}...</p>
</div>

      );
    })}
  </div>
</div>

  );
  
    }  

export default RecipeList;