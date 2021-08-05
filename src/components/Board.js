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
    return (
      <div style={style}>
        {singleRow.map((singleBlock) => {
          return (
            <div style={{ width: 30, height: 30 }}>
              <Cell details={singleBlock.value}></Cell>
            </div>
          );
        })}
      </div>
    );
  });
}
export default Board;
