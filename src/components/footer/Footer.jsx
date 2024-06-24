import React, { Component } from 'react'

import logo from "../../assets/images/logo.svg"
import vk from "../../assets/images/vk.svg";
import fb from "../../assets/images/fb.svg";
import linkedin from "../../assets/images/linkedin.svg";

import "./Footer.scss";
export class Footer extends Component {
  render() {
    return (
      <footer >
        <div className="container footer_container">
          <div className="footer_container--header">
            <a href="#logo"><img src={logo} alt="" /></a>

             <div className="right">
              <a href="#link">
                <img src={vk} alt="" />
              </a>
              <a href="#link">
                <img src={fb} alt="" />
              </a>
              <a href="#link">
                <img src={linkedin} alt="" />
              </a>
             </div>
          </div>
          <hr />
          <div className="footer_container--row">
            <div className="footer_container--card">
              <h2 className="footer_container--card--title">Продукция</h2>
              <p className="footer_container--card--text">Ламинатные тубы</p>
              <p className="footer_container--card--text"> Экструзионные тубы </p>
              <p className="footer_container--card--text">Другая упаковка</p>
            </div>

            <div className="footer_container--card">
              <h2 className="footer_container--card--title">Компания</h2>
              <p className="footer_container--card--text">О нас</p>
              <p className="footer_container--card--text"> Наша команда </p>
              <p className="footer_container--card--text">Сертификаты</p>
            </div>

            <div className="footer_container--card">
              <h2 className="footer_container--card--title">Разделы</h2>
              <p className="footer_container--card--text">Контакты</p>
              <p className="footer_container--card--text"> Новости </p>
              <p className="footer_container--card--text">Новости</p>
            </div>

            <div className="footer_container--card">
              <div className="footer_container--card--exp footer_container--card--export">
                <h2 className="footer_container--card--exp--country">Беларусь</h2>
                <p className="footer_container--card--exp--tel">+375 (17) 270 53 77 <br />+375 (17) 270 53 78</p>
              </div>

              <div className="footer_container--card--exp">
                <h2 className="footer_container--card--exp--country">Москва</h2>
                <p className="footer_container--card--exp--tel">+7 (495) 280 73 44 <br />+7 (495) 280 73 44</p>
              </div>
            </div>

            <div className="footer_container--card">
              <div className="footer_container--card--exp footer_container--card--export">
                <h2 className="footer_container--card--exp--country">Европа</h2>
                <p className="footer_container--card--exp--tel">+48 73 1111 044 <br />+48 73 1112 044 </p>
              </div>

              <div className="footer_container--card--exp">
                <h2 className="footer_container--card--exp--country">Екатеринбург</h2>
                <p className="footer_container--card--exp--tel">+7 (343) 346 82 06</p>
              </div>
            </div>

          </div>
          <div className="footer_container--bottom">
            <a href="#link">© 2022 Leangroup. All Rights Reserved. <br />Разработка и продвижение сайтов SkyWeb.by</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer