import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message : "",
      pallindromes : []
    }
  }
 
  updateState = (event) =>{
    this.setState({
      message : event.target.value
    })
  }

  generatePanlindromes = () =>{
    var arr = []
    var message =this.state.message.replace(/[^A-Z\d\s]/gi, ' ').replace("/\r?\n|\r/g"," ").split(" ")
    for (let i = 0; i < message.length; i++) {
      if(message[i].length > 1 && message[i] === message[i].split("").reverse().join("")){
        if(arr.indexOf(message[i]) === -1)
             arr.push(message[i])
             }
      }

     this.setState({
       pallindromes : arr
     })
  }
  render() {
    console.log(this.state.pallindromes)
    return (
      <div className="App" onChange= {this.updateState}>
        <textarea rows="10" cols="100" >
       {this.state.message}
       </textarea>
       <br/>
       <button type="button" onClick={this.generatePanlindromes}>Generate Panlindromes</button>
       {this.state.pallindromes.map((list, index)=> {
         return <ul className= "list" key={index}> {list}</ul>
         
       })}
      </div>
    );
  }
}

export default App;
