import React, { Component } from 'react';

class SomeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(textbox) {
      this.setState({value: textbox.target.value});
    }
  
    handleSubmit(textbox) {
      alert('Hello ' + this.state.value + '!');
      textbox.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default SomeForm;