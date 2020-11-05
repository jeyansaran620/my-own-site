import React from 'react';
import XoGame from './XoGame';
import SnakeLadder from './SnakeLadder';
import Puzzle from './Puzzle.js';
import Dragon from './Dragon';
import Linker from './linker';

import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

class Interact extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = { collapse: 0 };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(e) {
        let event = e.target.dataset.event;
        this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }

    render() {

        const {collapse} = this.state;
        return (
            <div>
                <div className="container">
                    <h3 className="page-header">My - Miniature React Games</h3>
                    <Card style={{ marginBottom: '1rem' }} className="box">
                        <CardHeader onClick={this.toggle} data-event={0} className="text-center"><strong> XO - Game </strong></CardHeader>
                        <Collapse isOpen={collapse === 0}>
                            <CardBody><XoGame/></CardBody>
                        </Collapse> 
                    </Card>
                    <Card style={{ marginBottom: '1rem' }}  className="box">
                        <CardHeader onClick={this.toggle} data-event={1} className="text-center"><strong> Watch out </strong></CardHeader>
                        <Collapse isOpen={collapse === 1}>
                            <CardBody><Dragon /></CardBody>
                        </Collapse> 
                    </Card>
                    <Card style={{ marginBottom: '1rem' }}  className="box">
                        <CardHeader onClick={this.toggle} data-event={2} className="text-center"><strong> Snake and Ladder  </strong> </CardHeader>
                        <Collapse isOpen={collapse === 2}>
                            <CardBody><SnakeLadder/></CardBody>
                        </Collapse> 
                    </Card>
                    <Card style={{ marginBottom: '1rem' }}  className="box">
                        <CardHeader onClick={this.toggle} data-event={3}  className="text-center"><strong>  Picture Puzzle </strong></CardHeader>
                        <Collapse isOpen={collapse === 3}>
                            <CardBody><Puzzle/></CardBody>
                        </Collapse> 
                    </Card>
                </div>

                <Linker page={3} />
            </div>
        );
    }
}

export default Interact;
