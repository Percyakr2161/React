import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="container"
      style={{ backgroundColor: color }}>
      <div className="color-wrapper">
        <div className="button-box">

          <button
            onClick={() => setColor("red")}
            className="color-btn"
            style={{ backgroundColor: "red" }}>
            Red </button>

          <button
            onClick={() => setColor("green")}
            className="color-btn"
            style={{ backgroundColor: "green" }}>
            Green </button>

          <button
            onClick={() => setColor("blue")}
            className="color-btn"
            style={{ backgroundColor: "blue" }}>
            Blue </button>

            <button
            onClick={() => setColor("yellow")}
            className="color-btn"
            style={{ backgroundColor: "yellow" }}>
            yellow </button>

            <button
            onClick={() => setColor("lavender")}
            className="color-btn"
            style={{ backgroundColor: "lavender" }}>
            lavender </button>

            <button
            onClick={() => setColor("orange")}
            className="color-btn"
            style={{ backgroundColor: "orange" }}>
            orange </button>

        </div>
      </div>
    </div>
  );
}

export default App;
