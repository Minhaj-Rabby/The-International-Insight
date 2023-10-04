import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import NewsCard from '../NewsCard/NewsCard';

const Categories = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    // ?console.log(categoryNews);
    return (
        <div>
            <h3 className='mb-4'>The International Insight</h3>
            {
            categoryNews.map(news=> <NewsCard
            key={news._id}
            news={news}
            ></NewsCard>)
            }
        </div>
    )
}

export default Categories