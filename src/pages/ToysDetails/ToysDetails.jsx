import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
    const toy = useLoaderData();
    const { _id, name, sName, email, subCategory, price, rating, quantity, details, photo } = toy;


    return (
        <div>
            details {name}
        </div>
    );
};

export default ToysDetails;