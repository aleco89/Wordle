import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import wordArr from "./diccionary";

interface Props {
  keyValue: string;
}

const Key: React.FC<Props> = ({ keyValue }) => {
  const { board, setBoard, attempt, setAttempt } = useContext(AppContext);
  const wordSet = new Set(wordArr);

  const passLetter = () => {
    if (keyValue === "ENTER") {
      if (attempt.letterPos === 5) {
        let currWord = "";
        for (let i = 0; i < 5; ++i) {
          currWord += board[attempt.row][i];
        }
        console.log(currWord + "es la current");
        if (wordSet.has(currWord.toLowerCase())) {
          setAttempt({ row: attempt.row + 1, letterPos: 0 });
        }
      } else {
        return;
      }
    } else if (keyValue === "DEL") {
      if (attempt.letterPos === 0) return;
      setAttempt({ ...attempt, letterPos: attempt.letterPos - 1 });
      const newBoard = [...board];
      newBoard[attempt.row][attempt.letterPos - 1] = "";
      setBoard(newBoard);
    } else {
      if (attempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[attempt.row][attempt.letterPos] = keyValue;
      setBoard(newBoard);
      setAttempt({ ...attempt, letterPos: attempt.letterPos + 1 });
    }
  };

  return (
    <div
      className={keyValue === "ENTER" || keyValue === "DEL" ? "bigKey" : "key"}
      onClick={passLetter}
    >
      {keyValue}
    </div>
  );
};

export default Key;
