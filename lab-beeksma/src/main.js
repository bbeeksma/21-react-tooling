const css = require('./style/main.scss');
const cowsay = require('cowsay');
const faker = require('faker');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'I am the state'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(`click on ${e.target}`);
    var text = faker.lorem.paragraph();
    var cowy = cowsay.say({
      text : text,
      e : 'oO',
      T : 'U'
    });
    console.log(cowy);
    this.setState(state =>{
      console.log(state);
      return {content: cowy};
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick} type="button">Click Me!</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('cowStuff')
);


console.log(css,App);
