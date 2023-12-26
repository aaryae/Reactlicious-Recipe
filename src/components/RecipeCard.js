import React from 'react'

const RecipeCard = (props) => {
  

  return (
    <div className='text-center '>
      <h1>hero</h1>
      <img src={props.image} alt={props.id} />
        <h1>{props.title}</h1>
        <ul>
  {props.ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))}
</ul>
        <p>{props.description}</p>
    </div>
  )
}

export default RecipeCard;