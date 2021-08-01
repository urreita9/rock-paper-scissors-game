import React from "react";
import { useGame } from "../context/gameProvider";

export const Title = () => {
  const { score } = useGame();
  return (
    <div className="title__container">
      <div className="title__left">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="title__right">
        <p>SCORE</p>
        <span>{score}</span>
      </div>
    </div>
  );
};
