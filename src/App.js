import React from "react";

import Header from "./components/Header";
import "./app.css";
import FeaturedRecipies from "./components/FeaturedRecipies";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";
import RecipeDetail from "./components/RecipeDetail";
import Aboutus from "./components/Aboutus";
import NewsDetail from "./components/NewsDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<FeaturedRecipies />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/addrecipes" element={<RecipeForm />} />
          <Route path="/news" element={<News />} />
          <Route path="news/:newsid" element={<NewsDetail />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetail />} />{" "}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
