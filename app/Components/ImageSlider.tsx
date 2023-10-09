import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const ImageSlider = () => {

    let settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }


  return (
    <Carousel {...settings}>
        <div className="ImageSliderWrap">
            <img src="/images/slider-badging.jpg" alt="slider" />
        </div>
        
        <div className="ImageSliderWrap">
            <img src="/images/slider-badag.jpg" alt="slider" />
        </div>
    </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`

    
    margin-top: 20px;

    .slick-list{
        overflow: visible;
        
    }

    button{
        z-index: 1;
    }

    ul li button{ 
        
        &:before{
            font-size: 10px
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before{
        color:white
    }
       
`