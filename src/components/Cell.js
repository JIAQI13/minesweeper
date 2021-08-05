import React from "react";

export default function Cell({ details, updateFlag, revealcell }) {
  const style = {
    cellStyle: {
      width: 40,
      height: 40,
      backgroundColor: "grey",
      border: "1px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      cursor: "pointer",
    },
  };

  return (
    <div
      style={style.cellStyle}
      onClick={() => {
        console.log(details);
      }}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
    >
      {details.revealed ? details.value : ""}
    </div>
  );
}
