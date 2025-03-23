import React from 'react';
import logo from '../img/logo.svg';
import background from '../img/background.png';

export default function NavPanel() {
  return (
    <header
      className="header w-full bg-cover bg-no-repeat bg-center h-[768px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="header__container flex justify-center px-[40px]">
        <nav className="nav p-[18px] mt-24px bg-amber-50 rounded-[40px] mt-[20px]">
          <ul className="nav__list flex">
            <div className="nav__left-side flex gap-[24px]">
              <li className="nav__item">
                <a href="#" className="nav__link uppercase font-manrope text-[16px] font-bold">
                  shop
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link uppercase font-manrope text-[16px] font-bold">
                  about
                </a>
              </li>
            </div>
            <a href="#">
              <img src={logo} alt="logo" className="mx-[480px]" />
            </a>
            <div className="nav__right-side flex gap-[24px]">
              <li className="nav__item">
                <a href="#" className="nav__link uppercase font-manrope text-[16px] font-bold">
                  blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link uppercase font-manrope text-[16px] font-bold">
                  contact
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <div className="header__info text-center mt-50  w-[700px] mx-auto ">
        <h1 className="text-[80px] text-amber-50 leading-[100%] font-sentient">
          Elevate everyday moments to extraordinary.
        </h1>
      </div>
    </header>
  );
}
