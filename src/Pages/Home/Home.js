import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Shared/NewsCards/NewsCards';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            <h2>Total News: {allNews.length}</h2>
            {
                allNews.map(news => <NewsCards
                    key={news._id}
                    news={news}
                ></NewsCards>)
            }
        </div>
    );
};

export default Home;