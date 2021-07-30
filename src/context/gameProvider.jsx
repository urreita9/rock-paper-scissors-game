import React, { useState, useEffect, useContext, createContext } from "react";

const gameContext = createContext();

export function useGame() {
  return useContext(gameContext);
}

export const GameProvider = ({ children }) => {
  const [plays, setPlays] = useState([
    { name: "rock", id: 0, className: "rock", src: "images/icon-rock.svg" },
    { name: "paper", id: 1, className: "paper", src: "images/icon-paper.svg" },
    {
      name: "scissors",
      id: 2,
      className: "scissors",
      src: "images/icon-scissors.svg",
    },
  ]);
  const [gameOn, setGameOn] = useState(false);
  const [cpu, setCpu] = useState({});
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("cpu", cpu);
    console.log("user", user);
    // result();
  }, [user, cpu]);

  function getRandomInt(min, max) {
    getHand(Math.floor(Math.random() * (max - min)) + min);
  }
  function getHand(n) {
    console.log(n);
    const cpuPlay = plays.find((play) => play.id === n);
    setCpu(cpuPlay);
  }
  function choosePlay(id) {
    const userPlay = plays.find((play) => play.id === id);
    setUser(userPlay);
  }
  //   function result() {
  //     if (user.name === "rock") {
  //       if (cpu.name === "rock") return setMessage("DRAW");
  //       if (cpu.name === "paper") return setMessage("YOU LOOSE");
  //       if (cpu.name === "scissors") return setMessage("YOU WON");
  //     }
  //     if (user.name === "paper") {
  //       if (cpu.name === "paper") return setMessage("DRAW");
  //       if (cpu.name === "scissors") return setMessage("YOU LOOSE");
  //       if (cpu.name === "rock") return setMessage("YOU WON");
  //     }
  //     if (user.name === "scissors") {
  //       if (cpu.name === "scissors") return setMessage("DRAW");
  //       if (cpu.name === "rock") return setMessage("YOU LOOSE");
  //       if (cpu.name === "paper") return setMessage("YOU WON");
  //     }
  //   }

  const values = {
    plays,
    gameOn,
    setGameOn,
    choosePlay,
    getRandomInt,
    user,
    cpu,
  };
  return <gameContext.Provider value={values}>{children}</gameContext.Provider>;
};
