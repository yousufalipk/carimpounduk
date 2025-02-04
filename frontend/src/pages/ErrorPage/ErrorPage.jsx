import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <h1 className='text-5xl font-bold'>
                404 | Page not found!
            </h1>
            <button
                onClick={() => {
                    navigate('/');
                }}
                className=''>
                Go Back
            </button>
        </div>
    )
}

export default ErrorPage;
