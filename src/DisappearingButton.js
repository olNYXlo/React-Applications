import React from 'react';
import ReactDOM from 'react-dom';


class DisappearingButton extends React.Component {
    constructor() {
      super();
    }
    // Don't have to define state
    // can just use sessionStorage & read values from there

    toggle (element){
        sessionStorage.setItem(element.target.id,JSON.stringify(true))
      }
    // generic onClick function that inputs a new item into the sessionStorage
    // that is tagged to the button_ID


      render() {
        const tests = [{
          "settingsId": 2,
          "poolId": 2,
          "testCat": "Non-Technical",
          "testType": "Logical",
          "testSubtype": "Pattern Recognition",
          "noOfQns": 20,
          "timeLimit": 20,
          "isHidden": false
        },
        {
          "settingsId": 3,
          "poolId": 33,
          "testCat": "Technical",
          "testType": "Programming",
          "testSubtype": "Spring Boot",
          "noOfQns": 20,
          "timeLimit": 30,
          "isHidden": false
        },
        {
          "settingsId": 4,
          "poolId": 2,
          "testCat": "Technical",
          "testType": "Agile",
          "testSubtype": "Scrum Level 1",
          "noOfQns": 10,
          "timeLimit": 20,
          "isHidden": false
        }];
        // Assuming get a list of test details to be completed from another API
    
        // maps the list of test details to generate individual buttons
        // for each test detail
        // Button will be made in an ordered list
        // will first check if the sessionStorage has the Item of that specific testSubtype
        // if it exists, the button will not render
        
        // So, on the first page load, all buttons will be rendered as the sessionStorage is
        // empty. Only upon clicking the button & refresh of page will the button disappear

        // the buttons generated are tagged with a button_id == the value of the test Subtype
        const buttons = tests.map((test, i) => (
          <ol>
            {!sessionStorage.getItem(test["testSubtype"]) && 
            <button
              id={test["testSubtype"]} 
              onClick={this.toggle}
            >
              {test["testSubtype"]}
            </button>
            }
          </ol>
        ));
        


        // the header is only there for logical tracking & checking that
        // the toggle function works fine
        return <div>
          {buttons}
          <h1>
              {JSON.stringify(sessionStorage)}
          </h1>
        </div> ;
      } // end of render

    } // end of Disappearingbutton class
export default DisappearingButton;
ReactDOM.render(<DisappearingButton />, document.getElementById('root'));