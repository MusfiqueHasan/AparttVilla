import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../SharedPage/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Divisions from '../Divisions/Divisions';
import PropertiesBanner from '../PropertiesBanner/PropertiesBanner';
import PropertiesInHome from '../PropertiesInHome/PropertiesInHome';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Divisions />
            <PropertiesBanner />
            <PropertiesInHome />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;