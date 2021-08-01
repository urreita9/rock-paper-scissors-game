import React from "react";
import { useGame } from "../context/gameProvider";

export const Button = ({ text, handleClick, className }) => {
  const { message } = useGame();
  return (
    <>
      {text === "Play Again" ? <div className="message">{message}</div> : null}
      <div className={className} onClick={handleClick}>
        {text}
      </div>
    </>
  );
};
