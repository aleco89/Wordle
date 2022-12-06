import "./App.css";
import { useState, createContext, useEffect } from "react";
import wordSet from "./components/diccionary";
import { boardDefault } from "./components/defaultBoard";
import React from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

type Board = string[][];
type Attempt = { row: number; letterPos: number };
type Solution = string[];

export type expContext = {
  board: Board;
  setBoard: (c: Board) => void;
  attempt: Attempt;
  setAttempt: (c: Attempt) => void;
  solution: Solution;
};

export const AppContext = createContext<expContext>({
  board: boardDefault,
  setBoard: () => {},
  attempt: { row: 0, letterPos: 0 },
  setAttempt: () => {},
  solution: ["H", "O", "U", "S", "E"],
});

//valiables: palabra a adivinar obtenida aleatoriamente del json, palabra generada en el intento.
function App() {
  const [board, setBoard] = useState<Board>(boardDefault);
  const [solution, setSolution] = useState<string[]>(["H", "O", "U", "S", "E"]);
  const [attempt, setAttempt] = useState({ row: 0, letterPos: 0 });

  useEffect(() => {
    setSolution(wordSet[Math.round(Math.random() * wordSet.length)].split(""));
    console.log(solution);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle</h1>
      </header>
      <AppContext.Provider
        value={{ board, setBoard, attempt, setAttempt, solution }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
