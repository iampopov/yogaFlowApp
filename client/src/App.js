import React from 'react';
import Header from "./Pages/Home/components/Header";
import Menu from "./Pages/Home/components/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./Pages/Login/components/Card"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">



      <Router>
        <Switch>
          <Route exact path='/'>
            <Card />
          </Route>

          <Route exact path='/home'>
            <Header />
            <Menu />
          </Route>



          <Route exact path='/login' component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;