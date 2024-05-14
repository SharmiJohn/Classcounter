
import React, { Component } from 'react';

export default class App extends Component {
  constructor(prop){
    super(prop)
    this.state={
      count:0
    }
  }
  incerement=()=>{
    this.setState((prev)=>({count:prev.count+1}))
  }
  decrement=()=>{
    this.setState((prev)=>({count:prev.count-1}));
  }
  render() {
    return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {this.state.count}</p>
      <button onClick={()=>this.incerement()}>Increment</button>
      <button onClick={()=>this.decrement()}>Decrement</button>
    </div>
    )
  }
}




