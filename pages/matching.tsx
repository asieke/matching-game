import Card from '../components/Card';
import React, { useState } from 'react';
import { Howl } from 'howler';
import db from '../db/db';

interface Status {
  [key: number]: number;
}

//create type for props
type GameProps = {
  cards: string[];
  values: string[];
  columns: number;
};

type SoundMap = { [key: string]: Howl };

export default function Game({ cards, values, columns }: GameProps) {
  console.log('GAME>>>', cards, values, columns);

  //set initial state of animals to an empty array
  const [gameState, setGameState] = useState(true);
  const [status, setStatus] = useState<Status>({});
  const [matches, setMatches] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [clicks, setClicks] = useState(0);

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
    if (startTime === 0) {
      setStartTime(Date.now());
    }

    if (status[i] === 1 || status[i] === 2) {
      return;
    }

    // count the number of elements in status where status is 1
    // if there are already two cards flipped, don't flip any more
    const count = Object.values(status).filter((x) => x === 1).length;
    if (count === 2) {
      return;
    }

    setClicks(clicks + 1);

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
        if (matches + 1 === cards.length / 2) {
          setEndTime(Date.now());
          setTimeout(() => {
            setGameState(false);
          }, 2000);
        }
        setMatches(matches + 1);
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

  const className = `mx-auto grid grid-cols-${columns} gap-3 bg-blue-300 h-full`;
  return (
    <div className='w-full bg-slate-200 p-5 h-screen'>
      {gameState && (
        <div className={className}>
          {cards.map((x, i) => (
            <div key={i}>
              <Card value={x} flipped={!!status[i]} handler={() => handleClick(i)} />
            </div>
          ))}
        </div>
      )}
      {!gameState && (
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl text-center font-bold'>Game Over</h1>
          <h3>{matches}</h3>
          <h3>{clicks}</h3>
          <h3>{endTime - startTime}</h3>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const n = (query.n || 16) as number;
  const category = (query.category || 'letters') as string;

  console.log(category);

  const temp = [];
  for (let i = 0; i < db[category].length; i++) {
    temp.push(i);
  }
  temp.sort(() => Math.random() - 0.5);

  const values = [];
  for (let i = 0; i < n / 2; i++) {
    values.push(db[category][temp[i]]);
  }

  const columns = n == 16 ? 4 : 6;

  const cards = [...values, ...values].sort(() => Math.random() - 0.5);

  return {
    props: {
      cards,
      values,
      columns,
    },
  };
}
