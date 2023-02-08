import React, { useState } from 'react';

import Image from 'next/image';
import { Howl } from 'howler';

import db from '../db/db';

import FlashCardGameOver from '@/components/FlashCardGameOver';

type FlashProps = {
  //initial deck is an array of objects that have two properties name: [string], and class: [string]
  initialDeck: string[];
  mainMenu: () => void;
  wordsOnly?: boolean;
};

interface Stats {
  [key: string]: number;
}

const FlashCardGame = ({ initialDeck, mainMenu, wordsOnly = false }: FlashProps) => {
  const [gameInProgress, setGameInProgress] = useState(true);
  const [deck, setDeck] = useState(
    initialDeck.map((card, i) => {
      let classString = 'bottom';
      if (i === initialDeck.length - 1) classString = 'top';
      if (i === initialDeck.length - 2) classString = 'oneback';
      if (i === initialDeck.length - 3) classString = 'twoback';
      return { name: card, class: classString };
    })
  );
  const [top, setTop] = useState(initialDeck.length - 1);
  const [stats, setStats] = useState(
    initialDeck.reduce<Stats>((acc, card) => {
      acc[card] = 0;
      return acc;
    }, {})
  );
  const flip = new Howl({
    src: ['/sounds/flip.mp3'],
    volume: 0.5,
  });

  const handleClick = (accepted: boolean) => {
    if (top < 0) return;
    flip.play();
    let newDeck = [...deck];
    setStats({ ...stats, [deck[top].name]: stats[deck[top].name] + 1 });
    if (accepted) {
      newDeck[top].class = 'moved-correct';
    } else {
      newDeck[top].class = 'moved-incorrect';
    }
    if (top - 1 >= 0) newDeck[top - 1].class = 'top';
    if (top - 2 >= 0) newDeck[top - 2].class = 'oneback';
    if (top - 3 >= 0) newDeck[top - 3].class = 'twoback';
    setDeck(newDeck);
    setTop(top - 1);

    if (top === 0) {
      setTimeout(() => {
        let temp = [];
        for (let i = 0; i < deck.length; i++) {
          if (deck[i].class === 'moved-incorrect') {
            temp.push({
              name: deck[i].name,
              class: 'bottom',
            });
          }
        }
        let newTop = temp.length - 1;
        if (newTop >= 0) temp[newTop].class = 'top';
        if (newTop - 1 >= 0) temp[newTop - 1].class = 'oneback';
        if (newTop - 2 >= 0) temp[newTop - 2].class = 'twoback';

        if (temp.length === 0) {
          setGameInProgress(false);
        } else {
          setDeck(temp);
          setTop(newTop);
        }
      }, 1000);
    }
  };

  return (
    <div className='flashcards w-full bg-slate-200 p-10 h-screen flex justify-center'>
      {gameInProgress ? (
        <>
          {deck.map((card, i) => {
            const src = db.getImgSrc(card.name);
            const className = card.class + ' card';
            return (
              <div className={className} key={card.name}>
                {!wordsOnly && (
                  <>
                    <Image src={src} width={240} height={240} alt={card.name} priority />
                    <div className={`h-32 ${card.name.length > 12 ? 'text-4xl' : 'text-8xl'}`}>
                      {card.name}
                    </div>
                  </>
                )}
                {wordsOnly && (
                  <div className={`h-96 ${card.name.length > 12 ? 'text-4xl' : 'text-8xl'}`}>
                    {card.name}
                  </div>
                )}
              </div>
            );
          })}

          <div className='controls mt-[560px]'>
            <button className='accept' onClick={() => handleClick(true)}>
              <span className='text-hidden'>👍 Yes!!</span>
            </button>
            <button className='reject' onClick={() => handleClick(false)}>
              <span className='text-hidden'>👎 Not yet...</span>
            </button>
          </div>
        </>
      ) : (
        <FlashCardGameOver stats={stats} mainMenu={mainMenu} />
      )}
    </div>
  );
};

export default FlashCardGame;
