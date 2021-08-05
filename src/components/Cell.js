import React from "react";

export default function Cell({ details, updateFlag }) {
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
    },
  };
  const handleClick = () => {
    console.log(details);
  };

  return (
    <div
      style={style.cellStyle}
      onClick={handleClick}
      onContextMenu={(e) => updateFlag(e)}
    >
      {details.value}
    </div>
  );
}
