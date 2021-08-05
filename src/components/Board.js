import React, { useState, useEffect } from "react";
import CreateBoard from "../utils/CreatedBoard";
import Cell from "./Cell";
import { revealed } from "../utils/Reveal";

function Board() {
  const [grid, setGrid] = useState([]);
  const [nonMinecount, setNonMinecount] = useState(0);
  const [mineLocations, setmineLocations] = useState([]);

  const style = {
    display: "flex",
    flexDirection: "row",
  };
  useEffect(() => {
    function freshBoard() {
      const newBoard = CreateBoard(16, 16, 40);
      setNonMinecount(16 * 16 - 40);
      setmineLocations(newBoard.mineLocation);
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
    if (grid[x][y].revealed) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert("game over");
      //show all mines after game over
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMinecount);
      setNonMinecount(newRevealedBoard.newNonMinesCount);
      setGrid(newRevealedBoard.arr);
    }
  };

  return (
    <>
      <p>{nonMinecount}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {grid.map((singleRow) => {
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
        })}
      </div>
    </>
  );
}
export default Board;
