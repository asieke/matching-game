import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import db from '../db/db';

import FlashCardGame from '@/components/FlashCardGame';
import MatchingGame from '@/components/MatchingGame';
import SettingsCardNumber from '@/components/SettingsCardNumber';

export default function Home() {
  const [game, setGame] = useState('menu');
  const [numCards, setNumCards] = useState(16);

  return (
    <>
      <button
        className='fixed z-50 p-4 bg-black text-white top-0 right-0'
        onClick={() => setGame('menu')}
      >
        Main Menu
      </button>
      {game === 'menu' && (
        <>
          <div className='fixed z-40 top-0 left-0 w-full p-2 h-[64px] bg-black'>
            <SettingsCardNumber selected={numCards} onChange={setNumCards} />
          </div>

          <div className='p-8'>
            <h1>Flash Cards</h1>
            <div className='grid grid-cols-4 mt-3'>
              <Tile label='Uppercase' onClick={() => setGame('uppercase')} />
              <Tile label='Lowercase' onClick={() => setGame('lowercase')} />
              <Tile label='Numbers' onClick={() => setGame('numbers')} />
              <Tile label='Animals' onClick={() => setGame('animals')} />
              <Tile label='Colors' onClick={() => setGame('colors')} />
              <Tile label='Vehicles' onClick={() => setGame('vehicles')} />
              <Tile label='Sight Words' onClick={() => setGame('sight-words')} />
            </div>
            <h1>Matching Game</h1>

            <div className='grid grid-cols-4 mt-3'>
              <Tile label='Uppercase' onClick={() => setGame('m-uppercase')} />
              <Tile label='Lowercase' onClick={() => setGame('m-lowercase')} />
              <Tile label='Numbers' onClick={() => setGame('m-numbers')} />
              <Tile label='Animals' onClick={() => setGame('m-animals')} />
              <Tile label='Colors' onClick={() => setGame('m-colors')} />
              <Tile label='Vehicles' onClick={() => setGame('m-vehicles')} />
              <Tile label='Sight Words' onClick={() => setGame('m-sight-words')} />
            </div>
          </div>
        </>
      )}
      {game !== 'menu' && <Game game={game} setGame={setGame} numCards={numCards} />}
    </>
  );
}

interface TileProps {
  label: string;
  onClick: () => void;
}

const Tile = ({ label, onClick }: TileProps) => {
  const src = '/images/' + label.toLowerCase().replaceAll(' ', '-') + '.png';
  return (
    <div
      onClick={onClick}
      className='p-4 bg-slate-700 rounded-md text-center m-4 hover:bg-black hover:cursor-pointer relative'
    >
      <Image src={src} alt={label} height={480} width={320} />
      <div className='text-white mt-3 text-lg font-extrabold'>{label}</div>
    </div>
  );
};

interface GameProps {
  game: string;
  setGame: (game: string) => void;
  numCards: number;
}

const Game = ({ game, setGame, numCards }: GameProps) => {
  if (game === 'uppercase') {
    let deck = db.getRandom(numCards, 'uppercase');
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} />;
  }
  if (game === 'lowercase') {
    let deck = db.getRandom(numCards, 'lowercase');
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} />;
  }
  if (game === 'numbers') {
    let deck = db.getRandom(numCards, 'numbers');
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} />;
  }
  if (game === 'animals') {
    let deck = db.getRandom(numCards, 'animals');
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} />;
  }
  if (game === 'colors') {
    let deck = db.getRandom(numCards, 'colors');
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} />;
  }
  if (game === 'vehicles') {
    let deck = db.getRandom(numCards, 'vehicles');
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} />;
  }
  if (game === 'sight-words') {
    let deck = db.getRandom(numCards, 'sight-words');
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} />;
  }
  /* Matching Game */
  if (game === 'm-uppercase') {
    let deck = db.getMatchingCards(numCards / 2, 'uppercase');
    return <MatchingGame initialDeck={deck} size='8xl' />;
  }
  if (game === 'm-lowercase') {
    let deck = db.getMatchingCards(numCards / 2, 'lowercase');
    return <MatchingGame initialDeck={deck} />;
  }
  if (game === 'm-numbers') {
    let deck = db.getMatchingCards(numCards / 2, 'numbers');
    return <MatchingGame initialDeck={deck} />;
  }
  if (game === 'm-animals') {
    let deck = db.getMatchingCards(numCards / 2, 'animals');
    let size = numCards === 16 ? '6xl' : numCards === 24 ? '5xl' : '4xl';
    return <MatchingGame initialDeck={deck} size={size} />;
  }
  if (game === 'm-colors') {
    let deck = db.getMatchingCards(numCards / 2, 'colors');
    return <MatchingGame initialDeck={deck} />;
  }
  if (game === 'm-vehicles') {
    let deck = db.getMatchingCards(numCards / 2, 'vehicles');
    let size = numCards === 16 ? '6xl' : numCards === 24 ? '5xl' : '4xl';
    return <MatchingGame initialDeck={deck} size={size} />;
  }
  if (game === 'm-sight-words') {
    let deck = db.getMatchingCards(numCards / 2, 'sight-words');
    return <MatchingGame initialDeck={deck} />;
  }

  return <></>;
};
