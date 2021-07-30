import React from "react";
import { Title } from "./Title";
import { Options } from "./Options";
import { useGame } from "../context/gameProvider";
import { Rules } from "./Rules";
import { Button } from "./Button";

export const Container = () => {
  const { gameOn } = useGame();
  return (
    <div className="container">
      <Title />
      <Options />
      {gameOn && <Button text="Play Again" />}
      <Rules />
    </div>
  );
};
