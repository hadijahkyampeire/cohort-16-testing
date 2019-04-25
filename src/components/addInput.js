import React from 'react';
import './addInputs.css';

class AddInputs extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    sum: 0
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: Number(value) });
  };

  handleAddition = () => {
    const { number1, number2 } = this.state;
    let result = number1 + number2;
    this.setState({ sum: result });
  };
  render() {
    const { sum } = this.state;
    return (
      <div className="sum">
        <span>Addition:</span>
        <input
          type="number"
          className="form-control"
          id="number1"
          name="number1"
          aria-describedby="emailHelp"
          placeholder="Enter text"
          onChange={this.handleInputChange}
        />
        +
        <input
          type="number"
          className="form-control"
          id="number2"
          name="number2"
          aria-describedby="emailHelp"
          placeholder="Enter text"
          onChange={this.handleInputChange}
        />
        <button className="btn btn-success" onClick={this.handleAddition}>
          Sum
        </button>
        <span>
          <u>{sum}</u>
        </span>
      </div>
    );
  }
}
export default AddInputs;
