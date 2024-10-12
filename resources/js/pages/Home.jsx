import React from 'react';
import Layout from '../layout/Layout';
import Slider from './HeroSection/Slider';

const Home = () => {
    return (
        <div className=''>
            <Slider/>
        </div>
    );
};

Home.layout = page => <Layout children={page}/>

export default Home;