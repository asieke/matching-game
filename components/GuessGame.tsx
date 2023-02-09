import React, { useState } from 'react';
import { CardType } from '../db/db';

//create a prop type
type GuessGameProps = {
  //prop name: prop type
  initialDeck: CardType[];
};

const GuessGame = ({ initialDeck }: GuessGameProps) => {
  return (
    <div>
      <h1>Guess Game</h1>
    </div>
  );
};

export default GuessGame;
