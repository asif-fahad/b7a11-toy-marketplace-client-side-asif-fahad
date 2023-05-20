import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../hooks/useTitle';

const ToysDetails = () => {

    useTitle('Toys Details');
    const toy = useLoaderData();
    const { _id, name, sName, email, subCategory, price, rating, quantity, details, photo } = toy;


    return (
        <div className='lg:w-3/12 mx-auto my-5'>
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Cars" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-bold">Seller Name:</span> {sName}</p>
                    <p><span className="font-bold">Seller Email:</span> {email}</p>
                    <p><span className="font-bold">Sub-Category:</span> {subCategory}</p>
                    <p><span className="font-bold">Price:</span> {price}</p>
                    <p><span className="font-bold">Available Quantity:</span> {quantity}</p>
                    <p><span className="font-bold">Detail Description:</span> {details}</p>
                    <div className='flex gap-2 items-center'>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly></Rating>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;