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
            
            /*
            Axios.get('http://192.168.200.51:8090/')
            //Axios.get('http://192.168.200.200:8080/backendapi/')
            .then(response => {
                const head = JSON.stringify(response.headers);
                this.setState ({xcsrftoken : head.substring(17,53)});
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
                password : "password"
            }

            /*
            Axios.get('http://192.168.200.200:8080/backendapi/')
            .then(response => {
                const head = JSON.stringify(response.headers);
                this.setState ({xcsrftoken : head.substring(17,53)});
                // gets X-CSRF-TOKEN inside header. used for postman
                this.setState({token : Cookies.get('XSRF-TOKEN')});
                // gets XSRF-TOKEN inside cookies, used for swagger
                console.log(response.headers);
                console.log(Cookies.get('XSRF-TOKEN'));
            });
            */


            const postHeaders = {
                headers : {
                    //'X-CSRF-TOKEN' : token,
                    //'X-XSRF-TOKEN' : token,
                    //'XSRF-TOKEN' : token,
                    
                    //'X-CSRF-TOKEN' :"7255ac3b-15df-453f-9d71-8afe2502b9c2",
                    //'XSRF-TOKEN' :'7255ac3b-15df-453f-9d71-8afe2502b9c2',
                    //'X-XSRF-TOKEN' :'7255ac3b-15df-453f-9d71-8afe2502b9c2'

                    //'Set-Cookie' : `XSRF-TOKEN=${this.state.xcsrftoken}`,

                    // 'Authorization' : `Bearer ${token}`
                    // 'Authorization' : `Bearer ${Cookies.get('XSRF-TOKEN')}`,
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
            //Axios.defaults.headers.common['Authorization'] = this.state.xcsrftoken;


            Axios.defaults.withCredentials = true;
            // Allows passing of cookies inside Axios request



            // Cookies.set('http://192.168.200.45:8090/admin/42/login', 'XSRF-TOKEN', Cookies.get('XSRF-TOKEN'));
            // Axios("http://192.168.200.45:8090/admin/42/login", {
            //     method: "post",data: postData, postHeaders})
            Axios.post('http://localhost/admin/42/login',postData,postHeaders)
            //Axios.post('http://192.168.200.200:8080/backendapi/admin/42/login',postData)
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
                    {Cookies.get('XSRF-TOKEN')}
                </h1>
                <h2>
                    {this.state.xcsrftoken}
                </h2>


                </div>

            )
        }





}
export default PostDB;