import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import db from '../db/db';

//create type for props
type CardProps = {
  value: string;
  flipped: boolean;
  handler: () => void;
};

const Card = ({ value, flipped, handler }: CardProps) => {
  const isNum = !isNaN(Number(value));
  const path = db.getImgSrc(value);

  return (
    <div onClick={handler} className='w-full h-full'>
      <div className={(flipped ? ' flip-clicked' : '') + ' flip-content w-full h-full'}>
        <div
          className='flip-front bg-center bg-cover text-left align-middle shadow-xl rounded-lg w-full h-full'
          style={{ backgroundImage: `url('images/pattern.png')` }}
        ></div>
        <div
          className='flip-back bg-center bg-cover rounded-lg shadow-xl w-full h-full'
          style={{ backgroundImage: `url('${path}')` }}
        >
          <div
            className={`card-label text-white ${
              value.length < 3 ? 'text-8xl' : 'text-4xl'
            } flex w-full h-full place-items-end pl-3 font-bold`}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
