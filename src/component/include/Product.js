import React from 'react'
import {Card} from "react-bootstrap"
export default function Product() {
  return (
    <main>

<h2 className='text-center py-4' style={{ backgroundColor: 'orange' }}>RECENT PRODUCT </h2>
        <div className='t px-4'>
          <Card style={{ width: '20rem'  }}>
            <Card.Img variant="top" src="images/product4.jpg" />
          </Card>
        </div>
          
        <div className='t'>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="images/kk.jpg" />
          </Card>
        </div>

        <div className='t'>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="images/a.jfif" />
          </Card>
         </div>

        <div className='t'>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="images/d.jfif" />
          </Card>
          </div>

        
    </main>
  )
}
