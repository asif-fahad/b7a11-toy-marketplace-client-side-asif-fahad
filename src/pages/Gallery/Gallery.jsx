import React from 'react';
import one from '../../../public/images/cars/car-1.jpg';
import two from '../../../public/images/cars/car-2.jpg';
import three from '../../../public/images/cars/car-3.jpg';
import four from '../../../public/images/cars/car-4.jpg';

const Gallery = () => {

    return (
        <div>
            <div className='text-center my-7'>
                <h1 className='text-5xl font-black'>Recent Photoshots</h1>
                <p className='text-2xl font-bold'>Gallery</p>
            </div>
            <div className='card w-full bg-base-100 shadow-2xl grid grid-cols-1 lg:grid-cols-4 gap-2 md:w-10/12 mx-auto'>
                <div className="">
                    <figure><img src={one} alt="Shoes" /></figure>
                </div>
                <div className="">
                    <figure><img src={two} alt="Shoes" className='object-contain' /></figure>
                </div>
                <div className="">
                    <figure><img src={three} alt="Shoes" /></figure>
                </div>
                <div className="">
                    <figure><img src={four} alt="Shoes" /></figure>
                </div>
            </div>
            {/* <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" /> */}
        </div>
    );
};

export default Gallery;