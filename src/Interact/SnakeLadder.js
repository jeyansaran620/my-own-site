import React,{Component} from 'react';
import './SnakeLadder.css';
class SnakeLadder extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      currentPosition:0,
      started:false,
      msg:"Get 1 to start",
      DiceRoll:'Dice-inner Dice6'
    }
  }

   dice='Dice-inner Dice';
   DiceRot='Dice ';

   RollDice =() => {     
    let rand = Math.floor(((Math.random()*100)+1)%(6)+1);
    if(this.DiceRot==='Dice ')
    {
    this.DiceRot+='Dice-rotate';
    }
    else
    {
        this.DiceRot='Dice ';
    }
    let newPlace=this.state.currentPosition;
    let newStart=false;
    let msg=this.state.msg;
    if(!this.state.started)
    {
           if(rand===1)
           {
            newStart=true;
            newPlace=1;
            msg="Well Done lets Start...!";  
           }
           else
           {
            msg="Try Again...! Get 1 to start";  
           }
    }
    else
    {
        newStart=true;
        if(newPlace+rand>100)
        {
            msg="You can reach Only 100";  
        }
        else if(newPlace+rand===100)
        {
            msg="Marvellous...! you Won";  
            newPlace+=rand; 
        }
        else if(newPlace===100)
        {
            msg="Restart the victory...!!!";  
        }
        else
        {
            msg="Good move";  
            newPlace+=rand; 
        }
    }
    setTimeout(
        function() {
            this.setState({
                DiceRoll:this.dice+rand,
                started:newStart,
                msg:msg,
                currentPosition:newPlace,   
            });
        }
        .bind(this),
        500
    );
  
   }
   componentDidUpdate() {

    let msg=this.state.msg;
    let newPlace=this.state.currentPosition;
    
if(newPlace===6)
{
    msg="Hurray...! Its a ladder to 58"; 
    newPlace=58; 
}

else if(newPlace===19)
{
    msg="Hurray...! Its a ladder to 62";  
    newPlace=62; 
}
else if(newPlace===31)
{
    msg="Hurray...! Its a ladder to 67";  
    newPlace=67; 
}
else if(newPlace===56)
{
    msg="Hurray...! Its a ladder to 93";  
    newPlace=93; 
}
else if(newPlace===63)
{
    msg="Oops...! Its a Snake to 3";  
    newPlace=3; 
}
else if(newPlace===70)
{
    msg="Oops...! Its a Snake to 27";  
    newPlace=27; 
}
else if(newPlace===95)
{
    msg="Oops...! Its a Snake to 69";  
    newPlace=69; 
}
else if(newPlace===98)
{
    msg="Oops...! Its a Snake to 8";  
    newPlace=8; 
}
  if(newPlace!==this.state.currentPosition)
  {
    setTimeout(
        function() {
            this.setState({
                msg:msg,
              currentPosition:newPlace  
            })
        }
        .bind(this),
        1000
    );
    
  }
   }
   resetAll =() => 
   {
       this.setState({
        currentPosition:0,
        started:false,
        msg:"Get 1 to start",
        DiceRoll:'Dice-inner Dice6'
      });
   }
  render()
  {
    let playerL=0.2;
    if(this.state.currentPosition===0)
    {
        playerL=-1.8;
    }
    else if(this.state.currentPosition%10===0)
    {
        playerL= ((this.state.currentPosition/10)-1)%2===0? 18.2 : 0.2;
    }
   else if(this.state.currentPosition!==100)
    {
        playerL=(Math.floor((this.state.currentPosition)/10))%2===0? -1.8 + ((this.state.currentPosition%10)*2): 20.2 - ((this.state.currentPosition%10)*2);
    }
    let  playerT=-1.8;
    if(this.state.currentPosition%10===0)
    {
        playerT= -1.8 + (Math.floor(this.state.currentPosition/10)*2);
    }
    else
    {
    playerT=-1.8 + ((Math.floor(this.state.currentPosition/10)+1)*2);
    }
  return (
      <div>
    <div className="SL-board"> 
    <div className="SL-message">Arcade your journey to the Century</div>
    <div className="SL-Box">
    <div className="SL-player" style={{
        bottom: `${playerT}rem`
        ,left: `${playerL}rem`}}></div>
    </div>
    <div className="SL-message">{this.state.msg}</div>
    </div>
    <div className="SL-panel">
    <div className={this.DiceRot} onClick={() => this.RollDice()}>
    <div className={this.state.DiceRoll}></div>
    </div>
    <div className="SL-reset" onClick={() => this.resetAll()}>Reset</div>
    </div></div>
  )
}
}
export default SnakeLadder;
