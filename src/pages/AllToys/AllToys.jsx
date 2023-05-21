import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {

    useTitle('All Toys')

    const data = useLoaderData();

    // console.log(data);
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState(data)


    const handleSearch = () => {
        if (searchText) {
            fetch(`https://b7a11-toy-marketplace-server-side-asif-fahad.vercel.app/getToysByText/${searchText}`)
                .then(res => res.json())
                .then(data => setToys(data))
        }
        else {
            setToys(data)
        }

    }


    // console.log(toys)

    return (
        <div>
            <div className='text-center my-3 space-x-2'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" />{" "}
                <button onClick={handleSearch} className='btn btn-xs'>Search</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Seller Name</th>
                            <th>Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys && toys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}

                            ></AllToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;