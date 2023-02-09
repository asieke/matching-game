import React from 'react';

type Props = {
  selected: number;
  onChange: (value: number) => void;
};

const MainMenu = ({ selected, onChange }: Props) => {
  const css = 'hover:opacity-75 p-3 w-24 mr-3 rounded-lg text-white ';
  return (
    <div className='fixed z-40 top-0 left-0 w-full p-2 h-[64px] bg-black'>
      <div className='flex flex-row'>
        <button
          onClick={() => onChange(16)}
          className={css + (selected === 16 ? 'bg-blue-500' : 'bg-slate-500')}
        >
          16 Cards
        </button>
        <button
          onClick={() => onChange(24)}
          className={css + (selected === 24 ? 'bg-blue-500' : 'bg-slate-500')}
        >
          24 Cards
        </button>
        <button
          onClick={() => onChange(30)}
          className={css + (selected === 30 ? 'bg-blue-500' : 'bg-slate-500')}
        >
          30 Cards
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
