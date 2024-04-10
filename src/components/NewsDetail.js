import React, { useState } from "react";
import { useEffect } from "react";

const NewsDetail = () =>
{
    const [fetchedData, setfetchedData] = useState([]);
    useEffect(() =>
    {
        fetch(
            "https://newsapi.org/v2/everything?q=tesla&from=2024-03-09&sortBy=publishedAt&apiKey=fb6e45d574924ffca24c02b0d8fd3798"
        )
            .then((res) => res.json())
            .then((data) => setfetchedData(data.articles))
            .catch((error) =>
            {
                console.log(error);
            });
    }, []);
    return <div>{fetchedData.description}</div>;
};

export default NewsDetail;
