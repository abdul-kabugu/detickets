import { SearchOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Input, Modal, Avatar } from 'antd';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../components/Checkout';
import { marketItems } from '../components/marketPlaceItems';
import Navbar from '../components/Navbar';


const MarketPlace = () => {
    const [isBuyModal, setIsBuyModal] = useState(false)
    const [buyForAddress, setBuyForAddress] = useState(false)
    const [ticketTobuy, setTicketToBuy] = useState()
    console.log(ticketTobuy)

    const openBuyModal = (ticket) => {
        isBuyModal ? setIsBuyModal(false) : setIsBuyModal(true)
        setTicketToBuy(ticket)
    }
    const cancelModal = () => {
        setIsBuyModal(false)
    }
    const buyTicket = (ticket) =>{
        setIsBuyModal(false)
        alert("ticket name" + ticketTobuy.name)
    }

    
    const {Search} = Input
    const onSearch = () => {
        console.log("waiting  for results ....")
    }
    return <div className='marketplace-container'>
        <Modal
        title='Order Summary'
        visible={isBuyModal}
          onOk={buyTicket}
          width ={260}
          centered
          footer={null}
          onCancel={cancelModal}
         >
         <div className='checkout-header'>
            <div className='checkout-h-left'>
                <Avatar size={60} src={`${ticketTobuy?.img ||  <Avatar style={{ backgroundColor: '#f56a00' }}>D</Avatar>}`}/>
            </div>
            <div className='checkout-h-right'>
                <p className=' event-card-title checkout-name'>{`${ticketTobuy?.name  || "buy this ticket"}`}</p>
            </div>
        </div>
        <div className='checkout-body'>
            <div className='buy-for-container'>
                <input type="text" value={buyForAddress} placeholder="Address" onChange={e => setBuyForAddress(e.target.value)}  className="buy-for-input" />
                <button className='buy-for-btn' disabled>apply</button>
            </div>
            <div className='fees-container'>
                <div className='price-fee fee-container'>
                    <p className='fee-title '>ticket price</p>
                    <p className='fee-amount'><span className='fee-symbol'>$</span>{`${ticketTobuy?.price || '0'}`}</p>
                </div>
                <div className='price-fee fee-container'>
                <p className='fee-title '>platform fee</p>
                    <p className='fee-amount'> <span className="fee-symbol">$</span>0 </p>
                </div>
                <div className='price-fee fee-container'>
                <p className='fee-title '>gas fee</p>
                    <p className='fee-amount'> <span className='fee-symbol'>$</span>--</p>
                </div>
                <div className='price-fee fee-container'>
                <p className='fee-title '>hidden fee</p>
                    <p className='fee-amount'><span className='fee-symbol'>$</span>0</p>
                </div>
            </div>
            <div className='total-amount fee-container'> 
            <p className='fee-title '>total</p>
            <p className='fee-amount'>{`${ticketTobuy?.price || '0'}`}<span className='fee-total-symbol'>usd</span></p>
            </div>
        </div>
        <div className='checkout-footer'>
            <button className='checkout-btn' onClick={buyTicket}>pay  <ArrowRightOutlined style={{color: "white", fontSize: "1rem"}}/></button>
        </div>
           
         </Modal>
             
           <div className='market-nav'> {<Navbar />}</div>
        <div className='marketplace-header-search'>
        <div className='market-header-left'>
            <h2 className='market-title'>marketplace</h2>
        </div>
        <div className='market-header-right'>
        <Search placeholder='Search by name or type' style={{width: 500, height: 600}} onSearch={onSearch} enterButton size='large'/>
        </div>
         
         
        
        </div>
        
       <div className='marketplace-body'>
            {marketItems.map((ticket, i) =>(
                <div className='event-card-container market-card-container' key={i}  >
                <div className='card-cover' >
                <img src={ticket.img} className="event-image"    alt=''/>
                </div>
                <div className='event-card-bottom'>
                    <div className='event-card-bottom-left'>
                      <Link to={`/marketplace/${ticket.id}`}> <p className='event-card-title'>{ticket.name}</p></Link>
                       
                        <p className='ticket-price'>{ticket.price} <span className='price-symbol'>usd</span></p>
                    </div>
                    <div className='event-card-bottom-right'>
                        <button className='card-buy-btn' onClick={() => openBuyModal(ticket)}>buy</button>
                    </div>
                </div> 
                
            </div>
               
            ))}
            </div>
           
           
    </div>;
}



export default MarketPlace;