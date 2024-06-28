import React from 'react'

const Aboutus = () => {
  return (
    <div className='Recipieshoni max-w-screen-2xl mx-auto mt-20 mb-0 bg-[#ffffff] p-5 text-lg  leading-8'>
      <h1 className='font-bold text-5xl text-[#ffa500] underline'>About us </h1>
      <h3 className='font-bold text-3xl mt-20 text-[#ffa500]'>Who We Are</h3>
      <p className='text-justify mt-10 '>
        Home cooks are our heroes—it's as simple as that. Allrecipes is a community built by and for kitchen experts:
        The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker
        rendition, too. The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed
        brownies for a decadent weeknight dessert. The entertainers who just want a solid snack spread, without tons of
        dirty dishes at the end of the night.
        <br />
        Most importantly, Allrecipes connects home cooks with their greatest sources of inspiration — other home cooks.
        We're the world's leading digital food brand, and that inspires us to do everything possible to keep our
        community connected. Sixty-million home cooks deserve no less.
      </p>
      <h3 className='font-bold text-3xl mt-10 mb-4 text-[#ffa500]'>Above all, we are:</h3>
      <ul className=''>
        <li>
          <span className='font-bold'>friendly </span> We love trading ideas and hanging out with fellow home cooks.
        </li>
        <li>
          <span className='font-bold'>Supportive </span> Struggling with dinner inspo? We’re here to help!
        </li>
        <li>
          <span className='font-bold'>Creative </span> Cooking is an art. We like to experiment and express ourselves.
        </li>
        <li>
          <span className='font-bold'>Approachable </span> We don't judge—all cooking levels and recipes are welcome.
        </li>
        <li>
          <span className='font-bold'>Down-to-Earth </span> We love good food, period. It doesn’t need to be fussy to be
          great.
        </li>
        <li className='mb-20'>
          <span className='font-bold '>Fun</span> Like you, we enjoy friends, family, cooking, and having a good laugh.
        </li>
      </ul>
    </div>
  )
}

export default Aboutus
