import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-03-09&sortBy=publishedAt&apiKey=fb6e45d574924ffca24c02b0d8fd3798"
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles.slice(1, 10));
      })
      .catch((error) => console.error("Failed to fetch news:", error));
  }, []);

  return (
    <div className="Recipieshoni max-w-screen-2xl mx-auto mt-20 mb-0 bg-[#ffffff] p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
        {news.map((article, index) => (
          <div key={index} className=" overflow-hidden ">
            {/* <a href={article.urlToImage}>more</a> */}
            <Link to={`/news/${article.source.name}`}>
              <img
                className="w-full "
                src={article.urlToImage}
                alt={article.source_id}
              />
              <h2 className="font-bold">{article.title}</h2>
            </Link>
            {/* Render other article details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
