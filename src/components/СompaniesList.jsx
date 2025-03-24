import React, { useId } from 'react';

import flowLogo from '../img/companies/flow.png';
import intrendLogo from '../img/companies/intrend.png';
import juneLogo from '../img/companies/june.png';
import maxLogo from '../img/companies/max.png';
import ninoLogo from '../img/companies/nino.png';
import zineLogo from '../img/companies/zine.png';

const logos = [
  { src: flowLogo, alt: 'Flow logo' },
  { src: intrendLogo, alt: 'Intrend logo' },
  { src: juneLogo, alt: 'June logo' },
  { src: maxLogo, alt: 'Max logo' },
  { src: ninoLogo, alt: 'Nino logo' },
  { src: zineLogo, alt: 'Zine logo' },
];

export default function CompaniesList() {
  let id = useId();

  return (
    <div className="companies">
      <h1 className="companies__title text-center pt-[80px] py-[40px] text-[12px] font-bold uppercase font-manrope">
        As seen in
      </h1>

      <div className="companies__list flex justify-center gap-[80px] ">
        {logos.map((logo, index) => (
          <img width={100} key={`${id} - ${index}`} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}
