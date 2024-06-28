import React from 'react'

const RecipeForm = () => {
  return (
    <>
    
 
    <h1 className='text-6xl text-center py-8 '>Please fill up the form </h1>
    <div className='pb-60 pt-15'>

      <form className='max-w-md mx-auto flex flex-col justify-center items-center h-full'>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='floating_email'
            id='floating_email'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            for='floating_email'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-bold '
          >
            <span className='text-black'>

            Title
            </span>
          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='floating_password'
            id='floating_password'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            for='floating_password'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            <span className='text-black font-bold'>

            Description
            </span>

          </label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='date'
            name='repeat_password'
            id='floating_repeat_password'
            className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            for='floating_repeat_password'
            className='peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black'
          >
            <span className='text-black font-bold'>

            Date
            </span>
          </label>
        </div>
        <input type='file' />

        <button type='submit' variant='default' className=' bg-black text-white rounded my-6 py-3 px-8'>
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default RecipeForm
