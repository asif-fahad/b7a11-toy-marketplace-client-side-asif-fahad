import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-image' >
            <div className='h-full flex flex-col items-center justify-center bg-gradient-to-r from-black gap-10'>
                <h1 className='text-6xl text-white'>
                    <span className='text-indigo-300'>Welcome to the,</span>
                    <br />
                    magical world
                    <br />
                    <span className='text-blue-400' >of toys</span>
                </h1>
                <p className='text-2xl text-gray-300'>
                    where imagination knows no bounds and the possibilities for fun are endless!
                </p>
            </div>
        </div>
    );
};

export default Banner;