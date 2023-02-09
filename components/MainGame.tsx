import FlashCardGame from '@/components/FlashCardGame';
import MatchingGame from '@/components/MatchingGame';
import GuessGame from './GuessGame';

import db, { GameType } from '../db/db';

interface GameProps {
  game: GameType;
  numCards: number;
}

const Game = ({ game, numCards }: GameProps) => {
  if (game.type === 'flashcards') {
    let deck = db.getRandom(numCards, game.category);
    return <FlashCardGame initialDeck={deck} wordsOnly={game.wordsOnly} />;
  }
  if (game.type === 'matching') {
    let deck = db.getRandomMatching(numCards, game.category);
    return <MatchingGame initialDeck={deck} />;
  }
  if (game.type === 'guessing') {
    let deck = db.getRandom(numCards, game.category);
    return <GuessGame initialDeck={deck} />;
  }

  return <></>;
};

export default Game;
