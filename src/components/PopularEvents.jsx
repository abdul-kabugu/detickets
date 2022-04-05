import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import {} from "antd"
import { mostPopular } from './mostPopular';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from 'react-router-dom'
  

const PopularEvents = () => {
    console.log(mostPopular)
    return <div className='popular-container'>
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={60}
    totalSlides={8}
     visibleSlides={3.2}
     className="slider-provider"
    >
        <div className='popular-header'>
            <h1 className=' heading' style={{textTransform: "uppercase"}}>most popular events</h1>
            <div className='carousel-btns'>
               <ButtonBack className='left-btn'><ArrowLeftOutlined /> </ButtonBack>   <ButtonNext className='next-btn'> <ArrowRightOutlined /> </ButtonNext>
            </div>
        </div>
        <Slider className='slider-container'>
        <div className='popular-body'>
        
        {mostPopular.map((event, i)=>(
           <Slide index={i}  key={event.id} className="slide-card"> <div className='event-card-container' >
            <div className='card-cover' >
                <img src={event.img} className="event-image"    alt=''/>
                </div>
                <div className='event-card-bottom'>
                    <div className='event-card-bottom-left'>
                    <Link to={`marketplace/${event.id}`}>  <p className='event-card-title'>{event.name}</p></Link> 
                       
                        <p className='ticket-price'>{event.price} <span className='price-symbol'>usd</span></p>
                    </div>
                    <div className='event-card-bottom-right'>
                        <button className='card-buy-btn'>buy</button>
                    </div>
                </div> 
                
            </div>
            </Slide>
        ))}
        
        </div>
        </Slider>
        </CarouselProvider>
    </div>;
}



export default PopularEvents;