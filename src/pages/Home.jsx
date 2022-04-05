import React from 'react';
import HomeFooter from '../components/HomeFooter';
import HomeText from '../components/HomeText';
import Navbar from '../components/Navbar';
import PopularEvents from '../components/PopularEvents';
import Search from '../components/Search';
import TrySlider from '../components/TrySlider';
import './globalStyles.css'
import MarketPlace from './MarketPlace';
const Home = () => {
    return <div className='home-contaner'>
        <div className='main-page-view'>
           <Navbar />
            <HomeText />
            <Search />
            
           
        </div>

    </div>;
}

export default Home;