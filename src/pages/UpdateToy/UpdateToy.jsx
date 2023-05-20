import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {

    useTitle('Update Toy')

    const toy = useLoaderData();
    const { _id, name, sName, email, subCategory, price, rating, quantity, details, photo } = toy;

    const { user } = useContext(AuthContext);

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const sName = form.sName.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedToy = { name, sName, email, subCategory, price, rating, quantity, details, photo };

        console.log(updatedToy);

        fetch(`https://b7a11-toy-marketplace-server-side-asif-fahad.vercel.app/toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="bg-gray-300 p-24">
            <h2 className="text-3xl font-extrabold text-center">Update a Toy: {name}</h2>
            <form onSubmit={handleUpdateToy}>
                {/* form toy name and seller name*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" defaultValue={name} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sName" placeholder="Seller Name" defaultValue={user?.displayName} className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* form seller email and subCategory */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Seller Email" defaultValue={user?.email} className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <select className="select w-full max-w-xs" name='subCategory' defaultValue={subCategory}>
                            <option disabled selected>Pick your favorite Toy Car</option>
                            <option>Sports Car</option>
                            <option>Truck</option>
                            <option>Fire Truck</option>
                        </select>
                    </div>
                </div>
                {/* form price and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form quantity and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" defaultValue={quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdateToy;