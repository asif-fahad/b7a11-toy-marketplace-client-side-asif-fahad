import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const data = useLoaderData();
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState([data])




    const handleSearch = () => {
        fetch(`http://localhost:5000/toysSearch/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
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
                            data.map(toy => <AllToysRow
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