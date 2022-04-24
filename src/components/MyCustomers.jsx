import React from 'react';
import CustomerTable from './CustomerTable';
import DashbordNav from './DashbordNav';
import LeftTab from './LeftTab';


const MyCustomers = () => {
    return <div className='customers-container'>
     <div className='left-tab-position'> <LeftTab /> </div>
      <div className='costomer-body-container'>
          <DashbordNav />
          <div className='customer-body-content'>
          <h2 className='market-title'>your costomers</h2>
          <CustomerTable />
          </div>
      </div>
    </div>;
}


export default MyCustomers;