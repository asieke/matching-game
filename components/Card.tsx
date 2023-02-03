import React, { useState, useEffect } from 'react';
import Image from 'next/image';

//create type for props
type CardProps = {
  value: string;
  flipped: boolean;
  handler: () => void;
};

const Card = ({ value, flipped, handler }: CardProps) => {
  console.log('CARD>>>', value, flipped, handler);
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
          <div className='card-label text-white text-9xl flex w-full h-full items-center pl-3 font-bold'>
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
