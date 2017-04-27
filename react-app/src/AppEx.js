import React, { Component } from 'react';
class AppEx extends Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is state text',
      cat: 0
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return (
          <div>
            <h2>{this.state.txt} - {this.state.cat}</h2>
            <Widget update={this.update.bind(this)}/>
            <br/>
            <Button>I <Heart/> React</Button>
          </div>
    );
  }
}

const Button = (props) => <button>{props.children}</button>
class Heart extends Component {
  render() {
      return <span>&hearts;</span>
  }
}
const Widget = (props) => <input type="text" onChange={props.update}/>
export default AppEx;
