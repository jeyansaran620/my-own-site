import React from 'react';
import XoGame from './XoGame';
import SnakeLadder from './SnakeLadder';
import Puzzle from './Puzzle';
import Dragon from './Dragon';

const Interact = () => {
        
        return ( <div>
            <div className="heading">My Miniature Games </div>
            <div className="works-description">Explore my gaming Section with some interesting games to spent your leisure time,make sure you win all of them...!!!</div>
            <div className="heading"> XO - Game </div>
            <XoGame/>
            <div className="heading"> Watch out </div>
            <Dragon />
            <div className="heading"> Snake and Ladder </div>
            <SnakeLadder/>
            <div className="heading"> Picture Puzzle </div>
            <Puzzle/>
            <div className="heading">About this Site </div>
            <div className="works-description">This site is a Single page website done with React JS and build with the help of <a href="http://github.com/jeyansaran620/my-own-site">github repository</a>.</div>         
            </div>
);
}
export default Interact;
