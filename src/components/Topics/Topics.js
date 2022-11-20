import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Topics = () => {
    const topicsInfo = useLoaderData();
    const topics = topicsInfo.data;

    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default Topics;