import Card from '../components/Card';
import React, { useState, useEffect } from 'react';

export default function Home() {
  //generate an array with 16 random animals

  //set initial state of animals to an empty array

  const [animals, setAnimals] = useState([] as string[]);

  //use effect, setAnimals to a shuffled array of animals
  useEffect(() => {
    const seed = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Monkey', 'Kangaroo', 'Panda', 'Zebra'];
    setAnimals([...seed, ...seed].sort(() => Math.random() - 0.5));
  }, []);

  console.log(animals);

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-10'>Matching Game</h1>
      <div className='h-4/5 w-4/5 mx-auto grid grid-cols-4 gap-4'>
        {animals.map((x, i) => (
          <div key={i}>
            <Card value={x} />
          </div>
        ))}
      </div>
    </>
  );
}
