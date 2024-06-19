import React, { Component } from 'react'

import arrow from "../../assets/images/arrow.svg"
import "./Backtop.scss"
export class Backtop extends Component {
  render() {
    return (
      <a className='backtop' href="#home">
        <img src={arrow} alt="" />
      </a>
    )
  }
}

export default Backtop