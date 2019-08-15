import React from 'react';
import logo from './logo.svg';
import './App.css';





function App() {
  function click(element) {
    var newColor =
      document.getElementById(element.target.id).style.background === "blue"
        ? "red"
        : "blue";
    document.getElementById(element.target.id).style.background = newColor;
  }
  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const seats = rows.map((seat, i) => (
    <ol id={rows[i]}>
      <button
        id={seat + 1}
        style={{ background: "blue" }}
        onClick={click}
      >
        {seat + 1}
      </button>
      <button
        id={seat + 2}
        style={{ background: "blue" }}
        onClick={click}
      >
        {seat + 2}
      </button>
      <button
        id={seat + 3}
        style={{ background: "blue" }}
        onClick={click}
      >
        {seat + 3}
      </button>
      <button
        id={seat + 4}
        style={{ background: "blue" }}
        onClick={click}
      >
        {seat + 4}
      </button>
      <button
        id={seat + 5}
        style={{ background: "blue" }}
        onClick={click}
      >
        {seat + 5}
      </button>
    </ol>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NiHao
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
        <p>Available Seats</p>
        {seats}
        
      </header>
        
    </div>
  );
}

export default App;
