import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto p-10 flex flex-col items-center'>
      <h1 className='text-4xl text-center font-bold'>Welcome to the Game</h1>
      <button className='bg-blue-500 hover:bg-blue-400 rounded-full p-3 shadow-lg text-white text-xl mt-10'>
        <Link href='/matching'>Play Game</Link>
      </button>
    </div>
  );
}
