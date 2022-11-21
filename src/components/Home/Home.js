import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Home = () => {
    const topicsInfo = useLoaderData();
    const topics = topicsInfo.data;

    return (
        <div>
            <Header></Header>
            <div className='my-24'>
                <h1 className='text-4xl font-semibold text-[#172652] mb-12'>Topics</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-[80%] mx-auto'>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;