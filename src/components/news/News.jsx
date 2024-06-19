import React, { Component } from 'react'
import Button from "../button/Button"
import image1 from "../../assets/images/news1.png";
import image2 from "../../assets/images/news2.png";
import image3 from "../../assets/images/news3.png";

import "./News.scss";

export class News extends Component {
  render() {
    return (
      <section id='news'>
        <div className="container news__container">
          <h2 className="news__container--title">Новости</h2>
          <div className="news__container--row">
            <div className="news__container--card">
              <img src={image1} alt="" />
              <p className='news__container--time'>28.01.2022</p>
              <p className="news__container--text">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>

            <div className="news__container--card">
              <img src={image2} alt="" />
              <p className='news__container--time'>28.01.2022</p>
              <p className="news__container--text">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>

            <div className="news__container--card">
              <img src={image3} alt="" />
              <p className='news__container--time'>22.01.2022</p>
              <p className="news__container--text">"ЛеанГрупп" серебряный призер EcoVadis!</p>
            </div>

          </div>

          <div className="news__container--btn">
            <Button>Все новости</Button>
          </div>
        </div>
      </section>
    )
  }
}

export default News