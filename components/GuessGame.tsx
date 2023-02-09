import React, { useState } from 'react';
import { CardType } from '../db/db';
import getSounds from '../utils/sounds';

import Image from 'next/image';

//create a prop type
type GuessGameProps = {
  //prop name: prop type
  initialDeck: CardType[];
};

const GuessGame = ({ initialDeck }: GuessGameProps) => {
  const [miniDeck, setMiniDeck] = useState(initialDeck.slice(0, 6));
  const [target, setTarget] = useState(Math.floor(Math.random() * 6));

  const sounds = getSounds(initialDeck);

  const canYouFindSound = (letter: string) => {
    sounds['canyoufind'].play();
    setTimeout(() => {
      sounds[letter].play();
    }, 2000);
  };

  const handleUnicornClick = () => {
    canYouFindSound(miniDeck[target].name);
  };

  const handleClick = (i: number) => {
    if (i === target) {
      sounds['awesomejob'].play();
      setTimeout(() => {
        //setMiniDeck to 6 random cards from initialDeck
        const temp = initialDeck;
        temp.sort(() => Math.random() - 0.5);
        //setTarget to a random number between 0 and 5
        const tempTarget = Math.floor(Math.random() * 6);

        canYouFindSound(temp[tempTarget].name);
        setMiniDeck(temp.slice(0, 6));
        setTarget(tempTarget);
      }, 3000);
    } else {
      sounds['tryagain'].play();
    }
  };

  return (
    <div className='guess-container'>
      <div onClick={() => handleUnicornClick()}>
        <Image src='/images/unicorn-guide.png' height={300} width={300} alt='unicorn' />
      </div>
      <div className='mx-auto grid grid-cols-6 gap-4'>
        {miniDeck.map((card, i) => (
          <div onClick={() => handleClick(i)} key={i}>
            <GuessTile card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

type GuessTileProps = {
  card: CardType;
};

const GuessTile = ({ card }: GuessTileProps) => {
  return (
    <div className='guess-card'>
      <h1>{card.name}</h1>
    </div>
  );
};

export default GuessGame;
