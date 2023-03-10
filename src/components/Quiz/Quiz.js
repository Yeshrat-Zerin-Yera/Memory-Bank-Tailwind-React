import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const topic = useLoaderData();
    const { name, questions } = topic.data;

    return (
        <div className='my-24 font-semibold text-[#172652]'>
            <h1 className='text-4xl mb-6'>Quiz of {name}</h1>
            {
                questions.map((question, index) => <Question key={question.id} question={question} index={index + 1}></Question>)
            }
        </div>
    );
};

export default Quiz;