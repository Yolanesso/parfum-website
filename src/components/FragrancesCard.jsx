import React from 'react';
import jardineaImg from '../img/fragrances/jardinea.png';
import meadowImg from '../img/fragrances/meadow.png';
import lavanda from '../img/fragrances/lavanda.png';
import neroli from '../img/fragrances/neroli.png';

const fragrances = [
  {
    name: 'Jardines',
    smell: 'strongly floral',
    src: jardineaImg,
    price: 39.95,
  },
  {
    name: 'Meadow',
    smell: 'breezy & joyful',
    src: meadowImg,
    price: 39.95,
  },
  { name: 'Lavanda', smell: 'calming', src: lavanda, price: 39.95 },
  { name: 'Neroli', smell: 'deep & sweet', src: neroli, price: 39.95 },
];

export default function FragrancesCard() {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8 sm:px-8 lg:px-16 xl:px-32">
      {fragrances.map((fragrance, index) => (
        <div
          key={index}
          className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-16px)] max-w-xs"
        >
          <div className="fragrances__card font-sentient flex flex-col items-center p-4">
            <img
              className="w-full h-64 object-contain mb-4"
              src={fragrance.src}
              alt={fragrance.name}
            />
            <div className="text-center w-full">
              <h2 className="text-xl font-medium mb-2">{fragrance.name}</h2>
              <p className="text-sm uppercase text-gray-600 mb-3">{fragrance.smell}</p>
              <p className="text-lg mb-4">${fragrance.price.toFixed(2)}</p>
              <button className="bg-[#ABB249] hover:bg-[#9ba042] text-white px-8 py-2 rounded-full uppercase text-sm transition-colors w-full max-w-xs">
                shop now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
