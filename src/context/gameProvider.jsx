import React, { useState, useEffect, useContext, createContext } from "react";

const gameContext = createContext();

export function useGame() {
  return useContext(gameContext);
}

export const GameProvider = ({ children }) => {
  const [plays, setPlays] = useState([
    { name: "rock", id: 1, className: "rock" },
    { name: "paper", id: 2, className: "paper" },
    { name: "scissors", id: 3, className: "scissors" },
  ]);
  const values = { plays };
  return <gameContext.Provider value={values}>{children}</gameContext.Provider>;
};
