const css = require('./style/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import cowsay from 'cowsay';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'I am the state'
    };

  }



  render(){
    return(
      <div>
        <button onClick={this.handleClick} type="button">Click Me!</button>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('cowStuff')
);
