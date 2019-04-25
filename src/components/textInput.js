import React from 'react';
import './textInput.css';

class TextInput extends React.Component {
  state = {
    text: '',
    result: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  displayResult = () => {
    const { text } = this.state;
    this.setState({ result: text });
  };
  render() {
    const { result } = this.state;
    return (
      <div className="text">
        <span>Some text:</span>
        <input
          type="text"
          className="form-control"
          id="text"
          name="text"
          aria-describedby="emailHelp"
          placeholder="Enter text"
          onChange={this.handleInputChange}
        />
        <button className="btn btn-primary" onClick={this.displayResult}>
          Display
        </button>
        <span>
          <u>{result}</u>
        </span>
      </div>
    );
  }
}
export default TextInput;
