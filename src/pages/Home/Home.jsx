import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryTabs from '../CategoryTabs/CategoryTabs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <div className='my-5'>
                <CategoryTabs></CategoryTabs>
            </div>

            {/* extra section one */}
            <section>

            </section>

            {/* extra section two*/}
            <section>

            </section>
        </div>



    );
};

export default Home;