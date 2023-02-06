import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto p-10 flex flex-col items-center'>
      <h1 className='text-4xl text-center font-bold'>Welcome to the Game</h1>
      <button className='game-button'>
        <Link href='/matching'>Play Matching Game</Link>
      </button>
      <button className='game-button'>
        <Link href='/flash'>Play Flash Cards</Link>
      </button>
    </div>
  );
}
