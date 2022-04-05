import React, {useState} from 'react';
import { DatePicker } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import PopularEvents from './PopularEvents';
const Search = () => {
    const [search, setSearch] = useState()
    const [location , setLocation] = useState()
    const [eventType , setEventType] = useState()
    const [eventDate , setEventDate] = useState()
    return <div className='search-container'>
     <div className='search-box'>
     <div className='search-inpu-box'>
         <input type="text" value={search} placeholder="Search by name or type" onChange={e => setSearch(e.target.value)}  className="search-input"/> </div>
        <div className='date-picker'> 
        <CalendarOutlined style={{fontSize: "20px", cursor: "pointer"}} />
        <input type="text" value={eventDate} onChange={e => setEventDate(e.target.value) } placeholder="Date" className='date-input' />
        
        </div>
        
         <div className='location-container'>
         <img src='img/location.png' alt='' className='location-img' />
             <input type="text" value={location} placeholder="Location" onChange = {e => setLocation(e.target.value)}  className="location-input"/>
            
         </div>
         <div className='event-type-container'>
          <img src='img/option.png' alt='' className='type-img' />
          <input type="text" value={location} placeholder="Type of event" onChange = {e => setLocation(e.target.value)}  className="location-input"/>
         </div>
         <button className='event-search-btn'> Search</button>
         </div>
         <PopularEvents />
    </div>;
}


export default Search;