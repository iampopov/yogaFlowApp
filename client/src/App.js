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
            <Header />
            <Menu />
            <Category />
            <Category />
            <Category />
          </Route>
          
          <Route exact path='/dashboard'>
            <Header />
            <Menu />
            <Dashboard/>
          </Route>


          <Route exact path='/constructor'>
            <Header />
            <Landing />
          </Route>

          <Route exact path='/flows'>
            <Header />
            <Flows />
          </Route>

          <Route exact path='/categories'>
            <Category />
            <Category />
          </Route>
          <Route exact path='/player'>
            <Player />
          </Route>
          <Route exact path='/flowpreview'>
            <FlowPreview />
          </Route>
          <Route exact path='/phplayer'>
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