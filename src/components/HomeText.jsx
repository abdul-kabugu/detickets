import React,{useState} from 'react';

 
const HomeText = () => {
    const [email, setEmail] = useState()
    return <div className='home-text'>
    <div className='home-text-left'>
        <span className='home-featured'>Metaverse.</span>
        <span className='home-featured dance'>Events.</span> <br />
        <span className='home-featured'>Buy tickets.</span>
        <div className='join-beta'>
           <input type="text" value={email} placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} className="join-box"/>
           <button className='beta-btn'>Join beta</button>
        </div>
        </div>
        <div className='home-text-right'>
        <div className='right-card'>
            <div className='rightcard-header'></div>
             <img src='img/buy-ticket.png' alt='buy ticket' className='buy-ticket-img' />
            </div>
        </div>
        
    </div>;
}


export default HomeText;