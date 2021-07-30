import React from "react";
import { useGame } from "../context/gameProvider";
import { Play } from "./Play";
import { Game } from "./Game";

export const Options = () => {
  const { plays, gameOn } = useGame();
  return (
    <div className="options__container">
      {gameOn || (
        <div>
          <img
            src="images/bg-triangle.svg"
            alt="triangle-backgroung"
            className="triangle"
          />
        </div>
      )}
      {gameOn ? (
        <Game />
      ) : (
        plays.map(({ name, id, className, src }, index) => {
          return (
            <Play
              key={index}
              name={name}
              id={id}
              className={className}
              src={src}
            />
          );
        })
      )}
    </div>
  );
};
