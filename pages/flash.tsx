import FlashCardGame from '@/components/FlashCardGame';

type FlashProps = {
  //initial deck is an array of objects that have two properties name: [string], and class: [string]
  initialDeck: { name: string; class: string }[];
};

const Flash = ({ initialDeck }: FlashProps) => {
  return <FlashCardGame initialDeck={initialDeck} />;
};

export default Flash;

//get server side props
export async function getServerSideProps(context: any) {
  return {
    props: {
      initialDeck: [
        { name: 'Cat', class: 'bottom' },
        { name: 'Cow', class: 'bottom' },
        { name: 'Duck', class: 'bottom' },
        { name: 'Lizard', class: 'bottom' },
        { name: 'Pig', class: 'bottom' },
        { name: 'Rabbit', class: 'bottom' },
        { name: 'Lion', class: 'bottom' },
        { name: 'Snake', class: 'bottom' },
        { name: 'Chicken', class: 'bottom' },
        { name: 'Elephant', class: 'bottom' },
        { name: 'Tiger', class: 'twoback' },
        { name: 'Dog', class: 'oneback' },
        { name: 'Monkey', class: 'top' },
      ],
    },
  };
}
