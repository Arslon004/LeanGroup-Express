import React, { Component } from 'react'

import Slider from "react-slick";
import image1 from "../../assets/images/home1.jpg";
import image2 from "../../assets/images/home1.jpg";
import image3 from "../../assets/images/home1.jpg";
import vk from "../../assets/images/vk.svg";
import fb from "../../assets/images/fb.svg";
import linkedin from "../../assets/images/linkedin.svg";

import  "./Home.scss";
export class Home extends Component {

  render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        ]
      };
    return (
      <section id='home'>
        <div className="container-lg home-container ">
        <Slider {...settings}>

        <div className='slide'>
              <div className='slide-content' style={{ backgroundImage: `url(${image1})` }}>
                <div className="slide-content__overlay">
                  <p className='slide-content__overlay__text1'>LEANGROUP - тубы и этикетки</p>
                  <p className='slide-content__overlay__title'>Ламинатные тубы</p>

                  <p className='slide-content__overlay__text2'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>

                  <div className="slide-content__overlay__button">Каталог</div>
                </div>
                <div className="slide-content__call">
                  <div className="slide-content__call__img">
                    <img src={vk} alt="" />
                  </div>
                  <div className="slide-content__call__img">
                    <img src={fb} alt="" />
                  </div>
                  <div className="slide-content__call__img">
                    <img src={linkedin} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='slide'>
              <div className='slide-content' style={{ backgroundImage: `url(${image1})` }}>
                <div className="slide-content__overlay">
                  <p className='slide-content__overlay__text1'>LEANGROUP - тубы и этикетки</p>
                  <p className='slide-content__overlay__title'>Ламинатные тубы</p>

                  <p className='slide-content__overlay__text2'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>

                  <div className="slide-content__overlay__button">Каталог</div>
                </div>
                <div className="slide-content__call">
                  <div className="slide-content__call__img">
                    <img src={vk} alt="" />
                  </div>
                  <div className="slide-content__call__img">
                    <img src={fb} alt="" />
                  </div>
                  <div className="slide-content__call__img">
                    <img src={linkedin} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='slide'>
              <div className='slide-content' style={{ backgroundImage: `url(${image1})` }}>
                <div className="slide-content__overlay">
                  <p className='slide-content__overlay__text1'>LEANGROUP - тубы и этикетки</p>
                  <p className='slide-content__overlay__title'>Ламинатные тубы</p>

                  <p className='slide-content__overlay__text2'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>

                  <div className="slide-content__overlay__button">Каталог</div>
                </div>
                <div className="slide-content__call">
                  <div className="slide-content__call__img">
                    <img src={vk} alt="" />
                  </div>
                  <div className="slide-content__call__img">
                    <img src={fb} alt="" />
                  </div>
                  <div className="slide-content__call__img">
                    <img src={linkedin} alt="" />
                  </div>
                </div>
              </div>
            </div>
        </Slider>
        </div>
      </section>
    )
  }
}

export default Home