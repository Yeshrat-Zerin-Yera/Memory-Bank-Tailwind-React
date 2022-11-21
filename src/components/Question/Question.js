import React from 'react';

const Question = ({ question }) => {
    const { options } = question;
    return (
        <div className='shadow-xl rounded mb-6 p-12 md:w-[80%] lg:w-[60%] m-auto text-left'>
            <h1 className='text-2xl mb-6'>Quiz: {question.question}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    options.map(option => <p className='bg-purple-100 rounded p-6'>{option}</p>)
                }
            </div>
        </div>
    );
};

export default Question;