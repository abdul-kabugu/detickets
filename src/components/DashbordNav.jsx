import React from 'react';
import {useMoralis}  from 'react-moralis'
const DashbordNav = () => {
    const {authenticate} = useMoralis()
    return <div className='dashbord-nav'>
        <button className='connect-btn' onClick={authenticate}> connect wallet</button>
    </div>;
}



export default DashbordNav;