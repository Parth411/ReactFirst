import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Service = () => {
  return (
    <div className='service'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
            <div>
            <img src={img1} alt="servifgt" />
                <p>Full Stack</p>
            </div>
            <div>
            <img src={img2} alt="servigt" />
                <p>Support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Service