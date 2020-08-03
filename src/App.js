import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './Component/CounterGroup'
import store from './reducer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup store={store}/>
      </header>
    </div>
  );
}

export default App;
