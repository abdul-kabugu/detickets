import React from 'react';
import DashbordNav from './DashbordNav';
import LeftTab from './LeftTab';
import { PlusCircleOutlined  } from '@ant-design/icons';
import EventsTable from './EventsTable';

const MyEvents = () => {
    return <div className='myevents-container'>
        <LeftTab />
        <div style={{width: "100%"}}>
         <div className='myevents-body'>
             <DashbordNav />
         </div>
         <div className='myevents-list-container'>
         <div className='myevents-list-header'>
         <div className='myevents-list-header-left'>
         <h2 className='market-title'>your events</h2>
           <p style={{fontSize: "1.2rem"}}>Your self-owned NFT collections allow you to issue access credintial immutably. <br /> You see the code, you own the key, you are the admin.</p></div>
           <button className='addnew-btn'> <PlusCircleOutlined style={{fontSize: "15px"}}/> New event</button>
         </div>
         <EventsTable />
         </div>
         </div>
    </div>;
}


export default MyEvents;