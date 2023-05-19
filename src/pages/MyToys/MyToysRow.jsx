import React from 'react';

const MyToysRow = ({ myToy }) => {

    const { name, sName, email, subCategory, price, rating, quantity, details, photo } = myToy;
    console.log(myToy);

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
                <div className='flex flex-col gap-2'>
                    <button className="btn btn-outline btn-xs">Update</button>
                    <button className="btn btn-danger btn-xs">Delete</button>
                </div>
            </th>
        </tr>

    );
};

export default MyToysRow;