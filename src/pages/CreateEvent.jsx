import { Switch, Upload } from 'antd';
import React, {useState} from 'react';
import {unlockABI} from '../contracts/UnlockABI'
import DashbordNav from '../components/DashbordNav';
import LeftTab from '../components/LeftTab';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';


const CreateEvent = () => {
    const [eventName, setEventName]  =  useState("")
    const [eventCover, setEventCover]  =  useState("")
    const [eventDuration, setEventDuration]  =  useState("")
    const [ticketQuantity, setTicketQuantiy]  =  useState("")
    const [twitterLink, setTwitterLink]  =  useState("")
    const [instgramLink, setInstagramLink]  =  useState("")
    const [discordLink, setDiscordLink]  =  useState("")
    const [telegramLink, setTelegramLink]  =  useState("")
    const [ticketPrice, setTicketPrice]  =  useState("")
    const [eventDescription, setEventDescriptin]  =  useState("")
    const [isTransferable, setIsTransferable]  =  useState( false)
    const {Moralis, authenticate} = useMoralis()

    const unlockAddress = '0xDcDE260Df00ba86889e8B112DfBe1A4945B35CA9'
    const usdcContract  = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    const contractExcuter = useWeb3ExecuteFunction()
     console.log(unlockABI)
    // create event  function

    async function createEventFunc() {
        let options = {
          contractAddress:  unlockAddress,
          functionName: "createLock",
           abi: unlockABI,
           //Parameters 
           params: {
            
            _expirationDuration: eventDuration,
            _tokenAddress: usdcContract,
            _keyPrice: ticketPrice,
            _maxNumberOfKeys: ticketQuantity,
            _lockName: eventName, 
            //_salt: "abdul"
             
           },
          
           
        }
        await contractExcuter.fetch({
          params: options,
          onSuccess:() =>{
            alert("you  have  succesful  ran  function")
          },
          onError: (errori) =>{
            alert(errori.message)
          }
        })
        console.log("clicked button")
      }

    return <div className='create-event-container'>
    <div className='left-tab-position'>
      <LeftTab />
      </div>
      <div className='create-body-container'>
          <div className='create-body-nav'>
              <DashbordNav />
          </div>
          <div className='create-body'>
          <h2 className='market-title'>new event</h2>
          <div className='event-info'>
              <div className='event-info-section'>
                 <div className='section-header'>
                  <h3 className='section-title'> your event</h3>
                  <p className='section-description'>Add general information about your tickets  to show in marketplace</p>
                  </div>
                  <div className='section-body'>
                     <div className='section-input'>
                         <h3 className='section-input-title'>event name</h3>
                         <input name='event-name' type="text" value={eventName} onChange={e => setEventName(e.target.value)} placeholder="Your event name"   className="event-name-input"/>
                     </div>

                     <div className='section-event-image'>
                         <h4 className='section-input-title'>event cover</h4>
                              <input name='event-cover' type="file"  placeholder='event cover'  value={eventCover} onChange={e =>  setEventCover(e.target.value)} className="event-cover-image"/>
                     </div>
                     <div className='section-description-input'>
                         <h4 className='section-input-title'>event description</h4>
                         <textarea name='event-description' rows="4" cols="33" value={eventDescription} onChange={e => setEventDescriptin(e.target.value)}   className="event-description-input" /> 
                     </div>
                  </div>
              </div>
                <div className='ticket-infos'>
                <div className='section-header'>
                  <h3 className='section-title'> your ticket</h3>
                  <p className='section-description'>Tell us about the tickets</p>
                  </div>
                  <div className='section-body ticket-info-section'>
                  <div className='ticket-duration-section '>
                         <h4 className='section-input-title'> ticket duration</h4>
                         <input name='ticket-duration' type="text" value={eventDuration} onChange={e => setEventDuration(e.target.value)} placeholder=" 30 days"   className="event-ticket-duration"/>
                     </div>

                     <div className='ticket-duration-section'>
                         <h4 className='section-input-title'> ticket quantity</h4>
                         <input name='ticket-quantity' type="text" value={ticketQuantity} onChange={e => setTicketQuantiy(e.target.value)} placeholder=" 100"   className="event-ticket-duration"/>
                     </div>

                     <div className='ticket-duration-section'>
                         <h4 className='section-input-title'> ticket price in ETH</h4>
                         <input name='ticket-price' type="text" value={ticketPrice} onChange={e => setTicketPrice(e.target.value)} placeholder=" 0.1 ETH"   className="event-ticket-duration"/>
                     </div>
                  </div>
                  
                </div>
                <div className='royalty-infos'>
                <div className='section-header'>
                  <h3 className='section-title'> event socials</h3>
                  <p className='section-description'>  Add your  socail media  links </p>
                  </div> 
                  <div className='section-body ticket-info-section'>
                  <div className='ticket-duration-section'>
                         <h4 className='section-input-title'> twitter link</h4>
                         <input name='ticket-price' type="text" value={twitterLink} onChange={e => setTwitterLink(e.target.value)} placeholder=" twitter profile"   className="event-ticket-duration"/>

                     </div>

                     <div className='ticket-duration-section'>
                         <h4 className='section-input-title'> instagram link</h4>
                         <input name='ticket-price' type="text" value={instgramLink} onChange={e => setInstagramLink(e.target.value)} placeholder=" instagram profile"   className="event-ticket-duration"/>

                     </div>

                     <div className='ticket-duration-section'>
                         <h4 className='section-input-title'> discord link</h4>
                         <input name='ticket-price' type="text" value={discordLink} onChange={e => setTwitterLink(e.target.value)} placeholder=" discord server"   className="event-ticket-duration"/>

                     </div>

                     <div className='ticket-duration-section'>
                         <h4 className='section-input-title'> telegram link</h4>
                         <input name='ticket-price' type="text" value={telegramLink} onChange={e => setTelegramLink(e.target.value)} placeholder=" telegram channel"   className="event-ticket-duration"/>

                     </div>



                  </div>
                </div>
          </div>
          </div>
          <button onClick={createEventFunc} className="submit-event-btn">submit</button>
      </div>
     
    </div>;
}



export default CreateEvent;