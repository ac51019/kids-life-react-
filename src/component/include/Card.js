import React from 'react'

import {Card, Col, Row} from "react-bootstrap"

export default function card() {
  return (
<main className='b'> 

<Row>
  <Col md="3">
        <Card style={{ width: '100%' }} className='ab'>
      <Card.Img variant="top" className='rounded-circle img-fluid' src="images/service2.jpg"  width="50px" height="50px" />
      <Card.Body>
        <Card.Title>Music Class</Card.Title>
        <Card.Text>
        Decor ostdcaer urabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet euismod pelleontesque, eros risus rhoncus libero, invest tibulum nisl ligula....
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

<Col md="3">
    <Card style={{ width: '100%' }} className='ac'>
      <Card.Img variant="top" class="rounded-circle" width="80px" height="80px" src="images/service1.jpg"/>
      <Card.Body>
        <Card.Title>Active Learning</Card.Title>
        <Card.Text>
        Curabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum nisl ligula....
        </Card.Text>

      </Card.Body>
    </Card>
    </Col>

  <Col md="3">
      <Card style={{ width: '100%' }} className='ad'>
        <Card.Img variant="top"  class="rounded-circle" width="80px" height="80px"  src="images/service3.jpg"/>
        <Card.Body>
          <Card.Title>Yoga Class</Card.Title>
          <Card.Text>
          Rabitur ultrices posuere mattis. Nam ullamcorper, diam sit  euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum nisl gedretu osterftra ligula....
          </Card.Text>
        
        </Card.Body>
      </Card>
      </Col>


<Col md="3">
      <Card style={{ width: '100%' }} className='ae'>
        <Card.Img variant="top"  class="rounded-circle" width="80px" height="80px" src="images/service4.jpg" />
        <Card.Body>
          <Card.Title>Kung fu Class</Card.Title>
          <Card.Text>
          Curabitur ultrices posuere mattis. Nam ullamcorper, diam sit amet euismod pelleo ntesque, eros risus rhoncus libero, invest tibulum nisl ligula....
          </Card.Text>
        
        </Card.Body>
      </Card>
      </Col>
      </Row>
</main>  
  )
}
