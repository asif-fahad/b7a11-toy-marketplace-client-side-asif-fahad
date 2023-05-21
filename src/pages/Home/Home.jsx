import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import 'aos/dist/aos.css';
import AOS from 'aos';
import useTitle from '../../hooks/useTitle';


const Home = () => {

    useTitle('Home');

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the element's position when animation starts
            easing: 'ease-in-out', // Easing function for the animation
            once: false, // Whether to only animate elements once or on every scroll
        });
    }, []);


    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <div className='my-7'>
                <h1 className='text-5xl font-black mb-3 text-center'>Shop By Category</h1>
                <CategoryTabs></CategoryTabs>
            </div>

            {/* extra section one */}
            <section className='my-7'>
                <div data-aos="fade-up">
                    <div>
                        <h1 className='text-5xl font-black mb-3 text-center'>Customer Saying</h1>
                    </div>
                    <div className='grid md:grid-cols-2 gap-2 md:w-10/12 mx-auto'>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWh9kgrNK3S8b10WFWv1ZdJ_7ndynNIDaKnGIIbbrwA&s" alt="Person" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Elon Musk</h2>
                                <p>I appreciate the toys sell in this website. It's so important for our kids.</p>
                            </div>
                        </div>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDykN3rkuBQ8VchgR5fSoSQ48cp6dd7bRmqyPGVsHGA&s" alt="Person" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Alen Tucker</h2>
                                <p>Customer service of this website is amazing! I will more next time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* extra section two*/}
            <section className='my-5'>
                <h1 className='text-5xl font-black mb-3 text-center'>Frequently Asked Questions</h1>
                <div className='md:w-10/12 mx-auto'>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is the age range of toys available?
                        </div>
                        <div className="collapse-content">
                            <p>Here is upto 5 years age available.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Do you offer warranty or return policy?
                        </div>
                        <div className="collapse-content">
                            <p>Yes we do.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Can I order toys online?
                        </div>
                        <div className="collapse-content">
                            <p>Yes you can.</p>
                        </div>
                    </div>


                </div>
            </section>
        </div>



    );
};

export default Home;