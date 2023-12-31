import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {

    useTitle('My Toys')

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [sorted, setSorted] = useState(true)


    const url = `https://b7a11-toy-marketplace-server-side-asif-fahad.vercel.app/toysEmailSort?email=${user?.email}&sort=${sorted ? 'ascending' : 'descending'}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, [user, sorted]);

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://b7a11-toy-marketplace-server-side-asif-fahad.vercel.app/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== _id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
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
                            <th className='flex items-center gap-2'>Price <button className='text-lg' onClick={() => setSorted(!sorted)}>{sorted ? '↓' : '↑'}</button></th>
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
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;