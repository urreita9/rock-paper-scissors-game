import React from "react";
import { useGame } from "../context/gameProvider";

export const Button = ({ text }) => {
  const { setGameOn } = useGame();
  return (
    <div className="playAgain" onClick={() => setGameOn(false)}>
      {text}
    </div>
  );
};
