import React, { Component } from 'react'

import image from "../../assets/images/contact.png"
import image1 from "../../assets/images/contact1.svg"
import image2 from "../../assets/images/contact2.svg"
import "./Contact.scss";

export class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container contact_container">
          <div className="contact">
            <div className="contact__image">
            <img src={image} alt="image_bg" />
            </div>
            <div className="contact__information">
              <h2 className="contact__information--title">Получить подробную <span>информацию</span></h2>
              <p className="contact__information--text">Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>

              <div className="contact__information--input">
                <div className="input__group">
                 <div className="input__group__top">
                 <div className="input__group--left">
                    <img src={image1} alt="" />
                    <input placeholder="Name" type="text" />
                  </div>
                  <div className="input__group--right">
                    <img src={image2} alt="" />
                    <input placeholder="+998 88 100 79 82" type="tel" />
                  </div>
                 </div>
                 <div className="input__group__bottom">
                  <textarea placeholder='Комментарий' id='Комментарий'></textarea>
                 </div>
                </div>

                <div className="contact__information--btn">Получить информацию</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact