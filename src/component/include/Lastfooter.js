import { faFacebookF , faDribbble ,faFlickr , faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import {Col,Container} from "react-bootstrap"

export default function Lastfooter() {
  return (
    <div>
      <Container>

       <p>2014 Kids Life. All rights reserved.</p>

     <Col md="1"  > <div className='w-100 h-100 float-left '><FontAwesomeIcon icon={faFacebookF}  style={{color:"blue"}} size="1x"/></div></Col>
     

     <Col md="1" > <div className='w-100 h-100 float-left '><FontAwesomeIcon icon={faDribbble}  style={{color:"gray"}} size="1x"/></div></Col>
 
     <Col md="1" > <div className='w-100 h-100 float-left'><FontAwesomeIcon icon={faFlickr}  style={{color:"red"}} size="1x"/></div></Col>
 
 
     <Col md="1" > <div className='w-100 h-100 float-left'><FontAwesomeIcon icon={   faTwitter}  style={{color:"green"}} size="1x"/></div></Col>
 </Container>
    </div>
  )
}
