import { InstagramFilled, TwitterCircleFilled } from '@ant-design/icons';
import React from 'react';
import {useParams} from 'react-router-dom'
import { marketItems } from '../components/marketPlaceItems';
import Navbar from '../components/Navbar'
import TicketTips from '../components/TicketTips';
const TicketPage = () => {
    const {ticketId} = useParams()
      const thisTicket = marketItems.find(ticket => ticket.id === ticketId)
      console.log(thisTicket)
    return <div className='ticket-page-container'>
            <Navbar />
        
          <div className='ticket-page-body'>
              <div className='ticket-page-left'>
                <img src={thisTicket.img}    alt='product cover' className='product-img-cover' /> 
              </div>
              <div className='ticket-page-right'>
                <h3 className='event-card-title event-ticketpage-title'>{thisTicket.name}</h3>
                <h6 className='ticket-organizer'> <span className='definer'>organized by</span>{thisTicket.organizedBy}</h6>
                <h6 className='ticket-cost'><span className='definer'>price</span>{thisTicket.price} <span className='price-symbol'>usd</span></h6>
                <h6 className='ticket-location'> <span className='definer'>location</span> {thisTicket.city}</h6>
                <h6 className='ticket-start'><span className='definer'>starting at</span>{thisTicket.starting}</h6>
                <h6 className='ticket-end'><span className='definer'>ending at</span>{thisTicket.starting}</h6>
                <div className='ticket-social-container'>
                  <h6 className='ticket-social-title'>social media</h6>
                  <div className='ticket-social-icons'>
                    <TwitterCircleFilled style={{fontSize: "24px"}}/>  <InstagramFilled style={{fontSize: "24px"}}/>  
                      <img src={thisTicket.telegram}   alt='telegram'  style={{width: "24px", height: "24px"}}/>
                      <img src={thisTicket.discord}   alt='discord'  style={{width: "24px", height: "24px"}}/>
                  </div>
                  
                </div>
                <button className='ticket-page-buy-btn'>Buy ticket</button>
              </div>
              </div>
              <div className='ticket-page-bottom'>
                <div className='ticket-bottom-left'>
                <h1 className='heading' >ticket tips </h1>
                  <TicketTips />
                </div>
                <div className='ticket-bottom-right'>
                <h1 className='heading'>description</h1>
                  <h4 className='ticket-description'>{thisTicket.description}</h4>
                </div>
              </div>

    </div>;
}



export default TicketPage;