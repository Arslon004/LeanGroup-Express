import React, { Component } from 'react'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Certificate from '../components/certificate/Certificate'
import Product from '../components/product/Product'
import Contact from '../components/contact/Contact'
import Community from '../components/community/Community'
import News from '../components/news/News'
import Backtop from '../components/shares/Backtop'
import Layout from '../components/layout/Layout'


export class HomePage extends Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}

export default HomePage