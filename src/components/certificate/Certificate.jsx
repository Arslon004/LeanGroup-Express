import React, { Component } from 'react'
import Slider from "react-slick";

import image1 from "../../assets/images/certificate1.svg";
import image2 from "../../assets/images/certificate2.svg";
import image3 from "../../assets/images/certificate3.svg";
import image4 from "../../assets/images/certificate4.svg";
import image5 from "../../assets/images/certificate5.svg";

import "./Certificate.scss";

export class Certificate extends Component {
  render() {
    const settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    }
    return (
      <section id='certificate'>
        <div className="container">
          <div className="certificate">
            <h2 className="certificate__title">Качество продукции подтверждают <span>сертификаты</span></h2>
          <Slider {...settings}>
            <div>
              <img src={image1} alt="" />
            </div>

            <div>
              <img src={image2} alt="" />
            </div>

            <div>
              <img src={image3} alt="" />
            </div>

            <div>
              <img src={image4} alt="" />
            </div>

            <div>
              <img src={image5} alt="" />
            </div>

            <div>
              <img src={image1} alt="" />
            </div>

            <div>
              <img src={image2} alt="" />
            </div>

            <div>
              <img src={image3} alt="" />
            </div>

            <div>
              <img src={image4} alt="" />
            </div>

            <div>
              <img src={image5} alt="" />
            </div>
          </Slider>
          </div>
        </div>
      </section>
    )
  }
}

export default Certificate