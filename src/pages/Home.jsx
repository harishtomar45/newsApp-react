import React, { useContext, useEffect } from "react";
import Carousel from "../components/Carousel";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsAction";



const Home = () => {
  const { allNews, dispatch } = useContext(NewsContext);

  const getNews = async (topic) => {
    const data = await fetchNews(topic);

    
    
    dispatch({
      type : "GET_NEWS",
      payload : data,
    })


  }

  useEffect(()=> {
    getNews("Indore");
  }, [])


  return (
    <div>
      <Carousel />

      <div className="container-fluid p-5">
        <h3 className="text-center my-3">Top News</h3>

        <section>
          <div className="row g-3">
            <WeatherCard />
            <div className="col-md-8 col-sm-12">
              {allNews?.map((news, index) => (
                <NewsCard key={index} news={news} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
