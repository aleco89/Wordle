import React, { useContext } from "react";
import { AppContext } from "../App";

interface Props {
  row: number;
  column: number;
}

const Tile: React.FC<Props> = ({ row, column }) => {
  const { board, solution, attempt } = useContext(AppContext);
  const letter: string = board[row][column];

  const letterState =
    attempt.row > row
      ? letter.toLocaleLowerCase() === solution[column]
        ? "correct"
        : letter !== "" && solution.includes(letter.toLocaleLowerCase())
        ? "wrongPlace"
        : "wrong"
      : "idle";

  return (
    <div className="tile" id={letterState}>
      {letter}
    </div>
  );
};

export default Tile;
