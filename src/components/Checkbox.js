import React from 'react';

export default class Checkbox extends React.Component {
    constructor({handleCheckboxChange, name, isChecked}) {
        super();
        this.state = {
            name: name,
            isChecked: isChecked
        }
        this.handleCheckboxChange = handleCheckboxChange;
    }
    componentDidUpdate() {
        if (this.props.isChecked !== this.state.isChecked) {
            this.setState({
                ...this.state,
                isChecked: this.props.isChecked
            })
        }
    }
    render() {
        return (
        <label>
            {this.state.name}
            <input
            name={this.state.name}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheckboxChange}
            >
            </input>
        </label>)
    }
}