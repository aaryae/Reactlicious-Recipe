import React from 'react'
import Bri from "../Images/bri.jpg"
import yumyum from "../Images/yumyum.jpg"
import ginger from "../Images/ginger.jpg"
import book from "../Images/book.jpg"
import burger from "../Images/burger.jpg"
import pizza from "../Images/pizza.jpg"
import "./hardluck.css"

const FeaturedRecipies = () => {
    return (
        <div className='feature-ones'>
            <div className="firstbox">
                <div className="image">
                    <img  className='hover:blur-[2px]' src={burger} alt=""  />
                    <button>Check the recipe <i class="fa-solid fa-arrow-down " style={{color: "#000000",}}></i></button>
                </div>
                <div className="image">
                    <img   className='hover:blur-[2px] hover:border-solid-red-2px' src={pizza} alt=""  />
                    <button>Check the recipe <i class="fa-solid fa-arrow-down" style={{color: "#000000",}}></i></button>
                </div>
            </div>
            <div className="midbox">
                <h1 className='text-[#FFA500] text-2xl tass'>Welcome to our Reactlicious Website,</h1>
                <br /><br />
                <p className='font-bold text-xl '>Do you know ?</p>
                <h2 className='font-bold'>What's better than a good friend?</h2>
                <p>- A Good Friend With Chocolate.</p>
                <br />
                <br />
                <p className='hov' > We believe in the best , So here are some of the best for you <i class="fa-solid fa-arrow-left"></i></p>
            </div>
            <div className="secbox">
                <div className="heading">
                    <h1>News & Trending</h1>
                    <div className="news">
                        <div className="boxes">
                            <img src={Bri} alt="bri" width="70" />
                            <p>The Secret Ingredient That Gives Brie Larson's Christmas Chicken Recipe Ultra-Crispy Skin</p>
                        </div>
                        <div className="boxes">
                            <img src={yumyum} alt="yumyum" width="75" />
                            <p>Meet Texas Yum Yum: The Easiest No-Bake Pie You’ll Ever Make</p>
                        </div>
                        <div className="boxes">
                            <img src={ginger} alt="ginger" width="75" />
                            <p>The Most Adorable Gingerbread House Kit Is Only $9 but Won’t Last Long</p>
                        </div>
                        <div className="boxes">
                            <img src={book} alt="book" width="75" />
                            <p>Finally, Our Best Recipes From Over 25 Years Are Coming Together in a Cookbook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedRecipies