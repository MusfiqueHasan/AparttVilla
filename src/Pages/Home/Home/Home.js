import React from 'react';
import Navbar from '../../SharedPage/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Divisions from '../Divisions/Divisions';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Divisions />
        </div>
    );
};

export default Home;