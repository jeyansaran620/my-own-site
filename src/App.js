import React from 'react';
import './App.css';
import NavigBar from './naviBar/naviBar';
import Footer from './Footer/Footer';
import PlayerList from './Player/playerList';
import Interact from './Interact/Interact';
import About from './About/About';
import Profile from './Profile/Profile';
import { 
  Route,
  Switch ,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <div> 
    <NavigBar />
    <Switch >
          <Route exact  path="/Home" component={Profile} />
          <Route  path="/About" component={About} />
          <Route  path="/Interact" component={Interact} />
          <Route  path="/Promotions" component={PlayerList} />
          <Redirect to="/Home"/>
    </Switch >
    <Footer  />
    </div>
  )
}
export default App;
