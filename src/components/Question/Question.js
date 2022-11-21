import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    const { options, correctAnswer } = question;

    const calculation = () => {
        document.addEventListener('click', function (event) {
            event.stopPropagation();
            const selectedItem = event.target.innerText;
            if (selectedItem.replace(/\s/g, "") === correctAnswer.replace(/\s/g, "")) {
                toast.success("Correct Answer !");
            }
            else if (selectedItem.replace(/\s/g, "") !== correctAnswer.replace(/\s/g, "")) {
                toast.error("Wrong Answer !");
            }
            console.log(selectedItem.replace(/\s/g, ""), correctAnswer.replace(/\s/g, ""));
        });
    };

    return (
        <div className='shadow-xl rounded mb-6 p-12 md:w-[80%] lg:w-[60%] m-auto text-left'>
            <h1 className='text-2xl mb-6'>Quiz: {question.question}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    options.map(option => <p key={option} className='bg-purple-100 hover:bg-purple-200 rounded p-6' onClick={calculation}>{option}</p>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;