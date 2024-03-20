import React from 'react';

import Header from "./components/Header";
import "./app.css"
import FeaturedRecipies from "./components/FeaturedRecipies";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';



function App() {
 
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <FeaturedRecipies/>
      <Footer/>
    <RecipeList/>
      <RecipeDetail/>
      <RecipeForm/>
     
    </div>
  );
}

export default App;
