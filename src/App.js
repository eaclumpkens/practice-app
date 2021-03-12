import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExchangeRates from "./components/ExchangeRates"


function App() {
  return (
    <Router>
      <Route exact path="/" component={ExchangeRates} />
    </Router>
  );
}

export default App;
