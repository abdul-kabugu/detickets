import { ArrowRightOutlined, CloseCircleOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, {useState} from 'react';

const Checkout = () => {
    const [buyForAddress, setBuyForAddress] = useState()
    const [isCancel, setIsCancel] = useState(false)

    //FUNCTIONS
    const BuyTicket = () =>{
        console.log('ticket bought')
    }
    
    return <div className='checkout-container'>
    <div className='checkout-card'>
      <div className='checkout-intro'><h3 className='event-card-title'>order summary</h3>  <CloseOutlined style={{cursor: "pointer"}}/></div> 
        <div className='checkout-header'>
            <div className='checkout-h-left'>
                <Avatar size={60} src='/img/flowers.png'/>
            </div>
            <div className='checkout-h-right'>
                <p className=' event-card-title checkout-name'>this ticket name</p>
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
                    <p className='fee-amount'><span className='fee-symbol'>$</span>120</p>
                </div>
                <div className='price-fee fee-container'>
                <p className='fee-title '>platform fee</p>
                    <p className='fee-amount'> <span className="fee-symbol">$</span>1 </p>
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
            <p className='fee-amount'>130<span className='fee-total-symbol'>usd</span></p>
            </div>
        </div>
        <div className='checkout-footer'>
            <button className='checkout-btn'>pay  <ArrowRightOutlined style={{color: "white", fontSize: "1rem"}}/></button>
        </div>
        </div>
    </div>;
}



export default Checkout;