import React, { useMemo } from 'react';
import flowerIcon from '../img/flower-icon.png';

export default function RunningLine() {
  const marqueeItems = useMemo(
    () =>
      Array(8)
        .fill(null)
        .map((_, index) => <MarqueeItem key={index} />),
    [],
  );

  return (
    <div className="running-line mt-[80px] overflow-hidden bg-[#E8A94C]">
      <div className="py-[16px]">
        <div className="inline-flex items-center whitespace-nowrap animate-marquee">
          {marqueeItems}
        </div>
      </div>
    </div>
  );
}

function MarqueeItem() {
  return (
    <div className="inline-flex items-center mx-4">
      <img
        width={40}
        height={40}
        className="mr-[10px]"
        src={flowerIcon}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <p className="text-[40px] font-sentient font-light">
        Created for <span className="italic">everyone.</span>
      </p>
    </div>
  );
}
