import { useCallback, useState } from "react";

interface Props {
  name: string;
  handleClick: any;
}

const Button = ({ handleClick, name }: Props) => {
  console.log(`${name} rendered`);
  return <button onClick={handleClick}>{name}</button>;
};

interface TProps {
  num1: number;
  num2: number;
}

const Title = ({ num1, num2 }: TProps) => {
  console.log("Title rendered");
  return (
    <div>
      {num1} {num2}
    </div>
  );
};

export const CounterA = () => {
  console.log("counter rendered");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleClick1 = useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);

  return (
    <>
      <Title num1={countOne} num2={countTwo} />
      <Button handleClick={handleClick1} name="button1" />
      <Button handleClick={() => setCountTwo(countTwo + 1)} name="button2" />
    </>
  );
};
