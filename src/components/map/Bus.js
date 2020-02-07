import React from "react";


const Bus = ({ x, y }) => {
  return (
    <div
      style={{

        width: 32,
        height: 32,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: "auto auto",
        gridColumn: `${x + 1} / ${x + 2}`,
        gridRow: `${(y + 1) * -1} / ${(y + 2) * -1}`
      }}
    ></div>
  );
};

export default Bus;
