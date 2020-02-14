import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Login from "./containers/login/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/landing/Landing";
import User from "./components/users/User";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      image:
        "https://image.shutterstock.com/image-photo/large-small-goldfish-showing-different-260nw-64423651.jpg",
      title: "Fish",
      des: "i am fish and I am very happy"
    };
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route path="/card">
                <Landing 
                  image={this.state.image}
                  tlt={this.state.title}
                  desr={this.state.des}
                />
              </Route>
              <Route path="/user">
                <User/>
              </Route>
            </Switch>
          </Router>
              
      </div>
    );
  }
}

export default App;
