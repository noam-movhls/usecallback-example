import React, { useCallback, useState } from "react";

interface TProps {
  text: string;
}

const Title = ({ text }: TProps) => {
  return <div>{text}</div>;
};

interface IProps {
  value: string;
  onChange: (val: string) => void;
  onClick: () => void;
}

const Input = ({ value, onChange, onClick }: IProps) => {
  console.log("Input");

  const handleClick = () => {
    onClick();
  };

  return (
    <span>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
      <Button onClick={handleClick} />
    </span>
  );
};

interface BProps {
  onClick: () => void;
}

const Button = ({ onClick }: BProps) => {
  console.log("Button");
  const [click, setClick] = useState(0);

  const handleClick = useCallback(() => {
    setClick(click + 1);
    onClick();
  }, [click, onClick]);

  return <button onClick={handleClick}>{click}</button>;
};

const CompC = () => {
  console.log("Root");
  const [value, setValue] = useState("");

  const onClick = () => {
    console.log("click");
  };

  return (
    <>
      <Title text={value} />
      <Input value={value} onChange={setValue} onClick={onClick} />
    </>
  );
};

export default CompC;
