import React from 'react'

const RecipeForm = () => {
  return (
    <form className=''>
    <input
                        type="text"
                        placeholder="Title"
                      
                    />
                    <input
                        type="text"
                        placeholder="Description"
                       
                    />
                    <input
                        type="date"
                        placeholder="NaN"
                       
                    />
                    
                   
                    <input
                        type="file"
                       
                    />
                   
                    <button type="submit" variant='default' className='w-[200px] bg-black text-white rounded'>Submit</button>
                </form>
  )
}

export default RecipeForm;