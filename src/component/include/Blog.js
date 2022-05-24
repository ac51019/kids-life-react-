import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { Card, Button, Col } from "react-bootstrap"

export default function Blog() {
    return (
        <section>
            <h2 className='text-center py-4' style={{ backgroundColor: 'light-orange' }}>RECENT BLOG </h2>
            <div className="container q py-4" Style="display: flex;justify-content: space-around;align-items: center;">
                <div className='as'>
                    
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="images/blog_img1.jpg" />
                        <Card.Body>
                            <Card.Title>Activities Improves Mind</Card.Title>

                            <Col md="3" > <div className='w-100 h-100 '><FontAwesomeIcon icon={faFolderOpen} className="text-black p-3" /></div></Col>



                            <h6> Uncategorized</h6>
                            <Card.Text>
                                Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd consequat. Praes porr nulla sit amet dui lobortis, id venenatis nibh accums....
                            </Card.Text>
                            <Button variant="primary">READ MORE</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='az'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="images/blog_img2.jpg" />
                        <Card.Body>
                            <Card.Title>Weekly Reader Zone</Card.Title>

                            <Col md="3" > <div className='w-100 h-100 '><FontAwesomeIcon icon={faFolderOpen} className="text-black p-3" /></div></Col>

                            <h6> Uncategorized</h6>
                            <Card.Text>
                                Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd consequat. Praes porr nulla sit amet dui lobortis, id venenatis nibh accums....
                            </Card.Text>
                            <Button variant="primary">READ MORE</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}
