import React from 'react'
import {Container,Navbar,Row} from "react-bootstrap"
export default function Header() {
  return (
    <Container className='start'>
    <Navbar expand="lg" variant="light" bg="info" className='py-4'>
      <Container>
        <Navbar.Brand href="#"><img src={process.env.PUBLIC_URL+"images/logo.png"} classNameimg="img-fluid"/></Navbar.Brand>
      <Row>
        <h6>admin@kidslife.com</h6>
        <h6>+91 1234567890</h6>
        </Row>
      </Container>
    </Navbar>
  </Container>
  
  )
}
