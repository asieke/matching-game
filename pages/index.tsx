import Card from '../components/Card';
import React, { useState, useEffect } from 'react';

interface Status {
  [key: number]: number;
}

export default function Home() {
  //set initial state of animals to an empty array
  const [cards, setCards] = useState([] as string[]);
  const [status, setStatus] = useState<Status>({});

  //use effect, setAnimals to a shuffled array of animals
  useEffect(() => {
    const seed = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Monkey', 'Kangaroo', 'Panda', 'Zebra'];
    //create an array with 16 0s

    setCards([...seed, ...seed].sort(() => Math.random() - 0.5));
  }, []);

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

    playCardFlipSound(cards[i]);

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
          playSound('match');
        }, 1000);
        setStatus({ ...status, [i]: 2, [flipped]: 2 });
      } else {
        setStatus({ ...status, [i]: 1 });
        setTimeout(() => {
          playSound('flip');
          setStatus({ ...status, [i]: 0, [flipped]: 0 });
        }, 2000);
      }
    }
  };

  console.log(status);

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-10'>Matching Game</h1>
      <div className='h-4/5 w-4/5 mx-auto grid grid-cols-4 gap-4'>
        {cards.map((x, i) => (
          <div key={i}>
            <Card value={x} flipped={!!status[i]} handler={() => handleClick(i)} />
          </div>
        ))}
      </div>
    </>
  );
}

const playCardFlipSound = (value: string) => {
  var msg = new SpeechSynthesisUtterance();
  msg.text = value;

  playSound('flip');
  //wait for audio to finish playing
  setTimeout(() => {
    window.speechSynthesis.speak(msg);
  }, 200);
};

const playSound = (sound: string) => {
  const audio = new Audio(`/sounds/${sound}.mp3`);
  audio.play();
};
