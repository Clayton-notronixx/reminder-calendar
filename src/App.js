import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (<Provider store={store}><Calendar/></Provider>
    );
  }
}

export default App;
