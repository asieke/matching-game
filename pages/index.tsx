import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import db, { GameType } from '../db/db';

import MainMenu from '@/components/MainMenu';
import Tile from '@/components/MainTile';
import Game from '@/components/MainGame';

export default function Home() {
  // Keep track of the state of the main menu
  const [isMainMenuShowing, setMainMenuShowing] = useState(true);

  // Keep track of the selected game
  const [selectedGame, setSelectedGame] = useState<GameType>(db.games[0]);

  // Keep track of the number of cards to be displayed
  const [numberOfCards, setNumberOfCards] = useState(16);

  return (
    <>
      {/* Show the main menu toggle button */}
      <button
        className='fixed z-50 p-4 bg-black text-white top-0 right-0'
        onClick={() => setMainMenuShowing(true)}
      >
        Main Menu
      </button>

      {/* Display the main menu if it's showing */}
      {isMainMenuShowing && (
        <>
          {/* Display the card number settings */}

          <MainMenu selected={numberOfCards} onChange={setNumberOfCards} />

          {/* Display the game selection tiles */}
          <div className='p-8'>
            <div className='grid grid-cols-6 mt-8'>
              {db.games.map((game, index) => (
                <Tile
                  key={index}
                  game={game}
                  onClick={() => {
                    setSelectedGame(game);
                    setMainMenuShowing(false);
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Display the game if the main menu isn't showing */}
      {!isMainMenuShowing && <Game game={selectedGame} numCards={numberOfCards} />}
    </>
  );
}
