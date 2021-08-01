import React from "react";
import { useGame } from "../context/gameProvider";

export const Rules = () => {
  const { handleModal } = useGame();
  return (
    <div className="rules__container">
      <h2>RULES</h2>
      <img src="/images/image-rules.svg" alt="rules" className="rules__img" />
      <button className="close" onClick={handleModal}>
        <img src="/images/icon-close.svg" alt="" />
      </button>
    </div>
  );
};
