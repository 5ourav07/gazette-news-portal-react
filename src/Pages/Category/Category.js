import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCards from '../Shared/NewsCards/NewsCards';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <h2>This is Category Has {categoryNews.length} News</h2>
            {
                categoryNews.map(news => <NewsCards
                    key={news._id}
                    news={news}
                ></NewsCards>)
            }
        </div>
    );
};

export default Category;