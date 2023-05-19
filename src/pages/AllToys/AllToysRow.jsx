import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {

    const { _id, name, sName, email, subCategory, price, rating, quantity, details, photo } = toy;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{name}</div>
            </td>
            <td>
                <div className="font-semibold">{sName}</div>
            </td>
            <td>
                <div className="font-semibold">{email}</div>
            </td>
            <td>
                <div className="font-semibold">{subCategory}</div>
            </td>
            <td>
                <div className="font-semibold">{price}</div>
            </td>
            <td>
                <div className="font-semibold">{rating}</div>
            </td>
            <td>
                <div className="font-semibold">{quantity}</div>
            </td>
            <td>
                <div className="font-semibold">{details}</div>
            </td>
            <th>
                <Link to={`/details/${_id}`}><button className="btn btn-outline btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;