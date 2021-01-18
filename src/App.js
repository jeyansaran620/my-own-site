import React from 'react';
import './App.css';
import NaviBar from './components/NaviBar';
import Footer from './components/Footer';
import PlayerList from './components/playerList';
import Interact from './components/Interact';
import About from './components/About';
import Profile from './components/Profile';
import { Route, Switch , Redirect } from "react-router-dom";



const App = () => {
    return (
        <div> 
            <NaviBar />
            <Switch >
                <Route exact  path="/Home" component={Profile} />
                <Route  path="/About" component={About} />
                <Route  path="/Interact" component={Interact} />
                <Route  path="/Promotions" component={PlayerList} />
                <Redirect to="/Home"/>
            </Switch >
            <Footer  />
        </div>
    );
};
export default App;
