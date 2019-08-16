import React from 'react';
import ReactDOM from 'react-dom';
// import React, {Component} from 'react';
// import React, {useState} from 'react';

// the entire application is divided into a small logical group of code, which is known as
// components are core building blocks of a react application
// react component have their own structure, method as well as APIs
// Class (stateful) components, functional (stateless) component [returns jsx]
// JSX (JavaScript XML) : conditional (ternary) expressions, instead of if else condition
//=======================================================================================
// EXAMPLE 1 - function component

function EX1(){

    const greeting = "NiHao.. I am a Function";

    return <div>
        <h1>{greeting}</h1>
        <h2>{2+3}</h2>
    </div>;

}
// export default EX1; // exports function as a JSX file
//=======================================================================================
// EXAMPLE 2 - class component
// class EX2 extends Component      can be used instead provided first line is
// import React, {Component} from 'react'   as performance faster as only import necessary library
class EX2 extends React.Component{
    render(){
        return(
            <div className = "EX2">
                <h1>
                    NiHao.. I am a class
                </h1>
            </div>
        )
    }
}
// export default EX2;
//=======================================================================================
// EXAMPLE 3 - Function which returns JSX
// Function returning another Function
function EX3(){
    return <Headline />; // Headline is a JSX
}

function Headline(){
    const greeting = "NiHao, i am a function component made from another function component";
    return <h1>{greeting}</h1>;
}
// export default EX3;
//=======================================================================================
// EXAMPLE 4 - Function that takes in props
function EX4(){
    const greeting = 'PROPS';

    return <HeadlineEX4 value = {greeting} />;
    // value is the AttributeName
}
function HeadlineEX4(props){
    return <h1>{props.value}</h1>;
    // props.AttributeName
}
// export default EX4;
//=======================================================================================
// EXAMPLE 5 - Arrow Function form of function that takes in props
const EX5 = () => {
    const greeting = 'Arrow Function => called from another function';
    return <HeadlineEX5 value = {greeting} />;
};

const HeadlineEX5 = ({value}) => {
    return <h1>{value}</h1>;
};

// Arrow function accesses the value of Attribute with name 'value'
// Must specify with the AttributeName else will not return anything

// export default EX5;

//=======================================================================================
// EXAMPLE 6 - 3 Nested Arrow Functions
const EX6 = () => {
    const header = "1st Arrow => ";
    return <ol><Arrow2 head = {header} /></ol>;
    // returns an Arrow2 function inside an Ordered List element
};

const Arrow2 = ({head}) => {
    const middle = "2nd Arrow => ";
    return <li>{head}
    <Arrow3 mid = {middle} /></li>;
    // returns a list item of {head} & an Arrow3 functions inside a list item element
};

const Arrow3 = ({mid}) => {
    return <li>{mid}
    <li>3rd Arrow => </li></li>;
    //returns a list item of {mid} in a list item element
    // also returns another list item of 3rd Arrow
};
// export default EX6;

//=======================================================================================
// EXAMPLE 7 - use of State Pre - ES6
const EX7 = () => {
    return <HeadlineEX7 />;
};

const HeadlineEX7 = () => {
    const greeting = 'state - example';
    return <h1>{greeting}</h1>;
};

// export default EX7;


//=======================================================================================
// EXAMPLE 8 - UseState (React Hooks)
const EX8 = () => {
    return <HeadlineEX7 />;
}

const HeadlineEX8 = () => {
    const [greeting, setGreeting] = React.useState('NiHao');
    // takes in StateName & SetStateFunctionName
    return <h1>{greeting}</h1>;
}
//export default EX8

//=======================================================================================
// EXAMPLE 9 - Event Handler that changes State
const EX9 = () => {
    return <HeadlineEX9 />;
};

const HeadlineEX9 = () => {
    const [greeting, setGreeting] = React.useState('NiHao');

return (

    <div>
        <h1>{greeting}</h1>
        <input type = "text" value = {greeting} onChange ={event => setGreeting(event.target.value)} />;        
    </div>
    // prompts user to input any text
    // any input text will be reflected on screen as the Header
    // input text value (event.target.value) will be assigned to the Greeting state through the setGreeting method

);
};
// export default EX9;
//=======================================================================================
// EXAMPLE 10 - Event Handler that changes State W better encapsulation
const EX10 = () => {
    return <HeadlineEX10 />;
};

const HeadlineEX10 = () => {
    //HeadlineEX10 has state
    const [greeting, setGreeting] = React.useState("NiHao");

const handleChange = event => setGreeting(event.target.value);
// event handler component
// Do not use GetElementById in ReactJS. Is bad practice

return (
    <div>
        <h1>{greeting}</h1>
        <input type="text" value = {greeting} onChange={handleChange} />;
    </div>
);
};
// export default EX10;
//=======================================================================================
// EXAMPLE 11 - Callback function
const EX11 = () => {
    //EX11 has state while HeadlineEX11 has props passed to it from EX11
    const [ greeting, setGreeting] = React.useState("NiHao");

    const handleChange = event => setGreeting(event.target.value);

    return (
        <HeadlineEX11 headline = {greeting} onChangeHeadline = {handleChange} />
        // HeadlineEX11 has 2 properties (props)
        // headline with a value of greeting
        // onChangeHeadline with a value of handleChange function
    );
};

const HeadlineEX11 = ({headline, onChangeHeadline}) => (
    // The function takes in 2 inputs, headline & onChangeHeadline
    <div>
        <h1>{headline}</h1>
        <input type = "text" value = {headline} onChange = {onChangeHeadline} />
    </div>
    // outputs header with value of greeting
    // with an input text box that on change will run the property onChangeHeadline
    // which calls another function that handles the change
);
// export default EX11;
//=======================================================================================
// EXAMPLE 12 - Class VS Function
// Class WILL HAVE RENDER
// FUNCTION DOES NOT HAVE RENDER

class EX12 extends React.Component {
    render(){
        return (
            <div>
                <First/>
                <Second/>
            </div>
        );
    }
};
class First extends React.Component {
    render(){
        return (
            <div>
                <h1>Web Development</h1>
            </div>
        );
    }

};
class Second extends React.Component{
    render(){
        return (
            <div>
                <h2>Mobile Development</h2>
            </div>
        );
    }
}
// export default EX12;
//=======================================================================================
// EXAMPLE 13 - Text Box with submit button that updates text
// As textbox is separate from Button element, have to have use state
// to keep track of what to update upon clicking


class EX13 extends React.Component{
    // main 'Application' that renders 2 components:
    // a component that displays the text
    // a component that updates the text
    constructor(){
        super();
        this.state = {message : 'Enter Text : '};
        this.changeMessage = this.changeMessage.bind(this);

    }

    changeMessage(newMessage) {
        this.setState({message : newMessage});
    }

    render(){
        return <div>
            <Display message={this.state.message}/>
            <TextBox onClick = {this.changeMessage}/>
            </div>
    }
    // textbox is rendered with a Property (Prop) of onChange
    // that executes a function that sets the State
    // Display is rendered with a Property of message

}

const Display = (props) => {
    return <h1>{props.message}</h1>
    // Displays the parent component's message inside its state
}

class TextBox extends React.Component {

    constructor(props){
        super(props);
        this.state = ({input : 'Enter Text : '});
        this.handleClick = this.handleClick.bind(this);
    }
    // Have to create another State attribute of input for textbox
    // As the button is separate from the input box
    // so have to have an attribute to keep track of the entered text


    handleClick = () => {
        this.props.onClick(this.state.input);
    }
    // this function is the event handler for the button
    // will run the parent component's (EX13) function that set's its state of message
    // with TextBox's state of input

    handleInput = (newMessage) => {
        this.setState({input : newMessage.target.value});
    }
    // this function is the event handler for the textbox
    // will update the TextBox's state of input
    

    render(){

        return <div>
        <input type ="text" value ={this.state.input} onChange ={this.handleInput}/>
        <button onClick = {this.handleClick}>
            submit
        </button>
    </div>
    // So for every change in the textbox, the TextBox's state of input will be updated
    // Only upon clicking the button, the setState of EX13's message will be updated
    // with TextBox's state of input

    // Have 2 event handlers. On Textbox Change, will update own state of ‘input’
    // On click of button, will update state of ‘message’ in parent component


    }
}

const TextBox2 = (props) => {
    // Same as TextBox except using UseState instead
    // Lesser lines of code as do not require to have constructor
    // Also easier as State setter also created for you

    const [input, setInput] = React.useState("Enter Text : ");

    const handleChange = event => setInput(event.target.value);

    const handleClick = () => {
        props.onClick(input);
    }

    return <div>
        <input type ="text" value ={input} onChange ={handleChange}/>
        <button onClick = {handleClick}>
            submit
        </button>
    </div>

}
export default EX13;