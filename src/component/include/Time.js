import React from 'react'
import {Carousel,Card,Button} from "react-bootstrap"

export default function Time() {
  return (
  

<section class="# my-5">
    <div class="container-fluid">
        <div class="row featurette">
            <div class="col-md-5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="img-fluid"
                            src="images/activity1.jpg"
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="img-fluid"
                            src="images/activity2.jpg"
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="img-fluid"
                            src="images/activity3.jpg"
                            alt="Third slide"
                            />  
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="img-fluid"
                            src="images/activity4.jpg"
                            alt="Third slide"
                            />  
                        </Carousel.Item>
                    </Carousel>
            </div>

                <div class="col-md-7 text-center lh-lg">

                    <Card>
                        <Card.Body>
                            <Card.Title>Our Leisure Time</Card.Title>
                            <Card.Text>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                            </Card.Text>
                                <Button variant="primary">Guitar</Button>
                                <Button variant="info">Outdoor Game</Button>
                                <Button variant="danger">Knowledge Sharing</Button>
                                <Button variant="success">Singing Classes</Button>
                        </Card.Body>
                    </Card>

                </div>
            
        </div>
    </div>
  </section>

  )
}
