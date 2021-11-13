import React from 'react';
import Navbar from '../../SharedPage/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Divisions from '../Divisions/Divisions';
import PropertiesInHome from '../PropertiesInHome/PropertiesInHome';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Divisions />
            <PropertiesInHome/>
        </div>
    );
};

export default Home;