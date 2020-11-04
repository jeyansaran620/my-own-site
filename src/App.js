import React from 'react';
import './App.css';
import NavigBar from './components/naviBar';
import Footer from './components/Footer';
import Linker from './components/linker';
import PlayerList from './components/playerList';
import Interact from './components/Interact';
import About from './components/About';
import Profile from './components/Profile';
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
    <Linker page={1} />
    <Footer  />
    </div>
  )
}
export default App;
