import React from "react";
import { useGame } from "../context/gameProvider";

export const Rules = () => {
  const { handleModal, windowDimensions } = useGame();

  const { width } = windowDimensions;
  return (
    <div className="rules__container">
      {width > 375 ? (
        <div className="rules__title__desktop">
          <h2>RULES</h2>
          <button className="close" onClick={handleModal}>
            <img src="/images/icon-close.svg" alt="" />
          </button>
        </div>
      ) : (
        <h2>RULES</h2>
      )}

      <img src="/images/image-rules.svg" alt="rules" className="rules__img" />
      {width < 376 && (
        <button className="close" onClick={handleModal}>
          <img src="/images/icon-close.svg" alt="" />
        </button>
      )}
    </div>
  );
};
