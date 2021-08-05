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

  const updateFlag = (e) => {
    e.preventDefault();
    console.log("Right Click");
  };

  return (
    <div className="parent">
      <h1>board</h1>
    </div>
  );
}
export default Board;
