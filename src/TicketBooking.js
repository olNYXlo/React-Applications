import React from 'react';
import ReactDOM from 'react-dom';


class Booking extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
    //this.toggleHidden1 = this.toggleHidden1.bind(this);
    //this.toggleHidden2 = this.toggleHidden2.bind(this);
    this.toggleHidden3 = this.toggleHidden3.bind(this);
    this.state = {
      isHidden1 : JSON.parse(sessionStorage.getItem('isHidden1')) || false,
      isHidden2 : JSON.parse(sessionStorage.getItem('isHidden2')) || false,
      isHidden3 : JSON.parse(sessionStorage.getItem('isHidden3')) || false
    }
  }

  /*
class Button extends React.Component {
  constructor() {
    super();
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    var newColor =
      document.getElementById("1").style.background === "blue" ? "red" : "blue";
    document.getElementById("1").style.background = newColor;
  }

  render() {
    return (
      <button
        // id={this.id}
        id="1"
        style={{ background: "blue" }}
        onClick={this.clicked}
      >
        seat
      </button>
    );
  }
}
*/
  toggleHidden1 () {
    sessionStorage.setItem('isHidden1',JSON.stringify(true))
  }
  toggleHidden2 () {
    sessionStorage.setItem('isHidden2',JSON.stringify(true))
  }
  toggleHidden3 () {
    this.setState({
    isHidden3: !this.state.isHidden3
    })
  }

  

  click(element) {
    var newColor =
      document.getElementById(element.target.id).style.background === "blue"
        ? "red"
        : "blue";
    document.getElementById(element.target.id).style.background = newColor;
  }

 
  render() {

    const Child1 = () => (
      <button
          id={"A" + 1}
          style={{ background: "blue" }}
          onClick={this.toggleHidden1}
        >
          {"A" + 1}
        </button>
    )

    const Child2 = () => (
      <button
          id={"A" + 2}
          style={{ background: "blue" }}
          onClick={this.toggleHidden2}
        >
          {"A" + 2}
        </button>
    );

    const Child3 = () => (
      <button
          id={"A" + 3}
          style={{ background: "blue" }}
          onClick={this.toggleHidden3}
        >
          {"A" + 3}
        </button>
    );

    return (
      <ol id={"A"}>
        
        {!this.state.isHidden1 && <Child1 />}
        {!this.state.isHidden2 && <Child2 />}
        {!this.state.isHidden3 && <Child3 />}
        

      </ol>
    )
    }

  /*
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
  */
} // end of Booking class

/*
var seatsWevent = document.getElementsByTagName("button");
var buttonCount = seatsWevent.length;
for (let i = 0; i < buttonCount; i++) {
  seatsWevent[i].onclick = click(seatsWevent[i].id);
}
*/

// ReactDOM.render(<ol>{seats}</ol>, document.getElementById("app"));

// ReactDOM.render(<ol>{seats}</ol>, document.getElementById('root'));
export default Booking;
ReactDOM.render(<Booking />, document.getElementById('root'));