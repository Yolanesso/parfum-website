import React from 'react';
import advImg from '../img/adv.png';

export default function ProductAdvertising() {
  return (
    <section className="product_advertising mt-[80px]">
      <div className="product_advertising__container flex px-[320px] items-center">
        <img
          className="product_advertising-img mr-[120px]"
          src={advImg}
          alt="Product advertising"
        />
        <div className="product_advertising__info flex flex-col text-center">
          <h1 className="product_advertising-title text-[40px] font-sentient font-light">
            Smell like a <span className="italic">dream.</span>
          </h1>
          <p
            style={{ marginTop: '40px' }}
            className="product_advertising-inner w-[400px] text-[18px] font-manrope"
          >
            With every delicate spritz, our scents weave a tapestry of dreams, enveloping you in an
            irresistible aura that lingers like the sweetest reverie. Each note is meticulously
            crafted to transport you to a realm where your aspirations come alive, leaving an
            impression that's as lasting as the memory of a cherished dream.
          </p>
          <button className="product_advertising-btn font-manrope mt-[40px] transition-colors text-black bg-[#ABB249] hover:bg-[#9ba042] px-[150px] py-[12px] rounded-3xl uppercase">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}
