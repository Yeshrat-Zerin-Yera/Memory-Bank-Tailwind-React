import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Question = ({ question }) => {
    const [clicked, setClicked] = useState(false);
    const { options, correctAnswer } = question;

    // Click Handle
    const handleClick = (event, question) => {
        const selectedAnswer = event.target.innerText;
        const correctAnswer = question.correctAnswer;
        (selectedAnswer.replace(/\s/g, "") === correctAnswer.replace(/\s/g, "")) ? toast.success("Correct Answer !") : toast.error("Wrong Answer !");
    }

    return (
        <div className='shadow-xl rounded mb-6 p-12 md:w-[80%] lg:w-[60%] m-auto text-left relative'>
            <h1 className='text-2xl mb-6'>Quiz: {question.question}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    options.map(option => <p onClick={(event) => handleClick(event, question)} key={option} className='bg-purple-100 hover:bg-purple-200 rounded p-6'>{option}</p>)
                }
            </div>

            {/* Eye Toggle */}
            <div onClick={() => setClicked(!clicked)} className='absolute top-4 right-4 text-2xl hover:text-[#3050ad]'>
                {
                    clicked ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />
                }
            </div>

            {/* Show Correct Answer */}
            <div className='h-6 mt-3'>
                <p className={`${clicked ? 'block' : 'hidden'} text-green-600`}>{correctAnswer}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;