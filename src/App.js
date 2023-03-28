import './App.css';
import React, { PureComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quote';
import NaveLinks from './components/links';
import Home from './components/home';

class App extends PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NaveLinks />}>
              <Route index element={<Home />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="quote" element={<Quotes />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
