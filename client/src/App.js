import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Pages/Home/components/Header";
import Menu from "./Pages/Home/components/Menu";
import Login from "./Pages/Login/components/Login.js"
import Constructor from "./Pages/Home/components/Constructor";
import Flows from "./Pages/Home/components/Flows";
import Category from "./Pages/Home/components/Category"

import logo from './logo.svg';
import "./App.css";


function App() {
  return (
    <div className="container">


      <Router>
        <Switch>
          
          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/home'>
            <Header />
            <Menu />
          </Route>

          <Route exact path='/constructor'>
            <Header />
            <Constructor />
          </Route>

          <Route exact path='/flows'>
            <Header />
            <Flows />
          </Route>

          <Route exact path='/categories'>
            <Category />
          </Route>

          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;