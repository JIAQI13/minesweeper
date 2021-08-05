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
      setGrid(newBoard.board);
    }
    freshBoard();
  }, []);

  //right click Flag cell
  const updateFlag = (e, x, y) => {
    e.preventDefault();
    // deep copy of the object
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    console.log(newGrid[x][y]);
    setGrid(newGrid);
  };

  //left click
  const revealcell = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert("clicked on mine");
    } else {
      newGrid[x][y].revealed = true;
      setGrid(newGrid);
    }
  };
  return grid.map((singleRow) => {
    return (
      <div style={style}>
        {singleRow.map((singleBlock) => {
          return (
            <Cell
              details={singleBlock}
              updateFlag={updateFlag}
              revealcell={revealcell}
            ></Cell>
          );
        })}
      </div>
    );
  });
}
export default Board;
