import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: '',
            userID:''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/card');

        axios.get('https://jsonplaceholder.typicode.com/posts').then( res => {
          console.log(res);
          if(res){
              console.log(res.data[0].userId);
              this.setState({
                userID: res.data[0].title
              })
          }
        })
    }

  render() {
    return (
      <div>
        <h2>Please Login</h2>
        <p>user id is {this.state.userID}</p>
        <form>
          <label>Email</label>
          <input type="text" />
          <label>password</label>
          <input type="password" />
          <div>
            <input type="submit" value="Submit" onClick= { (e) => this.submitHandler(e) }  />
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(Login);