import React from 'react';

import Header from "./components/Header";
import "./app.css"
import FeaturedRecipies from "./components/FeaturedRecipies";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RecipeList from './components/RecipeList';


function App() {
 
  return (
    <div className="App">
      <Header/>
      {/* <Banner/>
      <FeaturedRecipies/>
      <Footer/> */}
    <RecipeList/>
      
     
    </div>
  );
}

export default App;
