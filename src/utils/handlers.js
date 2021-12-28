import { getRandomInt } from "./getRandomInt";
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
    const selectedShapes = this.state.shapeSelections.filter(s => s.isChecked);
    const randInt = getRandomInt(0, selectedShapes.length);
    this.setState({
        ...this.state,
        currentShape: selectedShapes[randInt].name
    })
}