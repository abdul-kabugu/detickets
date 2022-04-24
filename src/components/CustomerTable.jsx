import { Table } from 'antd';
import React, {useMemo} from 'react';
import  {useTable} from 'react-table'
import COSTOMER_DATA  from './COSTOMER_DATA.json'
const CustomerTable = () => {

  const COLUMNS = [
    {
      title: 'Name',
      dataIndex: "first_name",
      key: "first_name"
    },
    {
      title: 'Ehereum Address',
      dataIndex: 'ethereum_address',
      key: 'ethereum_address'
    },
    {
      title: 'Email Address',
      dataIndex: "email",
      key: "email"
    },
    {
      title: 'Event',
       dataIndex: 'event_name',
       key: 'event_name'
    },
  ]
     

   
    return <div className='table-container'>
          <Table columns={COLUMNS} dataSource={COSTOMER_DATA}   size='100%' rowClassName="customer-row" pagination={false}/>
    </div>;
}


export default CustomerTable;