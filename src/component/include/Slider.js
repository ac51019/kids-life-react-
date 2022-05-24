import React from 'react'
import {Carousel} from "react-bootstrap"

export default function slider() {
  return (
    <div>
        
        <Carousel>
  <Carousel.Item>
    <img
      className="img-fluid"
      src="images/bg2.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid"
      src="images/bg4.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid"
      src="images/school-kid.png"
      alt="Third slide"
    />  
  </Carousel.Item>
</Carousel>

    </div>
  )
}
