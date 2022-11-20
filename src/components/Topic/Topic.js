import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className='relative text-[#172652] font-extrabold p-3 rounded shadow-xl'>
            <img src={logo} alt='' className='bg-purple-100 rounded mb-3 w-[100%]'></img>
            <div className='flex items-center justify-between'>
                <p>{name}</p>
                <Link to='' className='text-[#0072ce]'>
                    Start Quiz
                    <FontAwesomeIcon icon={faArrowRight} className='ml-1 align-middle' />
                </Link>
            </div>
            <div className='absolute top-4 right-4 bg-[#00efe8] text-[#ffffff] h-6 w-6 rounded-full'>{total}</div>
        </div>
    );
};

export default Topic;