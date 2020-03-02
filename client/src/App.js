import React from 'react';
import Header from "./components/Header/index";
import Menu from "./components/Menu/index";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
    </div>
  );
}

export default App;