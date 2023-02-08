//create a react component called MatchingGameOver

type Props = {
  stats: {
    matches: number;
    clicks: number;
    startTime: number;
    endTime: number;
  };
};

const MatchingGameOver = ({ stats }: Props) => {
  const { matches, clicks, endTime, startTime } = stats;
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl text-center font-bold'>Game Over</h1>
      <h3>{matches}</h3>
      <h3>{clicks}</h3>
      <h3>{endTime - startTime}</h3>
    </div>
  );
};

export default MatchingGameOver;
