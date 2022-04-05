import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return <div className='nav-container'>
    <div className='left-container'>
        <div className='logo-container'>
          <Link to='/'>  <h2 className='logo'>Rafer.</h2></Link>
        </div>
        <div className='nav-items-container'>
            <ul className='nav-list nav-font'>
               <Link to='/marketplace'> <li className='list-item '>marketplace</li></Link>
               <Link to="/create-ticket"> <li className='list-item '>create tickets</li> </Link>
                <Link to="/faqs"><li className='list-item '>how it works</li></Link>
               <Link to="my-tickets"> <li className='list-item'>my tickets</li></Link>
            </ul>
        </div>
        </div>
        <div className='nav-right'>
            <button className='btn buy-t-btn'>connect wallet</button>
         
        </div>
    </div>;
}



export default Navbar;