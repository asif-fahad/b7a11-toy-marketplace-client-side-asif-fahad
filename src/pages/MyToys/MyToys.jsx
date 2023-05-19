import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import MyToysRow from './MyToysRow';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/toys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, [])

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available Quantity</th>
                        <th>Details Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myToys.map(myToy => <MyToysRow
                            key={myToy._id}
                            myToy={myToy}
                        ></MyToysRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;