import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Pages/Home/components/Header";
import Menu from "./Pages/Home/components/Menu";
import Login from "./Pages/Login/components/Login.js"
import Landing from "./Pages/Constructor/components/Landing";
import Flows from "./Pages/Home/components/Flows";
import Player from "./Pages/Home/components/Player"
import Category from "./Pages/Home/components/Category"
import FlowPreview from "./Pages/Home/components/FlowPreview";
import SlideFlow from "./Pages/Home/components/SlideFlow";
import Dashboard from "./Pages/Dashboard/"

import logo from './logo.svg';
import "./App.css";
// import Slideflow from "./Pages/Home/components/SlideFlow";
import PlaceHolder from "./Pages/Home/components/PlaceHolder";
import PlayerButton from "./Pages/Home/components/PlayerButton";




function App() {
  return (
    <div className="container">

      <Router>
        <Switch>
          
          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/home'>
            <Menu />
            <Header />
            <Category />
          </Route>
          
          <Route exact path='/dashboard'>
            <Menu />
            <Header />
            <Dashboard/>
          </Route>


          <Route exact path='/constructor'>
            <Menu />
            <Header />
            <Landing />
          </Route>

          <Route exact path='/flows'>
            <Menu />
            <Header />
            <Flows />
          </Route>

          <Route exact path='/categories'>
            <Menu />
            <Category />
            <Category />
          </Route>

          <Route exact path='/player'>
            <Menu />
            <Player />
          </Route>

          <Route exact path='/flowpreview'>
            <Menu />
            <FlowPreview />
          </Route>

          <Route exact path='/phplayer'>
            <Menu />
            <SlideFlow />
            <PlaceHolder />
          </Route>
          
          <Route exact path='/login' component={Login} >
          </Route>
          <Route exact path='/Playerbutton'>
            <PlayerButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;