import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import Cookies from 'js-cookie';
//import Cookie from 'react-native-cookie';
//import Cookie from 'universal-cookie';
// react-cookie


class Test extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                status : null,
                xcsrftoken : null,
                jwt : "",
                token : localStorage.getItem("token") || ""
            }
            /*
            Axios.get('http://192.168.200.89:8090/')
            .then(response => {
                const head = JSON.stringify(response.headers);
                this.setState ({xcsrftoken : head.substring(37,73)});
                // gets X-CSRF-TOKEN inside header. used for postman
                this.setState({token : Cookies.get('XSRF-TOKEN')});
                // gets XSRF-TOKEN inside cookies, used for swagger
                console.log(response.headers);
                console.log(Cookies.get('XSRF-TOKEN'));
            });
            */
        }
        componentWillMount(){    

            const postData = {
                "password" : "password"

            }
            
            
            Axios.post('http://localhost:8090/admin/10/login',postData)
            .then(response => {
                this.setState({status : response});
                const body = JSON.stringify(response);
                this.setState ({jwt : body.substring(18,196)});
                localStorage.setItem("token", body.substring(18,196));
                console.log("Response Received : ",response);
                console.log(this.state.jwt)
                console.log(Cookies.get());

            }).catch(err => {
                console.log("AXIOS ERROR : ", err);
            }) 


            const setcook = {
                headers : {
                    'Set-Cookie' : `JWT=${this.state.token};Path=/;HTTPOnly`
                }
                
            }
            
            Axios.get('http://localhost:8090/',setcook)
            .then(response => {
                console.log("Response Received : ", response);
            }).catch(err =>{
                console.log("AXIOS ERROR : ", err);
            })


            const jwtToken = {
                headers : {
                    Authorization: `Bearer ${this.state.token}`
                }
            }

            /*
            const postData = {
                "department": "finance",
                "email": "abc123@gmail.com",
                "employeeId": 342,
                "mobileNo": "12345678",
                "name" : "joke"
              }
              */
             
            

            const postHeaders = {
                headers : {
                    "old-password" : "newpassword",
                    "new-password" : "password"
                    //'X-CSRF-TOKEN' : this.state.xcsrftoken,
                    //'X-XSRF-TOKEN' : this.state.xcsrftoken,
                    //'XSRF-TOKEN' : this.state.xcsrftoken
                    
                    //'X-CSRF-TOKEN' :"7255ac3b-15df-453f-9d71-8afe2502b9c2",
                    //'XSRF-TOKEN' :'7255ac3b-15df-453f-9d71-8afe2502b9c2',
                    //'X-XSRF-TOKEN' :'7255ac3b-15df-453f-9d71-8afe2502b9c2'

                    //'Set-Cookie' : `XSRF-TOKEN=${Cookies.get('XSRF-TOKEN')};Path=/;HTTPOnly`,
                    //'Authorization' : `Bearer ${Cookies.get('XSRF-TOKEN')}`,
                    //'X-CSRF-TOKEN' : Cookies.get('XSRF-TOKEN'),
                    //'X-XSRF-TOKEN' : Cookies.get('XSRF-TOKEN'),
                    //'XSRF-TOKEN' : Cookies.get('XSRF-TOKEN')
                    // withCredentials : true
                }
            }

            /*
            const tokens = new Cookie();
            tokens.set('http://192.168.200.45:8090/admin/42/login', 'XSRF-TOKEN', Cookies.get('XSRF-TOKEN'));
            */
            //Cookies.set('XSRF-TOKEN',Cookies.get('XSRF-TOKEN'));
            //Axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
            //Axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";


            //Axios.defaults.withCredentials = true
            // Allows passing of cookies inside Axios request



            // Cookies.set('http://192.168.200.45:8090/admin/42/login', 'XSRF-TOKEN', Cookies.get('XSRF-TOKEN'));
            // Axios("http://192.168.200.45:8090/admin/42/login", {
            //     method: "post",data: postData, postHeaders})
            //Axios.post('http://192.168.200.89:8090/admin/42/login',postData)

            // Axios.post('http://192.168.200.200:8080/backendapi/employee/register',postData)

            // Axios.post('http://localhost:8090/admin/42/login',postData)
            // Axios.post('http://localhost:8090/admin/42/login',postData,{'useCredentials': true})

            // Axios.post('http://192.168.200.200:8080/backendapi/admin/10/profile-password',postData,postHeaders)

            const jwtt = Cookies.get("JWT");
            console.log(Cookies.get());
            
            Axios.get('http://localhost:8090/admin/employees',jwtToken)
            .then(response => {
                this.setState({status : response});
                console.log("Response Received : ",response);

            }).catch(err => {
                console.log("AXIOS ERROR : ", err);
            })  
             
            
            
            
            /*
            fetch('http://192.168.200.45:8090/admin/42/login', {
                method: 'POST',
                headers: {'Content-Type':'application/json',
                'Cookie' : `XSRF-TOKEN=${this.state.token}`,
                'X-CSRF-TOKEN' : Cookies.get('XSRF-TOKEN'),
                    'X-XSRF-TOKEN' : Cookies.get('XSRF-TOKEN'),
                    'XSRF-TOKEN' : Cookies.get('XSRF-TOKEN')}, // this line is important, if this content-type is not set it wont work
                body: JSON.stringify(postData)
            })
            .then(response => {
                this.setState({status : response});
                console.log("Response Received : ",response);

            }).catch(err => {
                console.log("AXIOS ERROR : ", err);
                console.log(this.state.xcsrftoken);
            }); 
            */
            


            
        }

        /*
                        <h3>
                    {this.state.status}
                </h3>
                */

        componentWillUnmount(){
            localStorage.removeItem("token")
        }

        render(){

            const jwtToken = {
                headers : {
                    Authorization: `Bearer ${this.state.jwt}`
                   // Authorization : `Bearer ${this.state.jwt}`
                   //Authorization : 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCxhZG1pbiIsImV4cCI6MTU3MDQxMzE4MCwiaWF0IjoxNTY5ODA4MzgwfQ.5TQapEw4d_5SPmxsHhZHh9esl_rRNI09NYeOKijTH7lVKV0iGHG0jPOVfDE-qNRZLZzE2RmRPUeBX4ercrzoNA'
                   //Authorization : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCxhZG1pbiIsImV4cCI6MTU3MDQxMzE4MCwiaWF0IjoxNTY5ODA4MzgwfQ.5TQapEw4d_5SPmxsHhZHh9esl_rRNI09NYeOKijTH7lVKV0iGHG0jPOVfDE-qNRZLZzE2RmRPUeBX4ercrzoNA"
                }
            }


            return (
                <div>
                <h1>
                    {this.state.jwt}
                </h1>
                <h2>
                    {JSON.stringify(jwtToken)}
                </h2>
                <h3>
                    {this.state.token}
                </h3>
                <h4>
                    {JSON.stringify(Cookies.get("JWT"))}
                </h4>


                </div>

            )
        }





}
export default Test;