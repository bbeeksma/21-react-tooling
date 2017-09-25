const css = require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'I am the state'
    };
  }
  render(){
    return(
      <h1>{this.state.content}</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('cowStuff')
);
