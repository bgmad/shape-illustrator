import React from 'react';
import './App.css';
import Checkbox from './components/Checkbox';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class App extends React.Component {
  constructor() {
    super();
    this.possibleShapes = ['circle', 'square', 'triangle'];
    this.state = {
      shapeSelections: this.possibleShapes.map(s => {
        const checkboxObject = {
          name: s,
          isChecked: true
        };
        return checkboxObject;
      }),
      currentShape: null,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  handleCheckboxChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      shapeSelections: this.state.shapeSelections.map(s => {
        if (s.name === name) {
          return {
            name: name,
            isChecked: value
          }
        }
        return s
      })
    });
  }
  handleButton(event) {
    const selectedShapes = this.state.shapeSelections.filter(s => s.isChecked);
    const randInt = getRandomInt(0, selectedShapes.length);
    this.setState({
      ...this.state,
      currentShape: selectedShapes[randInt].name
    })
  }
  render() {
    return <div className="App">
      <form>
        {this.state.shapeSelections.map(s => 
          <Checkbox 
            key={s.name} 
            name={s.name} 
            isChecked={s.isChecked}
            handleCheckboxChange={this.handleCheckboxChange}/>
          )
        }
      </form>
      <button onClick={this.handleButton}>New prompt</button>
      {this.state.currentShape && <h3>{this.state.currentShape}</h3>}
    </div>
  }   
}
