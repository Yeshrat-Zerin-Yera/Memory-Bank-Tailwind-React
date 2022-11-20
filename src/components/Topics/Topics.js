import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topicsInfo = useLoaderData();
    const topics = topicsInfo.data;

    return (
        <div>
            <h1>Topics: {topics.length}</h1>
        </div>
    );
};

export default Topics;