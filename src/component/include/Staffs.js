import React from 'react'
import { Card } from "react-bootstrap"

export default function Staffs() {
    return (
        <section>
            <h2 className='text-center py-4' style={{ backgroundColor: 'orange' }}>Our Staff </h2>
            <div className="container" Style="display: flex;justify-content: space-around;align-items: center; padding:  20px;">
                <div className='l'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="images/jd.jfif" Style="padding: 10px;border-radius: 15px;" />
                        <Card.Body>
                            <Card.Title className='text-center'>Jack Daniels</Card.Title>
                            <h5 className='text-center'>Senior Supervisor</h5>
                            <Card.Text>
                                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet risus.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='k'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="images/download.jfif" Style="padding: 10px;border-radius: 15px;" />
                        <Card.Body>
                            <Card.Title>Linda Glendell</Card.Title>
                            <h5 className='text-center'>Teaching Professor</h5>

                            <Card.Text>
                                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet risus.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='j'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="images/kd.jfif" Style="padding: 10px;border-radius: 15px;"/>
                        <Card.Body>
                            <Card.Title>Kate Dennings</Card.Title>

                            <h5 className='text-center'>Children Diet</h5>
                            <Card.Text>
                                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet risus.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className='h'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="images/ks.jfif" Style="padding: 10px;border-radius: 15px;"/>
                        <Card.Body>
                            <Card.Title>Kristof Slinghot</Card.Title>

                            <h5 className='text-center'>Management</h5>
                            <Card.Text>
                                Phasellus lorem augue, vulputate vel orci id, ultricies aliquet risus.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}
