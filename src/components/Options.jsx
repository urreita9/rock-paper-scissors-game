import React from "react";
import { useGame } from "../context/gameProvider";
import { Play } from "./Play";

export const Options = () => {
  const { plays } = useGame();
  return (
    <div className="options__container">
      <div>
        <img
          src="images/bg-triangle.svg"
          alt="triangle-backgroung"
          className="triangle"
        />
      </div>
      {plays.map(({ name, id, className }, index) => {
        return <Play key={index} name={name} id={id} className={className} />;
      })}
    </div>
  );
};
