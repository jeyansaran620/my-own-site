import React from 'react';
import './App.css';
import NavigBar from './naviBar/naviBar';
import Footer from './Footer/Footer';
import PlayerList from './Player/playerList';
import Interact from './Interact/Interact';
import About from './About/About';
import Profile from './Profile/Profile';
import NotFound from './NotFound';
import { 
  Route,
  Switch 
} from "react-router-dom";

const App = () => {
  return (
    <div> 
    <NavigBar />
    <main>
    <Switch >
          <Route exact  path="/" component={Profile} />
          <Route  path="/About" component={About} />
          <Route  path="/Interact" component={Interact} />
          <Route  path="/Promotions" component={PlayerList} />
          <Route component={NotFound}/>
    </Switch >
    </main>
    <Footer  />
    </div>
  )
}
export default App;
