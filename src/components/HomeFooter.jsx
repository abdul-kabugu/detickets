import { InstagramFilled, TrademarkOutlined, TwitterCircleFilled } from '@ant-design/icons';
import React from 'react';

const HomeFooter = () => {
    return <div className='home-footer'>
        <div className='home-footer-left'>
            <h4 className='footer-title'>debble tickets</h4> <TrademarkOutlined  style={{fontSize: "10px"}}/>
        </div>
        <div className='home-footer-right'>
          <TwitterCircleFilled style={{fontSize: "30px"}}/>  
          <InstagramFilled  style={{fontSize: "30px"}}/>
          <img src='img/discord.png'  alt='' className='discord' style={{width: "30px"}}/>
          <img src='img/telegram.png'  alt='' className='telegram' style={{width: "30px"}}/>
        </div>
    </div>;
}



export default HomeFooter;