import React from 'react';
import { CalendarOutlined, InboxOutlined, PieChartOutlined, PlusCircleOutlined, SketchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu, Tabs } from 'antd';
import { Tab } from 'antd';
import MyEvents from '../components/MyEvents'
import MyOrders from '../components/MyOrders'
import MyCustomers from '../components/MyCustomers'
import Airdrop from '../components/Airdrop'
import MyTickets from '../components/MyTickets'
import DashbordTab from '../components/DashbordTab';
import {Link} from 'react-router-dom'
import DashbordNav from '../components/DashbordNav';
const LeftTab = () => {
    const  {Item} = Menu
    const { TabPane } = Tabs;
    return  <div className='left-tab'>
    <div className='logo-container'>
        <img src='/img/logo-4.svg'    alt='' className='logo-image' />
    </div>
   <Menu theme='dark' style={{width: 256, fontSize: "1rem"}}>
       <Item icon={<PieChartOutlined style={{fontSize: "22px"}}/>}  style={{fontSize: "22px"}}>
        Dashbord
       </Item>
       <Item icon={<CalendarOutlined  style={{fontSize: "22px"}}/>}  style={{fontSize: "22px"}}>
           <Link to="/myevents">Events</Link>
       </Item>
       {/*<Item icon={<InboxOutlined  style={{fontSize: "22px"}}/>} style={{fontSize: "22px"}}>
           <Link to="/myevents">Orders</Link>
       </Item>*/}
       <Item icon={<UsergroupAddOutlined  style={{fontSize: "22px"}}/>}  style={{fontSize: "22px"}}>
           <Link to="/customers">Customers</Link>
       </Item>
       <Item icon={<SketchOutlined  style={{fontSize: "22px"}}/>}  style={{fontSize: "22px"}}>
           Airdrop
       </Item>

      <Item>
          <button style={{color: "black", marginTop: "200px"}}>buy</button>
      </Item>
   </Menu>
     <Link to="/create"><button className='create-btn'> <PlusCircleOutlined style={{fontSize: "22px"}}/> New event</button></Link>
   </div>
}



export default LeftTab;