import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";

class ShowDB extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                employees: [],
                headers : [],
                xcsrftoken : null
            }
        }
        componentDidMount(){
            
             Axios.get('http://192.168.200.200:8080/backendapi/admin/employees')
            //Axios.get('http://192.168.200.45:8090/')
            .then(response => {

                // const token = response.headers.get('X-CSRF-TOKEN');
                this.setState({employees : response.data});
                this.setState({headers : response.headers});
                const head = JSON.stringify(response.headers);
                this.setState ({xcsrftoken : head.substring(37,73)});
                //console.log(headers);
                //console.log(head);
                console.log(this.state.xcsrftoken);

            })

            
        }



        render(){
            const xcsrftoken = this.state.xcsrftoken;
            const employees = this.state.employees;
            const headers = this.state.headers;


            return (
                <div>
                    <ul>
                        {employees.map(employee => <li>{employee.employeeId}</li>)}
                        <li>{xcsrftoken}</li>
                    </ul>
                    {JSON.stringify(headers)}



                </div>

            )
        }





}
export default ShowDB;