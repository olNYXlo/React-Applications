import React from 'react';
import ReactDOM from 'react-dom';


class Booking extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click(element) {
    var newColor =
      document.getElementById(element.target.id).style.background === "blue"
        ? "red"
        : "blue";
    document.getElementById(element.target.id).style.background = newColor;
  }
  render() {
    const rows = ["A", "B", "C", "D", "E", "F", "G"];
    //create a button for each seat

    // id of each list will be the Row + Row's Alphabet (A,B,C,D).  so will be like RowA, RowB
// the id of each button inside each list will be the row + seat number (1,2,3,4,5).    so will be like A1, A2, A3

    const seats = rows.map((seat, i) => (
      <ol id={rows[i]}>
        <button
          id={seat + 1}
          style={{ background: "blue" }}
          onClick={this.click}
        >
          {seat + 1}
        </button>
        <button
          id={seat + 2}
          style={{ background: "blue" }}
          onClick={this.click}
        >
          {seat + 2}
        </button>
        <button
          id={seat + 3}
          style={{ background: "blue" }}
          onClick={this.click}
        >
          {seat + 3}
        </button>
        <button
          id={seat + 4}
          style={{ background: "blue" }}
          onClick={this.click}
        >
          {seat + 4}
        </button>
        <button
          id={seat + 5}
          style={{ background: "blue" }}
          onClick={this.click}
        >
          {seat + 5}
        </button>
      </ol>
    ));
    return seats;
  } // end of render method
} // end of Booking class


// ReactDOM.render(<ol>{seats}</ol>, document.getElementById("app"));

// ReactDOM.render(<ol>{seats}</ol>, document.getElementById('root'));
export default Booking;
ReactDOM.render(<Booking />, document.getElementById('root'));