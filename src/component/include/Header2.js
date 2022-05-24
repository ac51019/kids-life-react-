import { faFacebookF , faDribbble ,faFlickr , faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import {Container,Navbar,Nav,Col} from "react-bootstrap"
import {Link } from "react-router-dom";

export default function Header2() {
  return (
    <div>
    <Navbar bg="warning" variant="dark" py-4>
      <Container>
      {/* <Navbar.Brand href="#home">HOME</Navbar.Brand> */}
      <Nav className="me-auto"> 
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link href="#events">EVENTS</Nav.Link>
        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
        <Nav.Link href="#pages">PAGES</Nav.Link>
        <Nav.Link href="#blog">BLOG</Nav.Link>
        <Nav.Link href="#shop">SHOP</Nav.Link>
       <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>

      <Col md="1" > <div className='w-100 h-100 '><FontAwesomeIcon icon={faFacebookF}  style={{color:"blue"}} size="1x"/></div></Col>
     

    <Col md="1" > <div className='w-100 h-100 '><FontAwesomeIcon icon={faDribbble}  style={{color:"gray"}} size="1x"/></div></Col>

    <Col md="1" > <div className='w-100 h-100 '><FontAwesomeIcon icon={faFlickr}  style={{color:"red"}} size="1x"/></div></Col>


    <Col md="1" > <div className='w-100 h-100 '><FontAwesomeIcon icon={   faTwitter}  style={{color:"green"}} size="1x"/></div></Col>

      </Container>
    </Navbar>

  </div>
  )
}
