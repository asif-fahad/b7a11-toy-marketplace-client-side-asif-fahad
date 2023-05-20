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

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-asif-fahad.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

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
        <Tabs>
            <TabList>
                <Tab>Sports Car</Tab>
                <Tab>Truck</Tab>
                <Tab>Fire Truck</Tab>
            </TabList>
            <TabPanel >
                <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                    {
                        toys.filter(t => t.subCategory == "Sports Car").map(t => <div key={t._id}>
                            <div className="card w-full lg:w-96 h-96 bg-base-100 shadow-xl">
                                <figure><img src={t.photo} alt="Cars" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{t.name}</h2>
                                    <p><span className="font-bold">Price:</span> {t.price}</p>
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
            <TabPanel>
                <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                    {
                        toys.filter(t => t.subCategory == "Truck").map(t =>
                            <div key={t._id}>
                                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                                    <figure><img src={t.photo} alt="Cars" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{t.name}</h2>
                                        <p><span className="font-bold">Price:</span> {t.price}</p>
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
            <TabPanel>
                <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                    {
                        toys.filter(t => t.subCategory == "Fire Truck").map(t =>
                            <div key={t._id}>
                                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                                    <figure><img src={t.photo} alt="Cars" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{t.name}</h2>
                                        <p><span className="font-bold">Price:</span> {t.price}</p>
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