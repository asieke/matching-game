import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import db from '../db/db';

import FlashCardGame from '@/components/FlashCardGame';
import MatchingGame from '@/components/MatchingGame';

export default function Home() {
  const [game, setGame] = useState('menu');

  return (
    <>
      {game === 'menu' && (
        <div className='p-8'>
          <h1>Flash Cards</h1>
          <div className='grid grid-cols-4 mt-3'>
            <div onClick={() => setGame('letters')}>
              <Card word='Uppercase' image='/card-images/B.png' />
            </div>
            <div onClick={() => setGame('letters-lowercase')}>
              <Card word='Lowercase' image='/card-images/A.png' />
            </div>
            <div onClick={() => setGame('numbers')}>
              <Card word='Numbers' image='/images/numbers.png' />
            </div>
            <div onClick={() => setGame('animals')}>
              <Card word='Animals' image='/images/animals.png' />
            </div>
            <div onClick={() => setGame('colors')}>
              <Card word='Colors' image='/card-images/brown.png' />
            </div>
          </div>
          <h1>Matching Game</h1>
          <div className='grid grid-cols-4 mt-3'>
            <div onClick={() => setGame('matching-colors')}>
              <Card word='Amimals' image='/images/Animals.png' />
            </div>
          </div>
        </div>
      )}
      {game === 'letters' && (
        <FlashCardGame initialDeck={db.getRandom(16, 'letters')} mainMenu={() => setGame('menu')} />
      )}
      {game === 'letters-lowercase' && (
        <FlashCardGame
          initialDeck={db.getRandom(16, 'letters-lowercase')}
          mainMenu={() => setGame('menu')}
        />
      )}
      {game === 'numbers' && (
        <FlashCardGame initialDeck={db.getRandom(16, 'numbers')} mainMenu={() => setGame('menu')} />
      )}
      {game === 'animals' && (
        <FlashCardGame initialDeck={db.getRandom(16, 'animals')} mainMenu={() => setGame('menu')} />
      )}
      {game === 'colors' && (
        <FlashCardGame initialDeck={db.getRandom(16, 'colors')} mainMenu={() => setGame('menu')} />
      )}

      {game === 'matching-colors' && (
        <MatchingGame initialDeck={db.getMatchingCards(8, 'colors')} />
      )}
    </>
  );
}

interface CardProps {
  word: string;
  image: string;
}

const Card = ({ word, image }: CardProps) => {
  return (
    <div className='p-4 bg-slate-700 rounded-md text-center m-4 hover:bg-black hover:cursor-pointer'>
      <Image src={image} width={200} height={200} alt={word} />
      <div className='text-white mt-3 text-lg font-extrabold'>{word}</div>
    </div>
  );
};
