import { useState } from "react";
import "./App.css";

function Sqaure() {
  //use state for the squares
  const [value, setValue] = useState(null);
  //function for when the square is clicked
  function handleClick() {
    console.log(value, "clicked");
    setValue("X");
  }
  //rendering the squares
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function App() {
  return (
    <>
      <Board />
    </>
  );
}
//the board that holds all of the squares
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
