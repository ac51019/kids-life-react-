import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, Col, ListGroup, Form, FormControl, Button } from "react-bootstrap"

export default function Footer() {
  return (
    <div >
      <div className='g'>
        <h2 className='text-center wt' style={{ backgroundColor: 'pink' }}>Contact </h2>
        <div className='g px-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>About Kids Life</Card.Title>
              <Card.Text>
                Happy Kids Life comes with powerful theme options, which empowers you to quickly and easily build incredible store.
              </Card.Text>
              <h6>English Grammer Class</h6>
              <h6>Music Class</h6>
              <h6>Swimming Class & karate</h6>
              <h6>Lot Of HTML Style</h6>
              <h6>Unique NEWS Pages Design</h6>
            </Card.Body>
          </Card>
        </div>


            <div className='g px-4'>
              <Card style={{ width: '18rem' }}>
                  <Card.Header>  Recent Products</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Trendy Kids
              £400.00</ListGroup.Item>
                    <ListGroup.Item>School Days
              £300.00</ListGroup.Item>
                    <ListGroup.Item>Toddler Style
              £250.00</ListGroup.Item>
                  </ListGroup>
              </Card>
             </div>

        <div className='g px-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Twitter Feeds</Card.Title>
              <Card.Text>
                December 12, 2018 Get 76 top @CreativeMarket products worth $1169+ for only $39 https://t.co/T8XrN5xPHV
              </Card.Text>

              <Card.Text>December 18, 2017 Download these 6 free goods before it's too late! https://t.co/8jZ5Tg2DWy</Card.Text>
            </Card.Body>
          </Card>
        </div>


        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
              121 King St, Melbourne VIC 3000, Australia
            </Card.Text>

            <h6>(000) 233 - 3236</h6>

            <h6>kidslife@somemail.com</h6>

          </Card.Body>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Enter Your Mail"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">SingUP</Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}
