import './App.css';
import React, { PureComponent } from 'react';
import Calculator from './components/Calculator';
import Quotes from './components/quote';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="quote-container">
        <div className="quote">
          <Quotes />
        </div>
        <div className="cal-contanier">
          <Calculator />
        </div>
      </div>
    );
  }
}
export default App;
