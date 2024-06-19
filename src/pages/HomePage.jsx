import React, { Component, Fragment } from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Certificate from '../components/certificate/Certificate'
import Product from '../components/product/Product'
import Contact from '../components/contact/Contact'
import Community from '../components/community/Community'
import News from '../components/news/News'
import Footer from '../components/footer/Footer'
import Backtop from '../components/shares/Backtop'


export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <main>
          <Home/>
          <Backtop/>
          <About/>
          <Certificate/>
          <Product/>
          <Contact/>
          <Community/>
          <News/>
        </main>
        <Footer/>
      </Fragment>
    )
  }
}

export default HomePage