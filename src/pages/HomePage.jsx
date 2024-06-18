import React, { Component, Fragment } from 'react'
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Certificate from '../components/certificate/Certificate'


export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <main>
          <Home/>
          <About/>
          <Certificate/>
        </main>
      </Fragment>
    )
  }
}

export default HomePage