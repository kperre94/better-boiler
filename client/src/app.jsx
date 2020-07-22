import React from 'react';
import { render } from 'react-dom';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        message: 'Hello World'
      }
  }
  render() {
    return (
      <>
        <div>{this.state.message}</div>
      </>
    )
  }
}
