import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard'
import useTitle from '../../../hook/useTitle';
const Home = () => {
     const allNews=useLoaderData();
     useTitle("Home");
    return (
        <div>
            <h2>Home Page News:{allNews.length}</h2>
            {
                allNews.map(news=><NewsCard
                key={news._id}
                news={news}></NewsCard>)
            }
        </div>
    );
};

export default Home;