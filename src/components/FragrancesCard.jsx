import React from 'react';
import jardineaImg from '../img/fragrances/jardinea.png';

export default function FragrancesCard() {
  return (
    <div className="fragrances__card__container flex px-[250px] gap-[32px]">
      <div className="fragrances__card font-sentient">
        <img className="fragrances__card__img m-0" src={jardineaImg} alt="jardinea" />
        <div className="fragrances__card__info-block w-[563 flex items-center flex-col">
          <h2 className="ragrances__card__title text-[20px] ">jardinea</h2>
          <p className="ragrances__card__info uppercase">strongly floral</p>
          <p className="ragrances__card__price mt-[12px]">$39.95</p>
          <button className="ragrances__card__btn mt-[24px] bg-[#ABB249] px-[121px] py-[12px] rounded-3xl uppercase">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
}
