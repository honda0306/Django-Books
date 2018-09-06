import React, { Component } from 'react';
import axios from './axios';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Books from './components/Books';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      selectedBook: {}
    }
  }

  componentDidMount() {
    axios
      .get(`https://hondabookinventory.herokuapp.com/books`)
        .then(res => { this.setState({ bookList: res.data })})
        .catch(err => { console.log(err)})
  }

  changeBook = (bookID) => {
    axios
      .get(`https://hondabookinventory.herokuapp.com/books/${bookID}`)
        .then(res => {this.setState({ currentBook: res.data })})
        .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;