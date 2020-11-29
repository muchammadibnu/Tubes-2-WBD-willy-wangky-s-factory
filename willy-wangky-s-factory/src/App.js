import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import MelihatResep from './components/melihatResep.jsx';
import DaftarBahanSupplier from './components/daftarBahanSupplier';
import MelihatBahanPabrik from './components/melihatBahanPabrik.jsx';
import MelihatDaftarCoklat from './components/melihatDaftarCoklat.jsx';
import MelihatPemesanan from './components/melihatPemesanan.jsx';
import MelihatSaldo from './components/melihatSaldo.jsx';
import Navbar from './components/navbar'
import Home from './components/home'
//import MembeliBahanSupplier from '.components/membeliBahanSupplier.jsx';

class App extends Component {
    render() {
      return (
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/MelihatResep">
              <MelihatResep />
            </Route>
            <Route path="/MelihatBahanSupplier">
              <DaftarBahanSupplier />
            </Route>
            <Route path="/MelihatBahanPabrik">
              <MelihatBahanPabrik />
            </Route>
            <Route path="/MelihatDaftarCoklat">
              <MelihatDaftarCoklat />
            </Route>
            <Route path="/MelihatPemesanan">
              <MelihatPemesanan />
            </Route>
            <Route path="/MelihatSaldo">
              <MelihatSaldo />
            </Route>
          </Switch> 
        </div>
      </BrowserRouter>  
      )
    }
  }
export default App;