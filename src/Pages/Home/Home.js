import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HeroContent from './HeroContent';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeroContent></HeroContent>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;