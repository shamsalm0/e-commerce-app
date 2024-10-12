import React from 'react';
import Layout from '../layout/Layout';
import Slider from './HeroSection/Slider';
import FeaturedProd from '../components/FeaturedProd/FeaturedProd';

const Home = () => {
    return (
        <div className=''>
            <Slider/>
            <FeaturedProd/>
        </div>
    );
};

Home.layout = page => <Layout children={page}/>

export default Home;