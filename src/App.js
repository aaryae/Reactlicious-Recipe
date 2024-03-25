import React from 'react';

import Header from "./components/Header";
import "./app.css"
import FeaturedRecipies from "./components/FeaturedRecipies";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News';
// import Detailrecipe from './components/Detailrecipe';



function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Banner/>
      <Routes>
        <Route path='/' element={<FeaturedRecipies/>} />
        <Route path='/recipes' element={<RecipeList/>} />
        <Route path='/addrecipes' element={<RecipeForm/>} />
        <Route path='/News' element={<News/>} />
        {/* <Route path='/detailrecipe' element={<Detailrecipe/>} /> */}
      </Routes>
      </BrowserRouter>
     
      <Footer/>
      
    
    </div>
  );
}

export default App;
