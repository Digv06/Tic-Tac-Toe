import React from "react";
import "./style.css";

interface blockProps {
  value?: string | "";
  onClick?: () => void;
}

const Block: React.FC<blockProps> = (props) => {
  return (
    <div onClick={props.onClick} className="block">
      {props.value}
    </div>
  );
};

export default Block;
