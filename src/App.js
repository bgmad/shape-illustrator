import React from 'react';
import './App.css';
import Checkbox from './components/Checkbox';
import { handleCheckboxChange, handleButton } from './utils/handlers';

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
    this.handleCheckboxChange = handleCheckboxChange.bind(this);
    this.handleButton = handleButton.bind(this);
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
