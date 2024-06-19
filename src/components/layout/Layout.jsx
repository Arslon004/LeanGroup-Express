import React, { Component, Fragment } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        {this.props.children}
        <Footer/>
      </Fragment>
    )
  }
}

export default Layout