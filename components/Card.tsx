import React, { useState, useEffect } from 'react';
import Image from 'next/image';

//create type for props
type CardProps = {
  value: string;
  flipped: boolean;
  width: number;
  height: number;
  handler: () => void;
};

const Card = ({ value, flipped, handler, width, height }: CardProps) => {
  // const flip = () => {
  //   setFlipped(!flipped);
  //   var msg = new SpeechSynthesisUtterance();
  //   msg.text = value;

  //   const audio = new Audio('/sounds/flip.mp3');
  //   audio.play();
  //   //wait for audio to finish playing
  //   setTimeout(() => {
  //     window.speechSynthesis.speak(msg);
  //   }, 200);
  // };

  const isNum = !isNaN(Number(value));
  const path = isNum ? `images/number-card.png` : `card-images/${value}.png`;

  const className = `flip w-[${width}px] h-[${height}px]`;

  return (
    <div className={className} onClick={handler}>
      <div className={(flipped ? ' flip-clicked' : '') + ' flip-content'}>
        <div
          className='flip-front bg-center bg-cover text-left align-middle shadow-xl rounded-lg'
          style={{ backgroundImage: `url('images/pattern.png')` }}
        ></div>
        <div
          className='flip-back bg-center bg-cover text-left align-middle rounded-lg shadow-xl'
          style={{ backgroundImage: `url('${path}')` }}
        >
          <p className='card-label text-white text-8xl font-bold outline-black-1px mt-5 ml-3'>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
