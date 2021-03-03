import * as React from "react";
// import "./style.scss";

type CubeProps = {
  width: number;
  x: number;
  y: number;
};

const Cube = ({ width = 4, x, y }: CubeProps) => {
  return (
    <div
      style={{
        position: "absolute",
        width: width,
        height: width,
        backgroundColor: "#000",
        left: x,
        bottom: y,
      }}
    ></div>
  );
};

export default Cube;
