import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const CategoryTabs = () => {

    const { user } = useContext(AuthContext);

    // const [toys, setToys] = useState([]);

    const [category, setCategory] = useState("Sports Car");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            `https://b7a11-toy-marketplace-server-side-asif-fahad.vercel.app/filter/${category}`,
            {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, [category]);

    const handleAlert = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to log in first to view details',
            })
        }
    }

    return (
        <Tabs className="text-center flex flex-col justify-center">
            <TabList className="tabs md:flex md:justify-around tabs-boxed mx-auto bg-blue-500 shadow-xl  w-1/2 font-bold text-center p-7 my-2">
                <Tab onClick={() => setCategory("Sports Car")}
                    className="tab rounded-md text-xl sm:mx-auto"
                >Sports Car</Tab>
                <Tab onClick={() => setCategory("Truck")}
                    className="tab rounded-md text-xl sm:mx-auto">Truck</Tab>
                <Tab onClick={() => setCategory("Fire Truck")}
                    className="tab rounded-md text-xl sm:mx-auto">Fire Truck</Tab>
            </TabList>
            {/* first tab */}
            <TabPanel >
                <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                    {
                        category == "Sports Car" && data.map(t => <div key={t._id}>
                            <div className="card w-9/12 mx-auto lg:w-96 h-96 bg-base-100 shadow-xl">
                                <figure><img src={t.photo} alt="Cars" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{t.name}</h2>
                                    <p><span className="font-bold">Price:</span> {t.price}$</p>
                                    <div className='flex gap-2 items-center'>
                                        <Rating style={{ maxWidth: 150 }} value={t.rating} readOnly></Rating>
                                        <p>{t.rating}</p>
                                    </div>
                                    <Link to={`/details/${t._id}`}><button onClick={handleAlert} className="btn btn-outline btn-xs">View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </TabPanel>
            {/* second tab */}
            <TabPanel>
                <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                    {
                        category == "Truck" && data.map(t =>
                            <div key={t._id}>
                                <div className="card w-9/12 mx-auto lg:w-96 h-96 bg-base-100 shadow-xl">
                                    <figure><img src={t.photo} alt="Cars" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{t.name}</h2>
                                        <p><span className="font-bold">Price:</span> {t.price}$</p>
                                        <div className='flex gap-2 items-center'>
                                            <Rating style={{ maxWidth: 150 }} value={t.rating} readOnly></Rating>
                                            <p>{t.rating}</p>
                                        </div>
                                        <Link to={`/details/${t._id}`}><button onClick={handleAlert} className="btn btn-outline btn-xs">View Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </TabPanel>
            {/* third tab */}
            <TabPanel>
                <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                    {
                        category == "Fire Truck" && data.map(t =>
                            <div key={t._id}>
                                <div className="card w-9/12 mx-auto lg:w-96 h-96 bg-base-100 shadow-xl">
                                    <figure><img src={t.photo} alt="Cars" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{t.name}</h2>
                                        <p><span className="font-bold">Price:</span> {t.price}$</p>
                                        <div className='flex gap-2 items-center'>
                                            <Rating style={{ maxWidth: 150 }} value={t.rating} readOnly></Rating>
                                            <p>{t.rating}</p>
                                        </div>
                                        <Link to={`/details/${t._id}`}><button onClick={handleAlert} className="btn btn-outline btn-xs">View Details</button></Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default CategoryTabs;