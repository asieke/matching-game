import { CardType } from '../db/db';
import { Howl } from 'howler';

type SoundMap = { [key: string]: Howl };

const getSounds = (cards: CardType[]) => {
  const sounds: SoundMap = {
    flip: new Howl({
      src: ['/sounds/flip.mp3'],
      volume: 0.5,
    }),
    match: new Howl({
      src: ['/sounds/match.mp3'],
    }),
    canyoufind: new Howl({
      src: ['/sounds/canyoufind.mp3'],
    }),
    tryagain: new Howl({
      src: ['/sounds/tryagain.mp3'],
    }),
    awesomejob: new Howl({
      src: ['/sounds/awesomejob.mp3'],
    }),
  };

  for (let i = 0; i < cards.length; i++) {
    let src = '/card-sounds/' + cards[i].audio + '.mp3';
    sounds[cards[i].name] = new Howl({
      src: [src],
    });
  }

  return sounds;
};

export default getSounds;
