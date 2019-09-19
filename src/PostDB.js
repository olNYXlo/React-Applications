import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import Cookies from 'js-cookie';
// import Cookie from 'react-native-cookie';
// universal-cookie
// react-cookie


class PostDB extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                status : null,
                xcsrftoken : null,
                token : null
            }
            Axios.get('http://192.168.200.45:8090/')
            .then(response => {
                const head = JSON.stringify(response.headers);
                this.setState ({xcsrftoken : head.substring(37,73)});
                // gets X-CSRF-TOKEN inside header. used for postman
                this.setState({token : Cookies.get('XSRF-TOKEN')});
                // gets XSRF-TOKEN inside cookies, used for swagger
                console.log(response.headers);
                console.log(Cookies.get('XSRF-TOKEN'));
            });
        }
        componentWillMount(){    
            const postData = {
                password : "password"
            }
            

            const postHeaders = {
                headers : {
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


            Axios.defaults.withCredentials = true
            // Allows passing of cookies inside Axios request



            // Cookies.set('http://192.168.200.45:8090/admin/42/login', 'XSRF-TOKEN', Cookies.get('XSRF-TOKEN'));
            // Axios("http://192.168.200.45:8090/admin/42/login", {
            //     method: "post",data: postData, postHeaders})
            Axios.post('http://192.168.200.45:8090/admin/42/login',postData, postHeaders)
            // Axios.post('http://localhost:8090/admin/42/login',postData)
            // Axios.post('http://localhost:8090/admin/42/login',postData,{'useCredentials': true})
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


        render(){


            return (
                <div>
                <h1>
                    {this.state.xcsrftoken}
                </h1>
                <h2>
                    {this.state.token}
                </h2>


                </div>

            )
        }





}
export default PostDB;