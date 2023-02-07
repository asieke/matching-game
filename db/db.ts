//create a type for db

type DBType = {
  data: {
    name: string;
    category: string;
    src: string;
  }[];
  getImgSrc: (name: string) => string;
  getRandom: (num: number, category: string) => string[];
  getMatchingCards: (num: number, category: string) => string[];
};

const db: DBType = {
  data: [
    { name: 'a', category: 'letters-lowercase', src: 'A' },
    { name: 'b', category: 'letters-lowercase', src: 'B' },
    { name: 'c', category: 'letters-lowercase', src: 'C' },
    { name: 'd', category: 'letters-lowercase', src: 'D' },
    { name: 'e', category: 'letters-lowercase', src: 'E' },
    { name: 'f', category: 'letters-lowercase', src: 'F' },
    { name: 'g', category: 'letters-lowercase', src: 'G' },
    { name: 'h', category: 'letters-lowercase', src: 'H' },
    { name: 'i', category: 'letters-lowercase', src: 'I' },
    { name: 'j', category: 'letters-lowercase', src: 'J' },
    { name: 'k', category: 'letters-lowercase', src: 'K' },
    { name: 'l', category: 'letters-lowercase', src: 'L' },
    { name: 'm', category: 'letters-lowercase', src: 'M' },
    { name: 'n', category: 'letters-lowercase', src: 'N' },
    { name: 'o', category: 'letters-lowercase', src: 'O' },
    { name: 'p', category: 'letters-lowercase', src: 'P' },
    { name: 'q', category: 'letters-lowercase', src: 'Q' },
    { name: 'r', category: 'letters-lowercase', src: 'R' },
    { name: 's', category: 'letters-lowercase', src: 'S' },
    { name: 't', category: 'letters-lowercase', src: 'T' },
    { name: 'u', category: 'letters-lowercase', src: 'U' },
    { name: 'v', category: 'letters-lowercase', src: 'V' },
    { name: 'w', category: 'letters-lowercase', src: 'W' },
    { name: 'x', category: 'letters-lowercase', src: 'X' },
    { name: 'y', category: 'letters-lowercase', src: 'Y' },
    { name: 'z', category: 'letters-lowercase', src: 'Z' },
    { name: 'A', category: 'letters', src: 'A' },
    { name: 'B', category: 'letters', src: 'B' },
    { name: 'C', category: 'letters', src: 'C' },
    { name: 'D', category: 'letters', src: 'D' },
    { name: 'E', category: 'letters', src: 'E' },
    { name: 'F', category: 'letters', src: 'F' },
    { name: 'G', category: 'letters', src: 'G' },
    { name: 'H', category: 'letters', src: 'H' },
    { name: 'I', category: 'letters', src: 'I' },
    { name: 'J', category: 'letters', src: 'J' },
    { name: 'K', category: 'letters', src: 'K' },
    { name: 'L', category: 'letters', src: 'L' },
    { name: 'M', category: 'letters', src: 'M' },
    { name: 'N', category: 'letters', src: 'N' },
    { name: 'O', category: 'letters', src: 'O' },
    { name: 'P', category: 'letters', src: 'P' },
    { name: 'Q', category: 'letters', src: 'Q' },
    { name: 'R', category: 'letters', src: 'R' },
    { name: 'S', category: 'letters', src: 'S' },
    { name: 'T', category: 'letters', src: 'T' },
    { name: 'U', category: 'letters', src: 'U' },
    { name: 'V', category: 'letters', src: 'V' },
    { name: 'W', category: 'letters', src: 'W' },
    { name: 'X', category: 'letters', src: 'X' },
    { name: 'Y', category: 'letters', src: 'Y' },
    { name: 'Z', category: 'letters', src: 'Z' },
    { name: '0', category: 'numbers', src: 'numbers' },
    { name: '1', category: 'numbers', src: 'numbers' },
    { name: '2', category: 'numbers', src: 'numbers' },
    { name: '3', category: 'numbers', src: 'numbers' },
    { name: '4', category: 'numbers', src: 'numbers' },
    { name: '5', category: 'numbers', src: 'numbers' },
    { name: '6', category: 'numbers', src: 'numbers' },
    { name: '7', category: 'numbers', src: 'numbers' },
    { name: '8', category: 'numbers', src: 'numbers' },
    { name: '9', category: 'numbers', src: 'numbers' },
    { name: '10', category: 'numbers', src: 'numbers' },
    { name: '11', category: 'numbers', src: 'numbers' },
    { name: '12', category: 'numbers', src: 'numbers' },
    { name: '13', category: 'numbers', src: 'numbers' },
    { name: '14', category: 'numbers', src: 'numbers' },
    { name: '15', category: 'numbers', src: 'numbers' },
    { name: '16', category: 'numbers', src: 'numbers' },
    { name: '17', category: 'numbers', src: 'numbers' },
    { name: '18', category: 'numbers', src: 'numbers' },
    { name: '19', category: 'numbers', src: 'numbers' },
    { name: '20', category: 'numbers', src: 'numbers' },
    { name: 'Ant', category: 'animals', src: 'Ant' },
    { name: 'Bear', category: 'animals', src: 'Bear' },
    { name: 'Bee', category: 'animals', src: 'Bee' },
    { name: 'Bird', category: 'animals', src: 'Bird' },
    { name: 'Butterfly', category: 'animals', src: 'Butterfly' },
    { name: 'Cat', category: 'animals', src: 'Cat' },
    { name: 'Chicken', category: 'animals', src: 'Chicken' },
    { name: 'Cow', category: 'animals', src: 'Cow' },
    { name: 'Deer', category: 'animals', src: 'Deer' },
    { name: 'Dog', category: 'animals', src: 'Dog' },
    { name: 'Duck', category: 'animals', src: 'Duck' },
    { name: 'Elephant', category: 'animals', src: 'Elephant' },
    { name: 'Fish', category: 'animals', src: 'Fish' },
    { name: 'Frog', category: 'animals', src: 'Frog' },
    { name: 'Hippo', category: 'animals', src: 'Hippo' },
    { name: 'Horse', category: 'animals', src: 'Horse' },
    { name: 'Lion', category: 'animals', src: 'Lion' },
    { name: 'Monkey', category: 'animals', src: 'Monkey' },
    { name: 'Rabbit', category: 'animals', src: 'Rabbit' },
    { name: 'Snake', category: 'animals', src: 'Snake' },
    { name: 'Tiger', category: 'animals', src: 'Tiger' },
    { name: 'Turtle', category: 'animals', src: 'T' },
    { name: 'Zebra', category: 'animals', src: 'Z' },
    { name: 'Octopus', category: 'animals', src: 'O' },
    { name: 'Pig', category: 'animals', src: 'Pig' },
    { name: 'Black', category: 'colors', src: 'black' },
    { name: 'Blue', category: 'colors', src: 'blue' },
    { name: 'Brown', category: 'colors', src: 'brown' },
    { name: 'Green', category: 'colors', src: 'green' },
    { name: 'Purple', category: 'colors', src: 'purple' },
    { name: 'Red', category: 'colors', src: 'red' },
    { name: 'White', category: 'colors', src: 'white' },
    { name: 'Yellow', category: 'colors', src: 'yellow' },
    { name: 'Orange', category: 'colors', src: 'orange' },
  ],
  getImgSrc: (name) => {
    const item = db.data.find((item) => item.name === name);
    if (item) {
      return 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1/flashcards_small/' + item.src;
    } else {
      return 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1/flashcards_small/A';
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
      out.push(items[randArray[i]].name);
    }
    return out;
  },
  getMatchingCards: (num, category) => {
    const values = db.getRandom(num, category);
    console.log(values);
    return [...values, ...values].sort(() => Math.random() - 0.5);
  },
};

export default db;
