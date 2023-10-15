import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = ({ screenshots_heading, screenshots }) => {

  const settings = {
    autoPlay:false,
    infiniteLoop:true, 
    dynamicHeight:true, 
    showArrows:true, 
    showStatus:false, 
    showIndicators:true, 
    showThumbs:false
  }

  return (
    <div className="carousel-wrapper">
      <h3 className="carousel-heading">
          { screenshots_heading }
      </h3>
      <div className='carousel-item-wrapper'>
          <Carousel {...settings}>
              {
                  screenshots.map(( img, i ) => {
                      return (
                          <div key={i}>
                              <img src={ img.screenshot.url } alt={ img.screenshot.alt } />
                          </div>
                      )
                  })
              }
          </Carousel>
      </div>
    </div>
  )
}

export default CarouselContainer