import React from 'react';
import Header from "./Pages/Home/components/Header";
import Menu from "./Pages/Home/components/Menu";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Card from "./Pages/Login/components/Card"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      {/* <Card /> */}
      {/* <Router> */}
      {/* <Header /> */}
      {/* <Route exact path='/' component={About} /> */}
      {/* <Route exact path='/login' component={Card} /> */}
      {/* <Route exact path='/resume' component={Resume} /> */}
      {/* <Route exact path='/resume/contact' component={MyForm} /> */}
      {/* <Footer /> */}
    {/* </Router> */}
    </div>
  );
}

export default App;