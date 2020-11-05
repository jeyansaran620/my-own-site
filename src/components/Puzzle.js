import React,{Component} from 'react';
import '../css/Puzzle.css';

class Puzzle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Won:false,
            boxes :[]
        };
    }

    ChangeBox(i)
    { 
        let newBoxes = this.state.boxes;     

        if((i+5)%5!==0 && newBoxes[i-1]&& newBoxes[i-1].value===21)
        {
            newBoxes[i].value+=newBoxes[i-1].value;
            newBoxes[i-1].value=newBoxes[i].value-newBoxes[i-1].value;
            newBoxes[i].value=newBoxes[i].value-newBoxes[i-1].value;
            this.setState({
                boxes:newBoxes
            });
        }

        else if((i+5)%5!==4 && newBoxes[i+1] && newBoxes[i+1].value===21)
        {
            newBoxes[i].value+=newBoxes[i+1].value;
            newBoxes[i+1].value=newBoxes[i].value-newBoxes[i+1].value;
            newBoxes[i].value=newBoxes[i].value-newBoxes[i+1].value;
            this.setState({
                boxes:newBoxes
            });
        }

        else if(Math.ceil((i+1)/5)!==1 && newBoxes[i-5] && newBoxes[i-5].value===21)
        {
            newBoxes[i].value+=newBoxes[i-5].value;
            newBoxes[i-5].value=newBoxes[i].value-newBoxes[i-5].value;
            newBoxes[i].value=newBoxes[i].value-newBoxes[i-5].value;
            this.setState({
                boxes:newBoxes
            });
        }
        
        else if(Math.ceil((i+1)/5)!==5 && newBoxes[i+5] && newBoxes[i+5].value===21)
        {
            newBoxes[i].value+=newBoxes[i+5].value;
            newBoxes[i+5].value=newBoxes[i].value-newBoxes[i+5].value;
            newBoxes[i].value=newBoxes[i].value-newBoxes[i+5].value;
            this.setState({
                boxes:newBoxes
            });
        }
    }

    componentDidMount()
    {
        let BoxStart =[{value:17},{value:8},{value:20},{value:18},{value:10},{value:24},{value:4},{value:15},{value:14}
            ,{value:22},{value:1},{value:6},{value:25},{value:2},{value:19},{value:5},{value:9},{value:23},{value:7},{value:12}
            ,{value:21},{value:13},{value:3},{value:11},{value:16}];
    
        this.setState({
            boxes:BoxStart
        });   
  
    }
    
    componentDidUpdate() {
        if(!this.state.Won)
        {
            let newBox=this.state.boxes;
    
            let done = true;
            newBox.map((box,i) =>
            {
                if(box.value!==i+1)
                {
                    done=false;
                }
                return null;
            });

            if(done)
            {
                this.setState({
                    Won:true
                });
            }
        }
    }

    renderBoxes () 
    {
        let newBox = [];
        for(let i=1;i<26;i++)
        {
            newBox.push({value:i});
        }
        return(
            <div className="Puzzle-wrap">
                <div className="PZ-message">Take a try to solve my Puzzle</div>
                <div className="Puzzle-boxes">
                    {
                        newBox.map((box,i) =>
                        {
                            let Lvalue= (((i+5)%5))*4;
                            let Bvalue= (Math.ceil((i+1)/5)-1)*4;
                            return(
                                <div key={i}>
                                    {box.value===21 ? <div  className="Puzzle-box" style={{left:`${Lvalue}rem`,top:`${Bvalue}rem`}}></div>
                                        : <div key={i} className="Puzzle-box" style={{left:`${Lvalue}rem`,top:`${Bvalue}rem`,backgroundImage: `url(/photos/Puzzle/${box.value}.jpg)`,backgroundSize:'4rem'}}></div>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
                <div className="PZ-message">Make this Original Copy</div>
                <div className="Puzzle-boxes">
                    {
                        this.state.boxes.map((box,i) =>
                        {
                            let Lvalue= (((i+5)%5))*4;
                            let Bvalue= (Math.ceil((i+1)/5)-1)*4;
                            return(
                                <div key={i}>
                                    {box.value===21 ? <div  className="Puzzle-box" style={{left:`${Lvalue}rem`,top:`${Bvalue}rem`}}></div>
                                        : <div key={i} className="Puzzle-box" style={{left:`${Lvalue}rem`,top:`${Bvalue}rem`,backgroundImage:`url(/photos/Puzzle/${box.value}.jpg)`,backgroundSize:'4rem'}} onClick={()=>this.ChangeBox(i)}></div>
                                    }</div>
                            );
                        })
                    }
                </div>
                {this.state.Won?<div className="PZ-message">You Won...!!!</div>:null}
            </div>
        );
    }

    render()
    {
        return (
            <div> 
                {this.renderBoxes()}
                <div className="PZ-reset" onClick={() => this.componentDidMount()}>Reset</div>
            </div>
        );
    }
}

export default Puzzle;
