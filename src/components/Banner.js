import React from 'react'

const Banner = () => {
    const heroStyles = {
        boxShadow:  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      };
  return (
    <div className='bg-[#4B0082] text-white font-bold mt-10 p-5 text-center tracking-wide' style={heroStyles}>
        Nepal's #1 best Trusted REcipe Resources | Original Recipies | Verified By Top Level Chefs including G͟o͟r͟d͟o͟n͟ R͟a͟m͟s͟e͟y͟
    </div>
  )
}

export default Banner