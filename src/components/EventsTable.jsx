import React from 'react';
import { Table } from 'antd';
const EventsTable = () => {
    const dataSource = [
        {
          key: '1',
          name: 'New york sports',
          duration: "5 days",
          quantity: '100 / 200',
          price: "120 USD",
          balance: "200 USD"

        },
        {
          key: '2',
          name: 'Elon musk birthdays',
          
          duration: "5 days",
          quantity: '100 / 200',
          price: "120 USD",
          balance: "300 USD"
        },
        {
            key: '3',
            name: 'decentraland meetup',
            
            duration: "6 days",
            quantity: '100 / 500',
            price: "120 USD",
            balance: "300 USD"
          },

         
      ];

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Duration',
          dataIndex: 'duration',
          key: 'Duration',
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
        },

        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
          },

          {
            title: 'Manage',
            key: '4',
            dataIndex: '4',
            render: (text, record) => (
             <button onClick={()=> console.log(record)} style={{backgroundColor: "#096dd9", color: "white", padding: "10px 20px", border: "unset", borderRadius: "14px", cursor: "pointer"}}>
               {"Manage"}
             </button>
            ),
          },
      ];
      
    return <div className='event-table-container'>
     <Table dataSource={dataSource} columns={columns} pagination={false} style={{color: "red"}}/>;
    </div>;
}



export default EventsTable;