import React from 'react';
import Image from 'next/image';

type PropTypes = {
  stats: { [key: string]: number };
};

const Card = ({ word }: { word: string }) => {
  return (
    <div className='p-4 bg-slate-700 rounded-md text-center m-4'>
      <Image src={`/card-images/${word}.png`} width={200} height={200} alt={word} />
      <div className='text-white mt-3 text-lg font-extrabold'>{word}</div>
    </div>
  );
};

const FlashCardGaveOver = ({ stats }: PropTypes) => {
  let words = [];
  for (let key in stats) {
    if (stats[key] > 1) {
      words.push(key);
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='text-4xl font-extrabold'>Thanks for Playing!!</div>
      <div className='text-2xl mt-5'>Here are the words you might need a little extra help on</div>
      <div className='grid grid-cols-4 mt-3'>
        {words.map((word, i) => (
          <Card key={i} word={word} />
        ))}
      </div>
    </div>
  );
};

export default FlashCardGaveOver;
