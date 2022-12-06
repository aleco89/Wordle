import Tile from "./Tile";
import propTypes from "prop-types";
import React from "react";

function Board() {
  return (
    <div className="board">
      <div className="row">
        <Tile row={0} column={0} />
        <Tile row={0} column={1} />
        <Tile row={0} column={2} />
        <Tile row={0} column={3} />
        <Tile row={0} column={4} />
      </div>
      <div className="row">
        <Tile row={1} column={0} />
        <Tile row={1} column={1} />
        <Tile row={1} column={2} />
        <Tile row={1} column={3} />
        <Tile row={1} column={4} />
      </div>
      <div className="row">
        <Tile row={2} column={0} />
        <Tile row={2} column={1} />
        <Tile row={2} column={2} />
        <Tile row={2} column={3} />
        <Tile row={2} column={4} />
      </div>
      <div className="row">
        <Tile row={3} column={0} />
        <Tile row={3} column={1} />
        <Tile row={3} column={2} />
        <Tile row={3} column={3} />
        <Tile row={3} column={4} />
      </div>
      <div className="row">
        <Tile row={4} column={0} />
        <Tile row={4} column={1} />
        <Tile row={4} column={2} />
        <Tile row={4} column={3} />
        <Tile row={4} column={4} />
      </div>
      <div className="row">
        <Tile row={5} column={0} />
        <Tile row={5} column={1} />
        <Tile row={5} column={2} />
        <Tile row={5} column={3} />
        <Tile row={5} column={4} />
      </div>
    </div>
  );
}

Board.propTypes = {
  row: propTypes.number,
  column: propTypes.number,
};

export default Board;
