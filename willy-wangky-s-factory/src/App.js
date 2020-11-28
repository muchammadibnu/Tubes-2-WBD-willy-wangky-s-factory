import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import MelihatResep from './components/melihatResep.jsx';
import DaftarBahanSupplier from './components/daftarBahanSupplier';

class App extends Component {
    render() {
      return (
        <div className="App">
        <MelihatResep /> 
        <DaftarBahanSupplier />
      </div>  
      )
    }
  }
export default App;