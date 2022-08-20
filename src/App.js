import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import FirstComponent, { ThirdComponent, SecondeComponent } from "./component/learning/FirstComponent";
import { FourthComponent } from "./component/learning/FourthComponent";


class App extends Component {
  render() {
    return (
      <div className="App">
        <LearinngOldComponent />
      </div>
    );
  }
}

class LearinngOldComponent extends Component {
  render() {
    return (
      <div className="App">
        My first react app
        <FirstComponent />
        <SecondeComponent />
        <ThirdComponent />
        <FourthComponent />
      </div>);
  }
}

export default App;