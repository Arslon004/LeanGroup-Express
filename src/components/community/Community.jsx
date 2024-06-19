import React, { Component } from 'react'
import Slider from "react-slick"

import Button from '../button/Button';

import image1 from "../../assets/images/community1.png";
import image2 from "../../assets/images/community2.png";
import image3 from "../../assets/images/community3.png";
import image4 from "../../assets/images/community4.png";
import image5 from "../../assets/images/community5.png";


import "./Community.scss";
export class Community extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
     speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
         },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section id='community'>
        <div className="container community__container">
          <h2 className="community__container--title">
          Наша <span>команда</span>
          </h2>

          <Slider {...settings}>
        <div className='community__container--slick'>
          <img src={image1} alt="" />
          <h2 className="community__container--slick--title">Войнич Дарья</h2>
          <p className="community__container--slick--text">Заместитель директора по продажам</p>
          <p className="community__container--slick--tel">+375 (17) 270-53-77 (317)</p>
        </div>

        <div className='community__container--slick'>
        <img src={image2} alt="" />
        <h2 className="community__container--slick--title">Мисько Екатерина</h2>
          <p className="community__container--slick--text">Начальник отдела сопровождения</p>
          <p className="community__container--slick--tel">+375 (17) 270-53-77 (115) <br />  +375 29 112-73-48</p>
          <p className='community__container--slick--email'>k.melnichenko@leangroup.by</p>
        </div>

        <div  className='community__container--slick'>
        <img src={image3} alt="" />
        <h2 className="community__container--slick--title">Дмитроченко Дмитрий</h2>
          <p className="community__container--slick--text">Начальник отдела допечатной подготовки</p>
          <p className="community__container--slick--tel">+375 (17) 270-53-77 (115) <br />  +375 29 112-73-48</p>
          <p className='community__container--slick--email'>dmitrochenko@leangroup.by</p>
        </div>

        <div className='community__container--slick'>
        <img src={image4} alt="" />
        <h2 className="community__container--slick--title">Антух Евгений</h2>
          <p className="community__container--slick--text">Начальник отдела допечатной подготовки</p>
          <p className="community__container--slick--tel">+375 (17) 270-53-77 (115) <br />  +375 29 112-73-48</p>
          <p className='community__container--slick--email'>j.antuh@leangroup.by</p>
        </div>
        <div className='community__container--slick'>
        <img src={image5} alt="" />
        <h2 className="community__container--slick--title">Антух Евгений</h2>
          <p className="community__container--slick--text">Начальник отдела допечатной подготовки</p>
          <p className="community__container--slick--tel">+375 (17) 270-53-77 (115) <br />  +375 29 112-73-48</p>
          <p className='community__container--slick--email'>j.antuh@leangroup.by</p>
        </div>

      </Slider>

      <div className="community__container--btn">
        <Button>Все новости</Button>
      </div>
        </div>
      </section>
    )
  }
}

export default Community