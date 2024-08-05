import { useState } from "react";
import "./App.css";

function Sqaure() {
  return <button className="square">1</button>;
}

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
    </>
  );
}

export default App;
