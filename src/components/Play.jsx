import React from "react";
import { useGame } from "../context/gameProvider";

export const Play = ({ name, id, className, src }) => {
  const { gameOn, setGameOn, getRandomInt, choosePlay } = useGame();
  return (
    <div
      className={`plays ${
        gameOn ? `${className}__gameOn` : `${className}__position`
      }`}
      onClick={() => {
        if (gameOn) return;
        setGameOn(true);
        getRandomInt(0, 3);
        choosePlay(id, name);
      }}
    >
      <div className="border">
        <img src={src} alt={name} />
      </div>
    </div>
  );
};
