import {faMartiniGlass,faWandSparkles, faGaugeHigh, faBullseye, faPencil,faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Container,Col,Row} from "react-bootstrap"

export default function grides() {
  return (
 
    <section className="set">
        <div style={{background:'rgba(0,140,153,.5)'}} className="w-100 h-100">
        <Container>
        <Row>
            <Col md="6">
                <div>
                    <h2 className='col-main font-35  py-4'>Play As You Learn</h2>
                    
                    <Row>
                        <Col md="6">

                            <Row>
                                <Col md="3" > <div className='w-100 h-100 rounded-circle bg-white'><FontAwesomeIcon icon={ faMartiniGlass}  className="text-black p-3"/></div></Col>
                                <Col md="9"><h6>English Summer Camp</h6></Col>
                               
                            
                                <p>Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>

                                <Col md="3" > <div className='w-100 h-100 rounded-circle bg-white'><FontAwesomeIcon icon={ faGaugeHigh}  className="text-black p-3"/></div></Col>
                                <Col md="9"> <h6>Sports Camp</h6></Col>

                            

                                <p>Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>
                            
                                <Col md="3" > <div className='w-100 h-100 rounded-circle bg-white'><FontAwesomeIcon icon={ faPencil}  className="text-black p-3"/></div></Col>
                                <Col md="9"> <h6>Sports Camp</h6></Col>

                                <p>Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>

                            </Row>
                        </Col>

                        <Col md="6">
                            <Row>
                            <Col md="3" > <div className='w-70 h-70 rounded-circle bg-white'><FontAwesomeIcon icon={faWandSparkles}  className="text-black p-3"/></div></Col>
                            <Col md="9"> <h6>Personalizing</h6></Col>

                           
                            
                            <p>Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>

                            <Col md="3" > <div className='w-70 h-70 rounded-circle bg-white'><FontAwesomeIcon icon={  faBullseye}  className="text-black p-3"/></div></Col>
                            <Col md="9"> <h6>Swimming Camp</h6></Col>
                            
                            <p>Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>

                        

                            <Col md="3" > <div className='w-70 h-70 rounded-circle bg-white'><FontAwesomeIcon icon={faMusic}  className="text-black p-3"/></div></Col>
                            <Col md="9"> <h6>Sing & Dance</h6></Col>
                            
                            <p>Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, inst tibulum nisl ligula….</p>


                            </Row>
                        </Col>
                    </Row>
                  
                </div>
            </Col>
            <Col md="6">
    <img className='w-100 h-100' src={process.env.PUBLIC_URL+"images/parallax-image.png"}  alt="hii"/>
              
            </Col>
        </Row>
        </Container>
    </div>
</section>

  )
}
