import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import db from '../db/db';

//create type for props
type CardProps = {
  value: string;
  flipped: boolean;
  handler: () => void;
  columns: number;
  //optional prop hide image
};

const FlashCard = ({ value, flipped, handler, columns }: CardProps) => {
  const isNum = !isNaN(Number(value));
  const path = db.getImgSrc(value);

  let size = 'text-[120px]';
  if (columns === 4) {
    if (value.length > 2) size = 'text-[80px]';
    if (value.length >= 6) size = 'text-[60px]';
    if (value.length >= 8) size = 'text-[50px]';
  } else {
    if (value.length > 2) size = 'text-[50px]';
    if (value.length >= 5) size = 'text-[40px]';
    if (value.length >= 8) size = 'text-[30px]';
  }

  return (
    <div onClick={handler} className='w-full h-full'>
      <div className={(flipped ? ' flip-clicked' : '') + ' flip-content w-full h-full'}>
        <div className='flip-front bg-center bg-cover shadow-xl rounded-lg w-full h-full'>
          <Image priority src={'/images/pattern.png'} fill alt={'pattern'} />
        </div>
        <div
          className='flip-back bg-center bg-cover rounded-lg shadow-xl w-full h-full'
          style={{ backgroundImage: `url('${path}')` }}
        >
          <div
            className={`card-label font-extrabold ${size} w-full h-full flex leading-none items-center justify-center text-center`}
          >
            <p>{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
