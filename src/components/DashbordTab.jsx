import { FilePdfOutlined, FileProtectOutlined, QrcodeOutlined, WalletOutlined } from '@ant-design/icons';
import React from 'react';
import DashbordNav from './DashbordNav';
import { myTicketList } from './myTicketList';

const DashbordTab = () => {
    return <div className='dashbord-tab-container'>
    
    <DashbordNav />
    <div className='dashbord-tab-body'>
    <h2 className='market-title'>your tickets</h2>
    <div className='dashbord-tab-tickets'>
    {myTicketList.map( ticket => (
        <div className='ticket-card-container' key={ticket.id}>
        <div className='ticket-card-cover'>
            <img src={ticket.img}    alt='' className='ticket-image'/>
            </div>
            <div className='ticket-card-bottom'>
             <p className='event-card-title'>{ticket.name}</p>
             <div className='ticket-buttons'>
                 <QrcodeOutlined style={{fontSize: "19px", cursor:"pointer"}}/>  <WalletOutlined  style={{fontSize: "19px", cursor:"pointer"}}/>  <FileProtectOutlined  style={{fontSize: "19px", cursor: "pointer"}}/>
             </div>
             </div>
        </div>
    ))}
    </div>
    </div>
    </div>;
}


export default DashbordTab;