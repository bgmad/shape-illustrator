import React from 'react';
import './App.css';
import styled from 'styled-components';
import Checkbox from './components/Checkbox';
import RefreshIcon from './components/RefreshIcon';
import { handleCheckboxChange, handleButton } from './utils/handlers';

const Checklist = styled.form`
  display: flex;
  flex-flow: column wrap;
  min-width: auto;
  width: 20%;
  padding-top: .7rem;
  padding-bottom: .7rem;
  background: rgb(0, 0, 100, 0.2);
  label {
    padding: 0.7rem 0 0.7rem 1rem;
    font-weight: bold;
  }
  @media only screen and (max-width: 800px) {
    margin-bottom: 2rem;
    width: 50%;
    text-align: center;
  }
`;

const MainContainer = styled.div`
  width: 70%;
  text-align: center;
  button {
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

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
      prompt: null,
    };
    this.handleCheckboxChange = handleCheckboxChange.bind(this);
    this.handleButton = handleButton.bind(this);
  }
  render() {
    return <div className="App">
      <Checklist>
        {this.state.shapeSelections.map(s => 
          <Checkbox 
            key={s.name} 
            name={s.name} 
            isChecked={s.isChecked}
            handleCheckboxChange={this.handleCheckboxChange}/>
          )
        }
      </Checklist>
      <MainContainer>
        <button onClick={this.handleButton}>
          <RefreshIcon />
        </button>
        {this.state.currentShape && <h2>{this.state.currentShape}</h2>}
        {this.state.prompt && <p>{this.state.prompt}</p>}
      </MainContainer>
    </div>
  }   
}
