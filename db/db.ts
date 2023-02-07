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
    { name: 'the', category: 'sight-words', src: 'sight-words' },
    { name: 'of', category: 'sight-words', src: 'sight-words' },
    { name: 'and', category: 'sight-words', src: 'sight-words' },
    { name: 'a', category: 'sight-words', src: 'sight-words' },
    { name: 'to', category: 'sight-words', src: 'sight-words' },
    { name: 'in', category: 'sight-words', src: 'sight-words' },
    { name: 'that', category: 'sight-words', src: 'sight-words' },
    { name: 'it', category: 'sight-words', src: 'sight-words' },
    { name: 'with', category: 'sight-words', src: 'sight-words' },
    { name: 'as', category: 'sight-words', src: 'sight-words' },
    { name: 'for', category: 'sight-words', src: 'sight-words' },
    { name: 'was', category: 'sight-words', src: 'sight-words' },
    { name: 'on', category: 'sight-words', src: 'sight-words' },
    { name: 'are', category: 'sight-words', src: 'sight-words' },
    { name: 'by', category: 'sight-words', src: 'sight-words' },
    { name: 'be', category: 'sight-words', src: 'sight-words' },
    { name: 'this', category: 'sight-words', src: 'sight-words' },
    { name: 'have', category: 'sight-words', src: 'sight-words' },
    { name: 'or', category: 'sight-words', src: 'sight-words' },
    { name: 'they', category: 'sight-words', src: 'sight-words' },
    { name: 'an', category: 'sight-words', src: 'sight-words' },
    { name: 'at', category: 'sight-words', src: 'sight-words' },
    { name: 'one', category: 'sight-words', src: 'sight-words' },
    { name: 'had', category: 'sight-words', src: 'sight-words' },
    { name: 'but', category: 'sight-words', src: 'sight-words' },
    { name: 'not', category: 'sight-words', src: 'sight-words' },
    { name: 'what', category: 'sight-words', src: 'sight-words' },
    { name: 'all', category: 'sight-words', src: 'sight-words' },
    { name: 'were', category: 'sight-words', src: 'sight-words' },
    { name: 'we', category: 'sight-words', src: 'sight-words' },
    { name: 'when', category: 'sight-words', src: 'sight-words' },
    { name: 'your', category: 'sight-words', src: 'sight-words' },
    { name: 'can', category: 'sight-words', src: 'sight-words' },
    { name: 'said', category: 'sight-words', src: 'sight-words' },
    { name: 'there', category: 'sight-words', src: 'sight-words' },
    { name: 'use', category: 'sight-words', src: 'sight-words' },
    { name: 'each', category: 'sight-words', src: 'sight-words' },
    { name: 'which', category: 'sight-words', src: 'sight-words' },
    { name: 'she', category: 'sight-words', src: 'sight-words' },
    { name: 'do', category: 'sight-words', src: 'sight-words' },
    { name: 'how', category: 'sight-words', src: 'sight-words' },
    { name: 'their', category: 'sight-words', src: 'sight-words' },
    { name: 'if', category: 'sight-words', src: 'sight-words' },
    { name: 'will', category: 'sight-words', src: 'sight-words' },
    { name: 'up', category: 'sight-words', src: 'sight-words' },
    { name: 'other', category: 'sight-words', src: 'sight-words' },
    { name: 'about', category: 'sight-words', src: 'sight-words' },
    { name: 'out', category: 'sight-words', src: 'sight-words' },
    { name: 'many', category: 'sight-words', src: 'sight-words' },
    { name: 'a', category: 'lowercase', src: 'A' },
    { name: 'b', category: 'lowercase', src: 'B' },
    { name: 'c', category: 'lowercase', src: 'C' },
    { name: 'd', category: 'lowercase', src: 'D' },
    { name: 'e', category: 'lowercase', src: 'E' },
    { name: 'f', category: 'lowercase', src: 'F' },
    { name: 'g', category: 'lowercase', src: 'G' },
    { name: 'h', category: 'lowercase', src: 'H' },
    { name: 'i', category: 'lowercase', src: 'I' },
    { name: 'j', category: 'lowercase', src: 'J' },
    { name: 'k', category: 'lowercase', src: 'K' },
    { name: 'l', category: 'lowercase', src: 'L' },
    { name: 'm', category: 'lowercase', src: 'M' },
    { name: 'n', category: 'lowercase', src: 'N' },
    { name: 'o', category: 'lowercase', src: 'O' },
    { name: 'p', category: 'lowercase', src: 'P' },
    { name: 'q', category: 'lowercase', src: 'Q' },
    { name: 'r', category: 'lowercase', src: 'R' },
    { name: 's', category: 'lowercase', src: 'S' },
    { name: 't', category: 'lowercase', src: 'T' },
    { name: 'u', category: 'lowercase', src: 'U' },
    { name: 'v', category: 'lowercase', src: 'V' },
    { name: 'w', category: 'lowercase', src: 'W' },
    { name: 'x', category: 'lowercase', src: 'X' },
    { name: 'y', category: 'lowercase', src: 'Y' },
    { name: 'z', category: 'lowercase', src: 'Z' },
    { name: 'A', category: 'uppercase', src: 'A' },
    { name: 'B', category: 'uppercase', src: 'B' },
    { name: 'C', category: 'uppercase', src: 'C' },
    { name: 'D', category: 'uppercase', src: 'D' },
    { name: 'E', category: 'uppercase', src: 'E' },
    { name: 'F', category: 'uppercase', src: 'F' },
    { name: 'G', category: 'uppercase', src: 'G' },
    { name: 'H', category: 'uppercase', src: 'H' },
    { name: 'I', category: 'uppercase', src: 'I' },
    { name: 'J', category: 'uppercase', src: 'J' },
    { name: 'K', category: 'uppercase', src: 'K' },
    { name: 'L', category: 'uppercase', src: 'L' },
    { name: 'M', category: 'uppercase', src: 'M' },
    { name: 'N', category: 'uppercase', src: 'N' },
    { name: 'O', category: 'uppercase', src: 'O' },
    { name: 'P', category: 'uppercase', src: 'P' },
    { name: 'Q', category: 'uppercase', src: 'Q' },
    { name: 'R', category: 'uppercase', src: 'R' },
    { name: 'S', category: 'uppercase', src: 'S' },
    { name: 'T', category: 'uppercase', src: 'T' },
    { name: 'U', category: 'uppercase', src: 'U' },
    { name: 'V', category: 'uppercase', src: 'V' },
    { name: 'W', category: 'uppercase', src: 'W' },
    { name: 'X', category: 'uppercase', src: 'X' },
    { name: 'Y', category: 'uppercase', src: 'Y' },
    { name: 'Z', category: 'uppercase', src: 'Z' },
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
    { name: '18 Wheeler', category: 'vehicles', src: '18Wheeler' },
    { name: 'Ambulance', category: 'vehicles', src: 'Ambulence' },
    { name: 'Backhoe', category: 'vehicles', src: 'Backhoe' },
    { name: 'Bike', category: 'vehicles', src: 'Bike' },
    { name: 'Boat', category: 'vehicles', src: 'Boat' },
    { name: 'Bulldozer', category: 'vehicles', src: 'Bulldozer' },
    { name: 'Bus', category: 'vehicles', src: 'Bus' },
    { name: 'Car', category: 'vehicles', src: 'Car' },
    { name: 'Cement Mixer', category: 'vehicles', src: 'CementMixer' },
    { name: 'Dump Truck', category: 'vehicles', src: 'DumpTruck' },
    { name: 'Excavator', category: 'vehicles', src: 'Excavator' },
    { name: 'Fire Truck', category: 'vehicles', src: 'FireTruck' },
    { name: 'Helicopter', category: 'vehicles', src: 'Helicopter' },
    { name: 'Hot Air Balloon', category: 'vehicles', src: 'HotAirBalloon' },
    { name: 'Little Blue Truck', category: 'vehicles', src: 'LittleBlueTruck' },
    { name: 'Plane', category: 'vehicles', src: 'Plane' },
    { name: 'Police Car', category: 'vehicles', src: 'PoliceCar' },
    { name: 'Race Car', category: 'vehicles', src: 'RaceCar' },
    { name: 'Spaceship', category: 'vehicles', src: 'SpaceShip' },
    { name: 'Submarine', category: 'vehicles', src: 'Submarine' },
    { name: 'Train', category: 'vehicles', src: 'Train' },
    { name: 'Trash Truck', category: 'vehicles', src: 'TrashTruck' },
  ],
  getImgSrc: (name) => {
    const item = db.data.find((item) => item.name === name);
    if (item) {
      return '/card-images/' + item.src + '.png';
    } else {
      return '/card-images/A.png';
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
