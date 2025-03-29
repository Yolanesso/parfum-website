import React from 'react';
import safeBg from '../img/safeBg.png';
import safe from '../data/safe';

export default function SafeInfo() {
  return (
    <section className="safe mt-[50px]">
      <div className="safe__container">
        <div className="safe__info flex absolute px-[180px]">
          <div className="safe__card-container grid grid-cols-2 grid-rows-2 gap-[34px] items-end mr-[40px]">
            {safe.map((item, index) => (
              <div className="safe__card w-80  ">
                <img className="safe__card-img mb-[12px]" key={index} src={item.src} alt="sheet" />
                <h1
                  className="safe__card-title mb-[12px] uppercase font-manrope font-[12px] font-bold "
                  key={index}
                >
                  {item.title}
                </h1>
                <p className="safe__card-info font-manrope font-[16px] font-normal" key={index}>
                  {item.info}
                </p>
              </div>
            ))}
          </div>
          <img src={safeBg} alt="safe-image" />
        </div>
      </div>
    </section>
  );
}
