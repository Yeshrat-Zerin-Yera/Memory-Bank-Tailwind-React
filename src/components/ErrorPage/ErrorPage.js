import React from 'react';

const ErrorPage = () => {
    return (
        <div className='h-[80vh] w-[100%] flex flex-col items-center justify-center text-[#172652] font-semibold'>
            <h1 className='text-4xl font-extrabold'>Oops!</h1>
            <p className='my-6'>Sorry, an unexpected error has occurred.</p>
            <i className='text-[#2b438a]'>Not Found</i>
        </div>
    );
};

export default ErrorPage;