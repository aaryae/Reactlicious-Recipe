import React from 'react'

const RecipeForm = () => {
  return (
    <form>
    <input
                        type="text"
                        placeholder="Mother's Name"
                      
                    />
                    <input
                        type="text"
                        placeholder="Grandfather's Name"
                       
                    />
                    <input
                        type="date"
                        placeholder="Date of Birth"
                       
                    />
                    
                   
                    <input
                        type="file"
                       
                    />
                   
                    <button type="submit" variant='default' className='w-[200px] bg-black text-white rounded'>Submit</button>
                </form>
  )
}

export default RecipeForm;