import React from 'react';

const RecipeDetail = ({ selectedRecipe }) => {
  const recipiedata = selectedRecipe;

  if (!recipiedata) {
    return null;
  }


  const recipeDetails = Object.entries(recipiedata).map(([key, value]) => (
    <div key={key}>
      {key}:{value}
    </div>
  ));

  return (
    <div>
      {recipeDetails}
    </div>
  );
};

export default RecipeDetail;
