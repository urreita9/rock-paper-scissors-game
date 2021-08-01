import React, { useState, useEffect, useContext, createContext } from "react";

const gameContext = createContext();

export function useGame() {
  return useContext(gameContext);
}
const init = JSON.parse(localStorage.getItem("score")) || 0;

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
  const [score, setScore] = useState(init);
  const [rulesModal, setRulesModal] = useState(false);

  useEffect(() => {
    console.log(score);
    console.log(message);
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);
  useEffect(() => {
    result();
  }, [user]);

  function getRandomInt(min, max) {
    getHand(Math.floor(Math.random() * (max - min)) + min);
  }
  function getHand(n) {
    const cpuPlay = plays.find((play) => play.id === n);
    setCpu(cpuPlay);
  }
  function choosePlay(id) {
    const userPlay = plays.find((play) => play.id === id);
    setUser(userPlay);
    // result();
  }
  function result() {
    if (user.name === "rock") {
      if (cpu.name === "rock") {
        setMessage("DRAW");
      }
      if (cpu.name === "paper") {
        setMessage("YOU LOOSE");
        setScore((prev) => prev - 1);
      }
      if (cpu.name === "scissors") {
        setMessage("YOU WON");
        setScore((prev) => prev + 1);
      }
    } else if (user.name === "paper") {
      if (cpu.name === "paper") {
        setMessage("DRAW");
      }
      if (cpu.name === "scissors") {
        setMessage("YOU LOOSE");
        setScore((prev) => prev - 1);
      }
      if (cpu.name === "rock") {
        setMessage("YOU WON");
        setScore((prev) => prev + 1);
      }
    } else if (user.name === "scissors") {
      if (cpu.name === "scissors") {
        setMessage("DRAW");
      }
      if (cpu.name === "rock") {
        setMessage("YOU LOOSE");
        setScore((prev) => prev - 1);
      }
      if (cpu.name === "paper") {
        setMessage("YOU WON");
        setScore((prev) => prev + 1);
      }
    } else return;
  }

  function reset() {
    setUser({});
    setCpu({});
    setGameOn(false);
    setMessage("");
  }
  function handlePlayAgain() {
    reset();
  }

  function handleModal() {
    setRulesModal(!rulesModal);
  }

  const values = {
    plays,
    gameOn,
    setGameOn,
    choosePlay,
    getRandomInt,
    user,
    cpu,
    result,
    message,
    score,
    reset,
    rulesModal,
    handlePlayAgain,
    handleModal,
  };
  return <gameContext.Provider value={values}>{children}</gameContext.Provider>;
};
