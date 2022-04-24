import React from 'react';
import {Link} from 'react-router-dom'
import { useMoralis } from "react-moralis";

const Navbar = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
    return <div className='nav-container'>
    <div className='left-container'>
        <div className='logo-container'>
          <Link to='/'>  <h2 className='logo'>Detickets.</h2></Link>
        </div>
        <div className='nav-items-container'>
            <ul className='nav-list nav-font'>
               <Link to='/marketplace'> <li className='list-item '>events</li></Link>
               <Link to="/create-ticket"> <li className='list-item '>how it works</li> </Link>
                <Link to="/dashboard"><li className='list-item '>dashboard </li></Link>
              <Link to="user"> <li className='list-item'>user</li></Link> 
            </ul>
        </div>
        </div>
        <div className='nav-right'>
            <button className='btn buy-t-btn' onClick={authenticate}>connect wallet</button>
         
        </div>
    </div>;
}



export default Navbar;