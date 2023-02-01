import Card from '../components/Card';
import React, { useState } from 'react';
import fetchMP3s from '../lib/fetchMP3s';
import { Howl } from 'howler';

interface Status {
  [key: number]: number;
}

//create type for props
type GameProps = {
  cards: string[];
  values: string[];
};

type SoundMap = { [key: string]: Howl };

export default function Game({ cards, values }: GameProps) {
  //set initial state of animals to an empty array
  const [gameState, setGameState] = useState(true);
  const [status, setStatus] = useState<Status>({});

  const sounds: SoundMap = {
    flip: new Howl({
      src: ['/sounds/flip.mp3'],
      volume: 0.5,
    }),
    match: new Howl({
      src: ['/sounds/match.mp3'],
    }),
  };
  for (let i = 0; i < values.length; i++) {
    sounds[values[i]] = new Howl({
      src: [`/card-sounds/${values[i]}.mp3`],
    });
  }

  const handleClick = (i: number) => {
    if (status[i] === 1 || status[i] === 2) {
      return;
    }

    // count the number of elements in status where status is 1
    // if there are already two cards flipped, don't flip any more
    const count = Object.values(status).filter((x) => x === 1).length;
    if (count === 2) {
      return;
    }

    sounds.flip.play();
    sounds[cards[i]].play();

    // iterate through statuses and find the value where status is 1
    let flipped: number = -1;
    for (let j in status) {
      if (status[j] === 1) {
        flipped = parseInt(j);
        break;
      }
    }

    // first card to be flipped
    if (flipped === -1) {
      setStatus({ ...status, [i]: 1 });
    } else {
      //its a match!
      if (cards[i] === cards[flipped]) {
        setTimeout(() => {
          sounds.match.play();
        }, 500);
        setStatus({ ...status, [i]: 2, [flipped]: 2 });
      } else {
        setStatus({ ...status, [i]: 1 });
        setTimeout(() => {
          sounds.flip.play();
          setStatus({ ...status, [i]: 0, [flipped]: 0 });
        }, 1000);
      }
    }
  };

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-10'>Matching Game</h1>
      {gameState && (
        <div className='h-4/5 w-4/5 mx-auto grid grid-cols-4 gap-4'>
          {cards.map((x, i) => (
            <div key={i}>
              <Card value={x} flipped={!!status[i]} handler={() => handleClick(i)} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  // context contains information about the current request
  // and helper functions for processing the request/response

  const values = context.query.values.toString().split(',');
  const cards = [...values, ...values].sort(() => Math.random() - 0.5);

  await fetchMP3s(values);

  return {
    props: {
      cards,
      values,
    },
  };
}
