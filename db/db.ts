//create a type for db

export type CardType = {
  name: string;
  category: string;
  src: string;
  audio: string;
};

export type GameType = {
  category: string;
  label: string;
  img: string;
  type: string;
  wordsOnly: boolean;
};

type Database = {
  data: CardType[];
  games: GameType[];
  getImgSrc: (name: string) => string;
  getAudioSrc: (name: string) => string;
  getRandom: (num: number, category: string) => CardType[];
  getRandomMatching: (num: number, category: string) => CardType[];
};

const db: Database = {
  games: [
    {
      label: 'Pre-K Sight Words',
      category: 'pre-k-sight-words',
      type: 'flashcards',
      img: 'pre-k-sight',
      wordsOnly: false,
    },
    {
      label: 'Sight Words',
      category: 'sight-words',
      type: 'flashcards',
      img: 'sight-words',
      wordsOnly: false,
    },
    { label: 'Animals', category: 'animals', type: 'flashcards', img: 'animals', wordsOnly: false },
    { label: 'Colors', category: 'colors', type: 'flashcards', img: 'colors', wordsOnly: false },
    {
      label: 'Uppercase',
      category: 'uppercase',
      type: 'flashcards',
      img: 'uppercase',
      wordsOnly: false,
    },
    {
      label: 'Lowercase',
      category: 'lowercase',
      type: 'flashcards',
      img: 'lowercase',
      wordsOnly: false,
    },
    { label: 'Numbers', category: 'numbers', type: 'flashcards', img: 'numbers', wordsOnly: false },
    //Matching Games
    {
      label: 'Pre-K Sight Words',
      category: 'pre-k-sight-words',
      type: 'matching',
      img: 'pre-k-sight',
      wordsOnly: false,
    },
    {
      label: 'Sight Words',
      category: 'sight-words',
      type: 'matching',
      img: 'sight-words',
      wordsOnly: false,
    },
    { label: 'Animals', category: 'animals', type: 'matching', img: 'animals', wordsOnly: false },
    { label: 'Colors', category: 'colors', type: 'matching', img: 'colors', wordsOnly: false },
    {
      label: 'Uppercase',
      category: 'uppercase',
      type: 'matching',
      img: 'uppercase',
      wordsOnly: false,
    },
    {
      label: 'Lowercase',
      category: 'lowercase',
      type: 'matching',
      img: 'lowercase',
      wordsOnly: false,
    },
    { label: 'Numbers', category: 'numbers', type: 'matching', img: 'numbers', wordsOnly: false },
  ],
  data: [
    { name: 'a', category: 'pre-k-sight-words', src: 'sight-words', audio: 'a' },
    { name: 'and', category: 'pre-k-sight-words', src: 'sight-words', audio: 'and' },
    { name: 'away', category: 'pre-k-sight-words', src: 'sight-words', audio: 'away' },
    { name: 'big', category: 'pre-k-sight-words', src: 'sight-words', audio: 'big' },
    { name: 'blue', category: 'pre-k-sight-words', src: 'sight-words', audio: 'blue' },
    { name: 'can', category: 'pre-k-sight-words', src: 'sight-words', audio: 'can' },
    { name: 'come', category: 'pre-k-sight-words', src: 'sight-words', audio: 'come' },
    { name: 'down', category: 'pre-k-sight-words', src: 'sight-words', audio: 'down' },
    { name: 'find', category: 'pre-k-sight-words', src: 'sight-words', audio: 'find' },
    { name: 'for', category: 'pre-k-sight-words', src: 'sight-words', audio: 'for' },
    { name: 'funny', category: 'pre-k-sight-words', src: 'sight-words', audio: 'funny' },
    { name: 'go', category: 'pre-k-sight-words', src: 'sight-words', audio: 'go' },
    { name: 'help', category: 'pre-k-sight-words', src: 'sight-words', audio: 'help' },
    { name: 'here', category: 'pre-k-sight-words', src: 'sight-words', audio: 'here' },
    { name: 'I', category: 'pre-k-sight-words', src: 'sight-words', audio: 'I' },
    { name: 'in', category: 'pre-k-sight-words', src: 'sight-words', audio: 'in' },
    { name: 'is', category: 'pre-k-sight-words', src: 'sight-words', audio: 'is' },
    { name: 'it', category: 'pre-k-sight-words', src: 'sight-words', audio: 'it' },
    { name: 'jump', category: 'pre-k-sight-words', src: 'sight-words', audio: 'jump' },
    { name: 'little', category: 'pre-k-sight-words', src: 'sight-words', audio: 'little' },
    { name: 'look', category: 'pre-k-sight-words', src: 'sight-words', audio: 'look' },
    { name: 'make', category: 'pre-k-sight-words', src: 'sight-words', audio: 'make' },
    { name: 'me', category: 'pre-k-sight-words', src: 'sight-words', audio: 'me' },
    { name: 'my', category: 'pre-k-sight-words', src: 'sight-words', audio: 'my' },
    { name: 'not', category: 'pre-k-sight-words', src: 'sight-words', audio: 'not' },
    { name: 'one', category: 'pre-k-sight-words', src: 'sight-words', audio: 'one' },
    { name: 'play', category: 'pre-k-sight-words', src: 'sight-words', audio: 'play' },
    { name: 'red', category: 'pre-k-sight-words', src: 'sight-words', audio: 'red' },
    { name: 'run', category: 'pre-k-sight-words', src: 'sight-words', audio: 'run' },
    { name: 'said', category: 'pre-k-sight-words', src: 'sight-words', audio: 'said' },
    { name: 'see', category: 'pre-k-sight-words', src: 'sight-words', audio: 'see' },
    { name: 'the', category: 'pre-k-sight-words', src: 'sight-words', audio: 'the' },
    { name: 'three', category: 'pre-k-sight-words', src: 'sight-words', audio: 'three' },
    { name: 'to', category: 'pre-k-sight-words', src: 'sight-words', audio: 'to' },
    { name: 'two', category: 'pre-k-sight-words', src: 'sight-words', audio: 'two' },
    { name: 'up', category: 'pre-k-sight-words', src: 'sight-words', audio: 'up' },
    { name: 'we', category: 'pre-k-sight-words', src: 'sight-words', audio: 'we' },
    { name: 'where', category: 'pre-k-sight-words', src: 'sight-words', audio: 'where' },
    { name: 'yellow', category: 'pre-k-sight-words', src: 'sight-words', audio: 'yellow' },
    { name: 'you', category: 'pre-k-sight-words', src: 'sight-words', audio: 'you' },
    { name: 'the', category: 'sight-words', src: 'sight-words', audio: 'the' },
    { name: 'of', category: 'sight-words', src: 'sight-words', audio: 'of' },
    { name: 'and', category: 'sight-words', src: 'sight-words', audio: 'and' },
    { name: 'to', category: 'sight-words', src: 'sight-words', audio: 'to' },
    { name: 'in', category: 'sight-words', src: 'sight-words', audio: 'in' },
    { name: 'that', category: 'sight-words', src: 'sight-words', audio: 'that' },
    { name: 'it', category: 'sight-words', src: 'sight-words', audio: 'it' },
    { name: 'with', category: 'sight-words', src: 'sight-words', audio: 'with' },
    { name: 'as', category: 'sight-words', src: 'sight-words', audio: 'as' },
    { name: 'for', category: 'sight-words', src: 'sight-words', audio: 'for' },
    { name: 'was', category: 'sight-words', src: 'sight-words', audio: 'was' },
    { name: 'on', category: 'sight-words', src: 'sight-words', audio: 'on' },
    { name: 'are', category: 'sight-words', src: 'sight-words', audio: 'are' },
    { name: 'by', category: 'sight-words', src: 'sight-words', audio: 'by' },
    { name: 'be', category: 'sight-words', src: 'sight-words', audio: 'be' },
    { name: 'this', category: 'sight-words', src: 'sight-words', audio: 'this' },
    { name: 'have', category: 'sight-words', src: 'sight-words', audio: 'have' },
    { name: 'or', category: 'sight-words', src: 'sight-words', audio: 'or' },
    { name: 'they', category: 'sight-words', src: 'sight-words', audio: 'they' },
    { name: 'an', category: 'sight-words', src: 'sight-words', audio: 'an' },
    { name: 'at', category: 'sight-words', src: 'sight-words', audio: 'at' },
    { name: 'one', category: 'sight-words', src: 'sight-words', audio: 'one' },
    { name: 'had', category: 'sight-words', src: 'sight-words', audio: 'had' },
    { name: 'but', category: 'sight-words', src: 'sight-words', audio: 'but' },
    { name: 'not', category: 'sight-words', src: 'sight-words', audio: 'not' },
    { name: 'what', category: 'sight-words', src: 'sight-words', audio: 'what' },
    { name: 'all', category: 'sight-words', src: 'sight-words', audio: 'all' },
    { name: 'were', category: 'sight-words', src: 'sight-words', audio: 'were' },
    { name: 'we', category: 'sight-words', src: 'sight-words', audio: 'we' },
    { name: 'when', category: 'sight-words', src: 'sight-words', audio: 'when' },
    { name: 'your', category: 'sight-words', src: 'sight-words', audio: 'your' },
    { name: 'can', category: 'sight-words', src: 'sight-words', audio: 'can' },
    { name: 'said', category: 'sight-words', src: 'sight-words', audio: 'said' },
    { name: 'there', category: 'sight-words', src: 'sight-words', audio: 'there' },
    { name: 'use', category: 'sight-words', src: 'sight-words', audio: 'use' },
    { name: 'each', category: 'sight-words', src: 'sight-words', audio: 'each' },
    { name: 'which', category: 'sight-words', src: 'sight-words', audio: 'which' },
    { name: 'she', category: 'sight-words', src: 'sight-words', audio: 'she' },
    { name: 'do', category: 'sight-words', src: 'sight-words', audio: 'do' },
    { name: 'how', category: 'sight-words', src: 'sight-words', audio: 'how' },
    { name: 'their', category: 'sight-words', src: 'sight-words', audio: 'their' },
    { name: 'if', category: 'sight-words', src: 'sight-words', audio: 'if' },
    { name: 'will', category: 'sight-words', src: 'sight-words', audio: 'will' },
    { name: 'up', category: 'sight-words', src: 'sight-words', audio: 'up' },
    { name: 'other', category: 'sight-words', src: 'sight-words', audio: 'other' },
    { name: 'about', category: 'sight-words', src: 'sight-words', audio: 'about' },
    { name: 'out', category: 'sight-words', src: 'sight-words', audio: 'out' },
    { name: 'many', category: 'sight-words', src: 'sight-words', audio: 'many' },
    { name: 'a', category: 'lowercase', src: 'A', audio: 'A' },
    { name: 'b', category: 'lowercase', src: 'B', audio: 'B' },
    { name: 'c', category: 'lowercase', src: 'C', audio: 'C' },
    { name: 'd', category: 'lowercase', src: 'D', audio: 'D' },
    { name: 'e', category: 'lowercase', src: 'E', audio: 'E' },
    { name: 'f', category: 'lowercase', src: 'F', audio: 'F' },
    { name: 'g', category: 'lowercase', src: 'G', audio: 'G' },
    { name: 'h', category: 'lowercase', src: 'H', audio: 'H' },
    { name: 'i', category: 'lowercase', src: 'I', audio: 'I' },
    { name: 'j', category: 'lowercase', src: 'J', audio: 'J' },
    { name: 'k', category: 'lowercase', src: 'K', audio: 'K' },
    { name: 'l', category: 'lowercase', src: 'L', audio: 'L' },
    { name: 'm', category: 'lowercase', src: 'M', audio: 'M' },
    { name: 'n', category: 'lowercase', src: 'N', audio: 'N' },
    { name: 'o', category: 'lowercase', src: 'O', audio: 'O' },
    { name: 'p', category: 'lowercase', src: 'P', audio: 'P' },
    { name: 'q', category: 'lowercase', src: 'Q', audio: 'Q' },
    { name: 'r', category: 'lowercase', src: 'R', audio: 'R' },
    { name: 's', category: 'lowercase', src: 'S', audio: 'S' },
    { name: 't', category: 'lowercase', src: 'T', audio: 'T' },
    { name: 'u', category: 'lowercase', src: 'U', audio: 'U' },
    { name: 'v', category: 'lowercase', src: 'V', audio: 'V' },
    { name: 'w', category: 'lowercase', src: 'W', audio: 'W' },
    { name: 'x', category: 'lowercase', src: 'X', audio: 'X' },
    { name: 'y', category: 'lowercase', src: 'Y', audio: 'Y' },
    { name: 'z', category: 'lowercase', src: 'Z', audio: 'Z' },
    { name: 'A', category: 'uppercase', src: 'A', audio: 'A' },
    { name: 'B', category: 'uppercase', src: 'B', audio: 'B' },
    { name: 'C', category: 'uppercase', src: 'C', audio: 'C' },
    { name: 'D', category: 'uppercase', src: 'D', audio: 'D' },
    { name: 'E', category: 'uppercase', src: 'E', audio: 'E' },
    { name: 'F', category: 'uppercase', src: 'F', audio: 'F' },
    { name: 'G', category: 'uppercase', src: 'G', audio: 'G' },
    { name: 'H', category: 'uppercase', src: 'H', audio: 'H' },
    { name: 'I', category: 'uppercase', src: 'I', audio: 'I' },
    { name: 'J', category: 'uppercase', src: 'J', audio: 'J' },
    { name: 'K', category: 'uppercase', src: 'K', audio: 'K' },
    { name: 'L', category: 'uppercase', src: 'L', audio: 'L' },
    { name: 'M', category: 'uppercase', src: 'M', audio: 'M' },
    { name: 'N', category: 'uppercase', src: 'N', audio: 'N' },
    { name: 'O', category: 'uppercase', src: 'O', audio: 'O' },
    { name: 'P', category: 'uppercase', src: 'P', audio: 'P' },
    { name: 'Q', category: 'uppercase', src: 'Q', audio: 'Q' },
    { name: 'R', category: 'uppercase', src: 'R', audio: 'R' },
    { name: 'S', category: 'uppercase', src: 'S', audio: 'S' },
    { name: 'T', category: 'uppercase', src: 'T', audio: 'T' },
    { name: 'U', category: 'uppercase', src: 'U', audio: 'U' },
    { name: 'V', category: 'uppercase', src: 'V', audio: 'V' },
    { name: 'W', category: 'uppercase', src: 'W', audio: 'W' },
    { name: 'X', category: 'uppercase', src: 'X', audio: 'X' },
    { name: 'Y', category: 'uppercase', src: 'Y', audio: 'Y' },
    { name: 'Z', category: 'uppercase', src: 'Z', audio: 'Z' },
    { name: '0', category: 'numbers', src: 'numbers', audio: '0' },
    { name: '1', category: 'numbers', src: 'numbers', audio: '1' },
    { name: '2', category: 'numbers', src: 'numbers', audio: '2' },
    { name: '3', category: 'numbers', src: 'numbers', audio: '3' },
    { name: '4', category: 'numbers', src: 'numbers', audio: '4' },
    { name: '5', category: 'numbers', src: 'numbers', audio: '5' },
    { name: '6', category: 'numbers', src: 'numbers', audio: '6' },
    { name: '7', category: 'numbers', src: 'numbers', audio: '7' },
    { name: '8', category: 'numbers', src: 'numbers', audio: '8' },
    { name: '9', category: 'numbers', src: 'numbers', audio: '9' },
    { name: '10', category: 'numbers', src: 'numbers', audio: '10' },
    { name: '11', category: 'numbers', src: 'numbers', audio: '11' },
    { name: '12', category: 'numbers', src: 'numbers', audio: '12' },
    { name: '13', category: 'numbers', src: 'numbers', audio: '13' },
    { name: '14', category: 'numbers', src: 'numbers', audio: '14' },
    { name: '15', category: 'numbers', src: 'numbers', audio: '15' },
    { name: '16', category: 'numbers', src: 'numbers', audio: '16' },
    { name: '17', category: 'numbers', src: 'numbers', audio: '17' },
    { name: '18', category: 'numbers', src: 'numbers', audio: '18' },
    { name: '19', category: 'numbers', src: 'numbers', audio: '19' },
    { name: '20', category: 'numbers', src: 'numbers', audio: '20' },
    { name: 'Ant', category: 'animals', src: 'Ant', audio: 'Ant' },
    { name: 'Bear', category: 'animals', src: 'Bear', audio: 'Bear' },
    { name: 'Bee', category: 'animals', src: 'Bee', audio: 'Bee' },
    { name: 'Bird', category: 'animals', src: 'Bird', audio: 'Bird' },
    { name: 'Butterfly', category: 'animals', src: 'Butterfly', audio: 'Butterfly' },
    { name: 'Cat', category: 'animals', src: 'Cat', audio: 'Cat' },
    { name: 'Chicken', category: 'animals', src: 'Chicken', audio: 'Chicken' },
    { name: 'Cow', category: 'animals', src: 'Cow', audio: 'Cow' },
    { name: 'Deer', category: 'animals', src: 'Deer', audio: 'Deer' },
    { name: 'Dog', category: 'animals', src: 'Dog', audio: 'Dog' },
    { name: 'Duck', category: 'animals', src: 'Duck', audio: 'Duck' },
    { name: 'Elephant', category: 'animals', src: 'Elephant', audio: 'Elephant' },
    { name: 'Fish', category: 'animals', src: 'Fish', audio: 'Fish' },
    { name: 'Frog', category: 'animals', src: 'Frog', audio: 'Frog' },
    { name: 'Hippo', category: 'animals', src: 'Hippo', audio: 'Hippo' },
    { name: 'Horse', category: 'animals', src: 'Horse', audio: 'Horse' },
    { name: 'Lion', category: 'animals', src: 'Lion', audio: 'Lion' },
    { name: 'Monkey', category: 'animals', src: 'Monkey', audio: 'Monkey' },
    { name: 'Rabbit', category: 'animals', src: 'Rabbit', audio: 'Rabbit' },
    { name: 'Snake', category: 'animals', src: 'Snake', audio: 'Snake' },
    { name: 'Tiger', category: 'animals', src: 'Tiger', audio: 'Tiger' },
    { name: 'Turtle', category: 'animals', src: 'T', audio: 'Turtle' },
    { name: 'Zebra', category: 'animals', src: 'Z', audio: 'Zebra' },
    { name: 'Octopus', category: 'animals', src: 'O', audio: 'Octopus' },
    { name: 'Pig', category: 'animals', src: 'Pig', audio: 'Pig' },
    { name: 'Black', category: 'colors', src: 'black', audio: 'Black' },
    { name: 'Blue', category: 'colors', src: 'blue', audio: 'Blue' },
    { name: 'Brown', category: 'colors', src: 'brown', audio: 'Brown' },
    { name: 'Green', category: 'colors', src: 'green', audio: 'Green' },
    { name: 'Purple', category: 'colors', src: 'purple', audio: 'Purple' },
    { name: 'Red', category: 'colors', src: 'red', audio: 'Red' },
    { name: 'White', category: 'colors', src: 'white', audio: 'White' },
    { name: 'Yellow', category: 'colors', src: 'yellow', audio: 'Yellow' },
    { name: 'Orange', category: 'colors', src: 'orange', audio: 'Orange' },
    { name: '18 Wheeler', category: 'vehicles', src: '18Wheeler', audio: '18 Wheeler' },
    { name: 'Ambulance', category: 'vehicles', src: 'Ambulence', audio: 'Ambulance' },
    { name: 'Backhoe', category: 'vehicles', src: 'Backhoe', audio: 'Backhoe' },
    { name: 'Bike', category: 'vehicles', src: 'Bike', audio: 'Bike' },
    { name: 'Boat', category: 'vehicles', src: 'Boat', audio: 'Boat' },
    { name: 'Bulldozer', category: 'vehicles', src: 'Bulldozer', audio: 'Bulldozer' },
    { name: 'Bus', category: 'vehicles', src: 'Bus', audio: 'Bus' },
    { name: 'Car', category: 'vehicles', src: 'Car', audio: 'Car' },
    { name: 'Cement Mixer', category: 'vehicles', src: 'CementMixer', audio: 'Cement Mixer' },
    { name: 'Dump Truck', category: 'vehicles', src: 'DumpTruck', audio: 'Dump Truck' },
    { name: 'Excavator', category: 'vehicles', src: 'Excavator', audio: 'Excavator' },
    { name: 'Fire Truck', category: 'vehicles', src: 'FireTruck', audio: 'Fire Truck' },
    { name: 'Helicopter', category: 'vehicles', src: 'Helicopter', audio: 'Helicopter' },
    {
      name: 'Hot Air Balloon',
      category: 'vehicles',
      src: 'HotAirBalloon',
      audio: 'Hot Air Balloon',
    },
    {
      name: 'Little Blue Truck',
      category: 'vehicles',
      src: 'LittleBlueTruck',
      audio: 'Little Blue Truck',
    },
    { name: 'Plane', category: 'vehicles', src: 'Plane', audio: 'Plane' },
    { name: 'Police Car', category: 'vehicles', src: 'PoliceCar', audio: 'Police Car' },
    { name: 'Race Car', category: 'vehicles', src: 'RaceCar', audio: 'Race Car' },
    { name: 'Spaceship', category: 'vehicles', src: 'SpaceShip', audio: 'Spaceship' },
    { name: 'Submarine', category: 'vehicles', src: 'Submarine', audio: 'Submarine' },
    { name: 'Train', category: 'vehicles', src: 'Train', audio: 'Train' },
    { name: 'Trash Truck', category: 'vehicles', src: 'TrashTruck', audio: 'Trash Truck' },
  ],
  getImgSrc: (name) => {
    const item = db.data.find((item) => item.name === name);
    if (item) {
      return '/card-images/' + item.src + '.png';
    } else {
      return '/card-images/A.png';
    }
  },
  getAudioSrc: (name) => {
    const item = db.data.find((item) => item.name === name);
    if (item) {
      return '/card-sounds/' + item.audio + '.mp3';
    } else {
      return '/card-sounds/A.mp3';
    }
  },
  getRandom: (num, category) => {
    const items = db.data.filter((item) => item.category === category);

    const n = Math.min(num, items.length);

    const randArray = [];
    for (let i = 0; i < items.length; i++) {
      randArray.push(i);
    }
    randArray.sort(() => Math.random() - 0.5);

    const out = [];
    for (let i = 0; i < n; i++) {
      out.push(items[randArray[i]]);
    }
    return out;
  },
  getRandomMatching: (num, category) => {
    const values = db.getRandom(num / 2, category);
    return [...values, ...values].sort(() => Math.random() - 0.5);
  },
};

export default db;
