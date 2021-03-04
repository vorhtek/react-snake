import React from "react";
import "./App.css";
import Cube from "./components/Cube";

function App() {
  const [axis, setAxis] = React.useState("y");
  const [xDir, setXDir] = React.useState(0);
  const [yDir, setYDir] = React.useState(0);
  const [width, setWidth] = React.useState(10);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setXDir(xDir);
      setYDir(yDir);
      setAxis(axis);
      if (axis === "x") {
        setX(x + xDir * width);
      }
      if (axis === "y") {
        setY(y + yDir * width);
      }

      console.log({ xDir, yDir, axis });
    }, 300);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, xDir, y, yDir, axis]);

  React.useEffect(() => {
    const handleKeypress = (e: any) => {
      switch (e.keyCode) {
        case 38:
          setYDir(1);
          setAxis("y");
          break;
        case 40:
          setYDir(-1);
          setAxis("y");
          break;
        case 37:
          setXDir(-1);
          setAxis("x");
          break;
        case 39:
          setXDir(1);
          setAxis("x");
          break;
      }
    };
    window.addEventListener("keydown", handleKeypress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React.useEffect(() => {
  //   loopRef.current = loop;
  // }, [xDir, x]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ccc",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="canvas"
        style={{
          position: "relative",
          width: 400,
          height: 400,
          backgroundColor: "#eee",
        }}
      >
        <Cube width={width} x={x} y={y} />
      </div>
    </div>
  );
}

export default App;
