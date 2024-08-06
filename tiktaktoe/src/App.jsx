import { useState } from "react";
import "./App.css";

function Sqaure({ value, onSquareClick }) {
  //rendering the squares
  return (
    <button className="square" onClick={onSquareClick}>
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
  const [xisNext, setXIsNext] = useState(true);
  //moved the state to the parent
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xisNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    nextSquares[i] = "X";
    setXIsNext(!xisNext);
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Sqaure value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Sqaure value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Sqaure value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Sqaure value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Sqaure value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Sqaure value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Sqaure value={squares[5]} onSquareClick={() => handleClick(6)} />
        <Sqaure value={squares[6]} onSquareClick={() => handleClick(7)} />
        <Sqaure value={squares[7]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default App;
