import React from "react";

export const Title = () => {
  return (
    <div className="title__container">
      <div className="title__left">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="title__right">
        <p>SCORE</p>
        <span>12</span>
      </div>
    </div>
  );
};
