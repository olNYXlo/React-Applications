import React from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import Cookies from 'js-cookie';


class FrontEndTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status : null,
            password : "password",
            newpassword : "newpassword"
        }
    }


    componentWillMount() {

        const postData = {

        }


        const postHeaders = {
            headers: {
                "oldpassword": this.state.password,
                "newpassword": this.state.newpassword
            }
        }



        Axios.post('http://192.168.200.200:8080/backendapi/admin/10/profile-password', postData, postHeaders)
            .then(response => {
                this.setState({ status: response });
                console.log("Response Received : ", response);

            }).catch(err => {
                console.log("AXIOS ERROR : ", err);
            })
    }


    render() {


        return (
            <div>
                <h1>
                    
                </h1>


            </div>

        )
    }
}
export default FrontEndTest;