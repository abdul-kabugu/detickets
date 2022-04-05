import { MailOutlined, WarningOutlined } from '@ant-design/icons';
import React from 'react';

 
const TicketTips = () => {
    return <div className='ticket-tips'>
        <h3>Arrive 10 minutes early and complete these steps so you’re ready to go before the event begins:</h3>
        <div className='steps-list'>
            <div className='step-1-container step'>
               <img src='/img/metamask.svg'   alt='' className='metamsk-icon' />
               <p className='tip-title'>connect your  wallet in advance to buy your ticket </p>
            </div>
            <div className='step-2-container step'>
                <MailOutlined style={{fontSize: "25px", padding: "10px", color: "blue"}}/>
                <p className='tip-title'>join our news mail to get notification for hot deals</p>
            </div>
            <div className='step-3-container step'>
                <img src='/img/mana.svg'     alt='' className='mana-icon'/>
                <p className='tip-title'>fund your account mana to buy metaverse concert tickets </p>
            </div>
            <div className='step-4-container step'>
                <WarningOutlined  style={{fontSize: "25px", paddingLeft: "10px", color: 'red'}}/>
                <p className='tip-title'>Event details can vary. Check for important details like ticket limits before the sale. </p>
            </div>
        </div>
    </div>;
}



export default TicketTips;