import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      values: {},
      standard: ''
    }
  }

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.values;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({
      formValues
    });
    this.calculate();
  }

  calculate() {
    let sd = this.state.values.amount/1000*this.state.values.percent*0.789;
    this.setState({standard:sd});
  }

  render() {
    return (
      <div class="App">
        <div id="calculation">
          <h1 class="padding">Calculate your standard drinks here!</h1>
          <div class="padding-bottom ">
            <label for="amount">Amount of Alcohol in ml</label><br/>
            <input class="calc" id="amount" name="amount" placeholder="In millilitres" value={this.state.values["amount"]}  onChange={this.handleChange.bind(this)}/>
          </div>
          <div class="padding-bottom ">
            <label for="percent">Percentage of Alcohol</label><br/>
            <input class="calc" id="percent" name="percent" placeholder="eg. 50 for 50%" value={this.state.values["percent"]}  onChange={this.handleChange.bind(this)}/>
          </div>
          <h2 class="padding">Standard drinks</h2><p>{this.state.standard}</p>
        </div>
      </div>
    );
  }
}

export default App;
