import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const toys = useLoaderData();

    // console.log(toys)

    return (
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
                        toys.map(toy => <AllToysRow
                            key={toy._id}
                            toy={toy}

                        ></AllToysRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;