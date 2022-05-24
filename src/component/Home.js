import React from 'react'
import Header from './include/Header'
import Header2 from './include/Header2'
import Slider from './include/Slider'
import Card from './include/Card'
import Grides from './include/Grides'
import Blog from './include/Blog'
import Staffs from './include/Staffs'
import Product from './include/Product'
import Footer from './include/Footer'
import Lastfooter from './include/Lastfooter'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"

export default function Home() {
  return (
    <main>
      {/* <Header></Header>

 <Header2></Header2> */}

      <Slider></Slider>

      <Card></Card>

      <Grides></Grides>

      <Blog></Blog>

      <Staffs></Staffs>

      <Product></Product>

      {/* <Footer></Footer>

      <Lastfooter></Lastfooter> */}

    </main>
  )
}
