import React, { useState, useEffect } from 'react';

//create type for props
type CardProps = {
  value: string;
};

const Card = ({ value }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
    var msg = new SpeechSynthesisUtterance();
    msg.text = value;

    const audio = new Audio('/sounds/flip.mp3');
    audio.play();
    //wait for audio to finish playing
    setTimeout(() => {
      window.speechSynthesis.speak(msg);
    }, 200);
  };

  return (
    <div className='flip'>
      <div className={(flipped ? ' flip-clicked' : '') + ' flip-content'} onClick={flip}>
        <div className='flip-front'>Front</div>
        <div className='flip-back'>
          <strong>{value}</strong>
        </div>
      </div>
    </div>
  );
};

export default Card;
