import React from "react";
import { useGame } from "../context/gameProvider";
import { Play } from "./Play";

export const Game = () => {
  const { user, cpu } = useGame();
  return (
    <>
      <div className="game__container">
        <div className="game__side">
          <Play {...user} />
          <div className="game__picks">
            <p>You Picked</p>
          </div>
        </div>

        <div className="game__side">
          <Play {...cpu} />
          <div className="game__picks">
            <p>The House Picked</p>
          </div>
        </div>
      </div>
    </>
  );
};
