import React, { Component } from 'react'

import image1 from "../../assets/images/about.png"
import "./About.scss";

export class About extends Component {
  render() {
    return (
      <section id='about'>
        <div className="container about_container">
          <div className="about">
            <div className="about__top">
              <h2 className="about__title">О компании <span>LEANGROUP</span></h2>
            </div>
            <div className="about__card">
              <div className="about__card__left">
                <img src={image1} alt="" />
              </div>
              <div className="about__card__right">
                <p className="about__card__right__text text1">
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
                </p>
                <p className="about__card__right__text text2">
                Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
                </p>
                <p className="about__card__right__text text3">
                С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About