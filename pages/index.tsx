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
            <div className='grid grid-cols-6 mt-8'>
              <Tile label='Uppercase' game='uppercase' setGame={setGame} />
              <Tile label='Lowercase' game='lowercase' setGame={setGame} />
              <Tile label='Numbers' game='numbers' setGame={setGame} />
              <Tile label='Animals' game='animals' setGame={setGame} />
              <Tile label='Colors' game='colors' setGame={setGame} />
              <Tile label='Vehicles' game='vehicles' setGame={setGame} />
              <Tile label='Sight Words' game='sight-words' setGame={setGame} />
            </div>

            <div className='grid grid-cols-6 mt-3'>
              <Tile label='Uppercase' game='m-uppercase' setGame={setGame} />
              <Tile label='Lowercase' game='m-lowercase' setGame={setGame} />
              <Tile label='Numbers' game='m-numbers' setGame={setGame} />
              <Tile label='Animals' game='m-animals' setGame={setGame} />
              <Tile label='Colors' game='m-colors' setGame={setGame} />
              <Tile label='Vehicles' game='m-vehicles' setGame={setGame} />
              <Tile label='Sight Words' game='m-sight-words' setGame={setGame} />
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
  game: string;
  setGame: (game: string) => void;
}

const Tile = ({ label, game, setGame }: TileProps) => {
  const src = '/images/thumb-' + label.toLowerCase().replaceAll(' ', '-') + '.png';
  //if game contains m- then it is a matching game
  const bg = game.includes('m-') ? 'bg-slate-700' : 'bg-red-700';
  const type = game.includes('m-') ? 'matching' : 'flashcards';

  return (
    <div
      onClick={() => setGame(game)}
      className={`p-4 ${bg} rounded-md text-center m-4 hover:bg-black hover:cursor-pointer relative`}
    >
      <Image src={src} alt={label} height={480} width={320} priority />
      <p className='text-white mt-2 text-base font-extrabold'>{label}</p>
      <p className='text-white text-sm'>{type}</p>
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
    return <FlashCardGame initialDeck={deck} mainMenu={() => setGame('menu')} wordsOnly={true} />;
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
    return <MatchingGame initialDeck={deck} />;
  }
  if (game === 'm-colors') {
    let deck = db.getMatchingCards(numCards / 2, 'colors');
    return <MatchingGame initialDeck={deck} />;
  }
  if (game === 'm-vehicles') {
    let deck = db.getMatchingCards(numCards / 2, 'vehicles');
    return <MatchingGame initialDeck={deck} />;
  }
  if (game === 'm-sight-words') {
    let deck = db.getMatchingCards(numCards / 2, 'sight-words');
    return <MatchingGame initialDeck={deck} />;
  }

  return <></>;
};
