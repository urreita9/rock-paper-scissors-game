import React from "react";
import { Title } from "./Title";
import { Options } from "./Options";
import { useGame } from "../context/gameProvider";
import { Rules } from "./Rules";
import { Button } from "./Button";

export const Container = () => {
  const { gameOn, handlePlayAgain, handleModal, rulesModal } = useGame();
  return (
    <div className="container">
      <Title />
      <Options />
      {gameOn && (
        <Button
          text="Play Again"
          handleClick={handlePlayAgain}
          className="playAgain"
        />
      )}
      <Button text="Rules" handleClick={handleModal} className="rulesButton" />
      {rulesModal ? <Rules /> : null}
    </div>
  );
};
