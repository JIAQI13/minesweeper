import React, { useState, useEffect } from "react";
import CreateBoard from "../utils/CreatedBoard";
import Cell from "./Cell";

function Board() {
  const [grid, setGrid] = useState([]);

  const style = {
    display: "flex",
    flexDirection: "row",
  };
  useEffect(() => {
    function freshBoard() {
      const newBoard = CreateBoard(16, 16, 40);
      setGrid(newBoard);
    }
    freshBoard();
  }, []);

  if (!grid.board) {
    return <div>Loading</div>;
  }
  return grid.board.map((singleRow) => {
    return <div>{JSON.stringify(singleRow)}</div>;
  });
}
export default Board;
