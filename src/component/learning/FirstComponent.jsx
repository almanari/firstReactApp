import React, { Component } from "react";

class FirstComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>This is a paragraph</p>
      </div>
    );
  }
}

class SecondeComponent extends Component {
  render() {
    return (
      <div>
        <h1>This is the SecondeComponent</h1>
      </div>
    );
  }
}

function ThirdComponent() {
  return (
    <div>
      <h1>This is the ThirdComponent</h1>
    </div>
  );
}


export default FirstComponent;
export { SecondeComponent, ThirdComponent };