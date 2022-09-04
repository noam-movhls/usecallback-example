import React from "react";
import { useCallback, useState } from "react";

interface Props {
  name: string;
  handleClick: any;
}

const Button = React.memo(({ handleClick, name }: Props) => {
  console.log(`${name} rendered`);
  return <button onClick={handleClick}>{name}</button>;
});

export const CounterB = () => {
  console.log("counter rendered");
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memoizedSetCountOne = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );

  const memoizedSetCountOne1 = () => console.log("click 1");

  const memoizedSetCountTwo = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );
  return (
    <>
      {countOne} {countTwo}
      <Button handleClick={memoizedSetCountOne1} name="button1" />
      <Button handleClick={memoizedSetCountTwo} name="button2" />
    </>
  );
};
