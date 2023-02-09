import Image from 'next/image';
import { GameType } from '../db/db';

interface TileProps {
  game: GameType;
  onClick: () => void;
}

const Tile = ({ game, onClick }: TileProps) => {
  const src = '/images/' + game.img + '.png';
  //if game contains m- then it is a matching game
  const bg = game.type === 'flashcards' ? 'bg-slate-700' : 'bg-red-700';

  return (
    <div
      onClick={onClick}
      className={`p-4 ${bg} rounded-md text-center m-4 hover:bg-black hover:cursor-pointer relative`}
    >
      <Image src={src} alt={game.label} height={480} width={320} priority />
      <p className='text-white mt-2 text-base font-extrabold'>{game.label}</p>
      <p className='text-white text-sm'>{game.type}</p>
    </div>
  );
};

export default Tile;
