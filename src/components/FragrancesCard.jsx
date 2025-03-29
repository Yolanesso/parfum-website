import React from 'react';
import fragrances from '../data/fragrances';

export default function FragrancesCard() {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8 ">
      {fragrances.map((fragrance, index) => (
        <div key={index} className="w-full  max-w-xs">
          <div className="fragrances__card font-sentient flex flex-col items-center p-4 relative">
            {fragrance.sale && (
              <p className="absolute top-[30px] right-[30px] uppercase px-[16px] py-[8px] bg-[#E8A94C] rounded-3xl text-zinc-950 z-10">
                On sale
              </p>
            )}
            <img
              className="w-full h-64 object-contain mb-4"
              src={fragrance.src}
              alt={fragrance.name}
            />
            <div className="text-center w-full">
              <h2 className="text-xl font-medium mb-2">{fragrance.name}</h2>
              <p className="text-sm uppercase text-gray-600 mb-3">{fragrance.smell}</p>
              <p className="text-lg mb-4">${fragrance.price.toFixed(2)}</p>
              <button className="bg-[#ABB249] mt-[20px] hover:bg-[#9ba042] text-black px-8 py-2 rounded-full uppercase font-manrope text-sm transition-colors w-full max-w-xs">
                shop now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
