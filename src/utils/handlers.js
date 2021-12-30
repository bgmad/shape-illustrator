import { getRandomInt } from "./getRandomInt";
import prompts from './prompts.json';
import axios from "axios";

export function handleCheckboxChange(event) {
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

export function handleButton(event) {
    // pick a random shape from the selected shapes
    const selectedShapes = this.state.shapeSelections.filter(s => s.isChecked);
    const randInt = getRandomInt(0, selectedShapes.length);
    this.setState({
        ...this.state,
        currentShape: selectedShapes[randInt].name,
        prompt: 'loading...'
    });

    // get prompt from server
    axios.get('http://localhost:5000')
    .then(res => {
        if (res.data === '') {
            console.log('picking from pre-generated')
            this.setState({
                ...this.state,
                prompt: prompts[getRandomInt(0, prompts.length)]
            });
        } else {
            this.setState({
                ...this.state,
                prompt: res.data,
            });
        }
    })
    .catch(err => {
        this.setState({
            ...this.state,
            prompt: prompts[getRandomInt(0, prompts.length)]
        });
    });
}