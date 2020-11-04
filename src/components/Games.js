import React from 'react';
import { Link } from 'react-router-dom';

class Games extends React.Component {
        
    toggle = this.toggle.bind(this);

    state = { collapse: 0 };
    
      toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
      }

      render() {

        const {collapse} = this.state;

        return (
          <div className="container">
        <div className="row row-content align-items-center">
            <div  className="col-12">
                <h2>React Games  <Link to={"Interact"} style={{color: "#464866"}}> Link </Link></h2>
                <ul className="nav nav-tabs">

                  <li className="nav-item">
                      <div className={`nav-link ${collapse===0 ? 'active' : ''}`} 
                       onClick={this.toggle} data-event={0}>XO - Win me</div>
                  </li>

                  <li className="nav-item">
                    <div className={`nav-link ${collapse===1 ? 'active' : ''}`}
                     onClick={this.toggle} data-event={1}>Hey! Watch Out</div>
                </li>

                <li className="nav-item">
                    <div className={`nav-link ${collapse===2 ? 'active' : ''}`}
                     onClick={this.toggle} data-event={2}>Snake and Ladder</div>
                </li>

                <li className="nav-item">
                    <div className={`nav-link ${collapse===3 ? 'active' : ''}`} 
                     onClick={this.toggle} data-event={3}>Solve Me</div>
                </li>
                
                </ul>
                <div className="tab-content">
                <div  className={`tab-pane fade p-2 ${collapse===0 ? 'show active' : ''}`}>
                    <h3>Be X <small>Beat the O</small></h3>
                    <p>Make your First Move as X, Try Connecting 3 adjacent Horizontal,vertical,diagnol to WIN!!!. THis was Built in JS with predominant conditional statements with the users every single move,only preplaners could win it.</p> 
                </div>
                    <div className={`tab-pane fade p-2 ${collapse===1 ? 'show active' : ''}`}>
                        <h3>Watch Out <small>Have a Look</small></h3>
                <p>This was build on the idea of the dragon game on the chrome browser, with my Knowledge i have altered the Game face in which you should avoid the obstacles there by increasing the score. The animation effect was achieved by changing the state every 0.1s.</p>
                    </div>
                        <div className={`tab-pane fade p-2 ${collapse===2 ? 'show active' : ''}`} >
                            <h3>Ups and Downs</h3>
                         <p>As you know its usual snake and ladder game but with single player constraint, The game plan was achieved with css control and animations to transfer player from one position to another, there is a sequence of check for the snake and the ladder in the progress.</p>
                      </div>
                    <div className={`tab-pane fade p-2 ${collapse===3 ? 'show active' : ''}`}>
                        <h3>Puzzles <small>tunes your Brain</small></h3>
                        <p>Match the pattern of the above image, you are given pieces of the image shuffled in the box there is only one empty space in which you could slide in an another piece of photo, By doing so try to solve the puzzle. This is so simple with the monitoring of the empty place.</p>
                     </div>
                 </div>
            </div>
      </div>
          </div>
        );
 }
}
export default Games;
