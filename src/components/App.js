import React from 'react';
import Button from './Button';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(value) {
    this.setState((prevState) => ({
      counter: prevState.counter + value
    }));
  }

  render() {
    const topMargin = { marginTop: 20 };
    return (
      <div style={topMargin}>
        <Button incrementCounter={this.incrementCounter} incrementValue={1} />
        <Button incrementCounter={this.incrementCounter} incrementValue={5} />
        <Button incrementCounter={this.incrementCounter} incrementValue={10} />
        <Button incrementCounter={this.incrementCounter} incrementValue={100} />
        <Counter counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
