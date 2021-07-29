import React from "react";

export const Play = ({ name, id, className }) => {
  return (
    <div className={`plays ${className}`}>
      <div className="border">
        {name === "rock" ? <img src="images/icon-rock.svg" alt="rock" /> : null}
        {name === "paper" ? (
          <img src="images/icon-paper.svg" alt="paper" />
        ) : null}
        {name === "scissors" ? (
          <img src="images/icon-scissors.svg" alt="scissors" />
        ) : null}
      </div>
    </div>
  );
};
