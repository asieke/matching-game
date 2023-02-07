import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import db from '../db/db';

//create type for props
type CardProps = {
  value: string;
  flipped: boolean;
  handler: () => void;
  //optional prop hide image
  size?: string;
};

const Card = ({ value, flipped, handler, size = '8xl' }: CardProps) => {
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
            className={`card-label font-extrabold text-${size} w-full h-full flex items-center justify-center text-center`}
          >
            <span>{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
