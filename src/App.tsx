import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cube from "./components/Cube";

function App() {
  const [xDir, setXDir] = React.useRef(0);
  const [yDir, setYDir] = React.useState(0);
  const [width, setWidth] = React.useState(10);
  const x = React.useRef(0);
  const y = React.useRef(0);

  const loop = () => {
    console.log({ xDir });
    setTimeout(loop, 500);
  };
  const loopRef: any = React.useRef(loop);

  React.useEffect(() => {
    const handleKeypress = (e: any) => {
      switch (e.keyCode) {
        case 38:
          setYDir(1);
          break;
        case 40:
          setYDir(-1);
          break;
        case 37:
          setXDir(-1);
          break;
        case 39:
          setXDir(1);
          break;
      }
    };
    window.addEventListener("keydown", handleKeypress);
    loop();
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
        <Cube width={width} x={x.current} y={y.current} />
      </div>
    </div>
  );
}

export default App;
