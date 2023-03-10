import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../images/banner.png';

const Header = () => {
    return (
        <div className='font-semibold text-[#ffffff] bg-[#172652] flex items-center justify-center gap-12 py-[5%] w-[100%] flex-col md:flex-row'>
            <div className='basis-2/5 text-left ml-6'>
                {/* Header Details */}
                <h1 className='text-4xl mb-6'>Select The Correct Option, Measure Your Knowledge</h1>
                <p className='text-[20px] mb-6'>With memory bank you can make your memory more sharper. Select the topic you want to test your knowledge in.</p>
                <Link to='/statistics' className='bg-[#00efe8] text-[#172652] p-3 rounded hover:bg-[#a4fffc]'>
                    View Statistics
                    <FontAwesomeIcon icon={faArrowRight} className='ml-1 align-middle' />
                </Link>
            </div>

            {/* Header Image */}
            <div className='basis-2/5'>
                <img src={Banner} alt='' className='w-[100%]'></img>
            </div>
        </div>
    );
};

export default Header;