import { title } from "process";
import React, { useCallback, useMemo, useState } from "react";

interface ListItemProps {
  title: string;
  onClick: (str: string) => void;
}

const ItemList = ({ title, onClick }: ListItemProps) => {
  console.log("item", title);

  const handleClick = useCallback(() => {
    onClick(title);
  }, [title, onClick]);

  return (
    <div
      style={{ width: "100px", backgroundColor: "#ddd" }}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

const CompD = () => {
  const list: string[] = useMemo(() => ["a", "b", "c"], []);
  const [click, setClick] = useState(0);

  console.log("root");

  const onClick = useCallback((str: string) => {
    console.log("click", str);
  }, []);

  return (
    <div>
      {list.map((item) => (
        <ItemList title={item} onClick={onClick} />
      ))}
    </div>
  );
};

export default CompD;
