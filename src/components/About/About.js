import React from 'react';
import Features from '../../images/features.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const features = useLoaderData();

    return (
        <div className='font-semibold text-[#172652]'>
            {/* Title */}
            <div className='bg-[#172652] text-[#ffffff] w-100 h-60 flex items-center justify-center'>
                <h1 className='text-4xl px-3'>About Memory Bank</h1>
            </div>

            {/* Body */}
            <div className='flex items-center justify-center gap-12 flex-col md:flex-row py-12'>
                {/* Details */}
                <div className='text-left ml-6 basis-2/5'>
                    <h1 className='text-4xl mb-6'>Our Goal is Better User Experience</h1>
                    {
                        features.map(feature => <p key={feature} className='text-[20px] mb-3'>
                            <FontAwesomeIcon icon={faArrowRight} className='mr-2 align-middle h-6 w-6 rounded-full bg-green-600 text-[#ffffff]' />
                            {feature}
                        </p>)
                    }
                </div>

                {/* Image */}
                <div className='basis-2/5'>
                    <img src={Features} alt='' className='w-[100%]'></img>
                </div>
            </div>
        </div>
    );
};

export default About;