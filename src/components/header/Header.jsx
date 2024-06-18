import React, { Component } from 'react';

import logo from "../../assets/images/logo.svg";
import dark from "../../assets/images/moon.svg";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";

import "./Header.scss";

export class Header extends Component {
  state = {
    dark: false,
  };

  closeNavbar = () => {
    document.getElementById("navbar__responsive").style.left = "-100%";
  };

  openNavbar = () => {
    document.getElementById("navbar__responsive").style.left = "0";
  };

  themeChange = () => {
    document.body.classList.toggle("dark");
    this.setState({ dark: !this.state.dark });
  };

  render() {
    return (
      <section>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__logo">
              <a href="#logo">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="navbar__menus">
              <ul className="navbar__menus__list">
                <li className="navbar__menus__item">
                  <a href="#home" className="navbar__menus__link">Продукция</a>
                </li>
                <span>|</span>
                <li className="navbar__menus__item">
                  <a href="#certificate" className="navbar__menus__link link">Сертификаты</a>
                </li>
                <span>|</span>
                <li className="navbar__menus__item">
                  <a href="#community" className="navbar__menus__link">Наша команда</a>
                </li>
                <span>|</span>
                <li className="navbar__menus__item">
                  <a href="#about" className="navbar__menus__link">О нас</a>
                </li>
                <span>|</span>
                <li className="navbar__menus__item">
                  <a href="#news" className="navbar__menus__link">Новости</a>
                </li>
                <span>|</span>
                <li className="navbar__menus__item">
                  <a href="#product" className="navbar__menus__link">Вакансии</a>
                </li>
                <span>|</span>
                <li className="navbar__menus__item">
                  <a href="#contact" className="navbar__menus__link">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="navbar__btn">
              <button onClick={this.themeChange} className="navbar__btn__darklight">
                {this.state.dark ? "Light" : "Dark"}
              </button>
              <button onClick={this.openNavbar} id="navbar-open" className="hamburger">
                <img src={menu} alt="hamburger" />
              </button>
            </div>
          </nav>
          <nav id="navbar__responsive" className="navbar__responsive">
            <ul className="navbar__responsive_list">
              <li className="navbar__responsive_item">
                <a href="#home" className="navbar__responsive__link">Продукция</a>
              </li>
              <li className="navbar__responsive_item">
                <a href="#certificate" className="navbar__responsive__link">Сертификаты</a>
              </li>
              <li className="navbar__responsive_item">
                <a href="#community" className="navbar__responsive__link">Наша команда</a>
              </li>
              <li className="navbar__responsive_item">
                <a href="#about" className="navbar__responsive__link">О нас</a>
              </li>
              <li className="navbar__responsive_item">
                <a href="#news" className="navbar__responsive__link">Новости</a>
              </li>
              <li className="navbar__responsive_item">
                <a href="#product" className="navbar__responsive__link">Вакансии</a>
              </li>
              <li className="navbar__responsive_item">
                <a href="#contact" className="navbar__responsive__link">Контакты</a>
              </li>
            </ul>
            <button onClick={this.closeNavbar} id="navbar-close" className="navbar__close">
              <img src={close} alt="close" />
            </button>
          </nav>
        </div>
      </section>
    );
  }
}

export default Header;
