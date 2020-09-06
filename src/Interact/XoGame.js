import React,{Component} from 'react';
import './XoGame.css';
class XoGame extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      now:"X",
      won:"no", 
      count:1,
      BoxX :[],
      BoxO :[],
      Boxes :[1,2,3,4,5,6,7,8,9]
    }
  }
 
 resetAll = () => 
 {
     this.setState({
        now:"X",
        won:"no", 
        count:1,
        BoxX :[],
        BoxO :[],
        Boxes :[1,2,3,4,5,6,7,8,9]
      });
 }
 
  AddPoint =(place) =>
  {
     
      if(!(this.state.BoxX.includes(place) || this.state.BoxO.includes(place)) && this.state.won==="no")
      {
          if(this.state.now==="X")
          {
             let newBoxX=this.state.BoxX;
             newBoxX.push(place);
      let Win ="no";
      for(var i=1;i<=9;i=i+3)
      {
        if(this.state.BoxX.includes(i) && this.state.BoxX.includes(i+1) && this.state.BoxX.includes(i+2))
        {
            Win ="X";
        }
      }
      for(i=1;i<=3;i++)
      {
        if(this.state.BoxX.includes(i) && this.state.BoxX.includes(i+3) && this.state.BoxX.includes(i+6))
        {
            Win ="X";
        }
      }
      if((this.state.BoxX.includes(1) && this.state.BoxX.includes(5) && this.state.BoxX.includes(9)) || (this.state.BoxX.includes(3) && this.state.BoxX.includes(5) && this.state.BoxX.includes(7)))
      {
          Win ="X";
      }
      if(Win==="no" && this.state.count===9)
      {
        Win ="Match draw";
      }
      this.setState({
          BoxX:newBoxX,
        count:this.state.count+1,
        now:"O",
        won:Win
    })
          }
         else if(this.state.now==="O")
          {

            let newBoxO=this.state.BoxO;
             newBoxO.push(place);
            let Win ="no";
            for(i=1;i<=9;i=i+3)
            {
              if(this.state.BoxO.includes(i) && this.state.BoxO.includes(i+1) && this.state.BoxO.includes(i+2))
              {
                  Win ="O";
              }
            }
            for(i=1;i<=3;i++)
            {
              if(this.state.BoxO.includes(i) && this.state.BoxO.includes(i+3) && this.state.BoxO.includes(i+6))
              {
                  Win ="O";
              }
            }
            if((this.state.BoxO.includes(1) && this.state.BoxO.includes(5) && this.state.BoxO.includes(9)) || (this.state.BoxO.includes(3) && this.state.BoxO.includes(5) && this.state.BoxO.includes(7)))
            {
                Win ="O";
            }
            
            this.setState({
                BoxO:newBoxO,
              count:this.state.count+1,
              now:"X",
              won:Win
          })
          
          }
}
  }
  


   componentDidUpdate() {
    if(this.state.count<9 &&  this.state.now==="O")
    {
        if(this.state.count<3)
        {
          if(!this.state.BoxX.includes(5))
          {
            this.AddPoint(5);
          }
         else
         {
          let rand = Math.floor(Math.random() * Math.floor(9))+1;
          while(this.state.BoxX.includes(rand) || this.state.BoxO.includes(rand))
          {
            rand = Math.floor(Math.random() * Math.floor(9))+1;
          }
          this.AddPoint(rand);
        }
      }
        else
        {
            let done = false;
           for(var i=1;i<=9;i=i+3)
           {
             
             if(!done && ((this.state.BoxO.includes(i) && this.state.BoxO.includes(i+1)) || (this.state.BoxX.includes(i) && this.state.BoxX.includes(i+1))))
             {
                 if(!this.state.BoxX.includes(i+2) && !this.state.BoxO.includes(i+2))
                 {
                 
                 this.AddPoint(i+2);
                 done=true;
                 }
             }
            else if(!done && ((this.state.BoxO.includes(i+2) && this.state.BoxO.includes(i+1)) || (this.state.BoxX.includes(i+2) && this.state.BoxX.includes(i+1))))
             {
                 if(!this.state.BoxX.includes(i) && !this.state.BoxO.includes(i))
               {
               
               this.AddPoint(i);
               done=true;
               }
             }
             else if(!done && ((this.state.BoxO.includes(i+2) && this.state.BoxO.includes(i)) || (this.state.BoxX.includes(i+2) && this.state.BoxX.includes(i))))
              {
               if(!this.state.BoxX.includes(i+1) && !this.state.BoxO.includes(i+1))
               {
               
                this.AddPoint(i+1);
                done=true;
              }
           }
           }
           for(i=1;i<=3;i++)
           {
           
             if(!done && ((!done && this.state.BoxO.includes(i) && this.state.BoxO.includes(i+3)) || (!done && this.state.BoxX.includes(i) && this.state.BoxX.includes(i+3))))
             {
               if(!this.state.BoxX.includes(i+6) && !this.state.BoxO.includes(i+6))
               {
               
               this.AddPoint(i+6);
               done=true;
             }
           }
            else if(!done && ((this.state.BoxO.includes(i+3) && this.state.BoxO.includes(i+6)) || (this.state.BoxX.includes(i+3) && this.state.BoxX.includes(i+6))))
             {
               if(!this.state.BoxX.includes(i) && !this.state.BoxO.includes(i))
               {
                
               this.AddPoint(i);
               done=true;
             }
           }
            else if(!done && ((this.state.BoxO.includes(i) && this.state.BoxO.includes(i+6)) || (this.state.BoxX.includes(i) && this.state.BoxX.includes(i+6))))
             {
               if(!this.state.BoxX.includes(i+3) && !this.state.BoxO.includes(i+3))
               {
                
               this.AddPoint(i+3);
               done=true;
             }
           }
           }
            if(!done && ((this.state.BoxO.includes(1) && this.state.BoxO.includes(5)) || (this.state.BoxX.includes(1) && this.state.BoxX.includes(5))))
             {
            
               if(!this.state.BoxX.includes(9) && !this.state.BoxO.includes(9))
               {
             
               this.AddPoint(9);
               done=true;
               }
             }
            else if(!done && ((this.state.BoxO.includes(5) && this.state.BoxO.includes(9)) || (this.state.BoxX.includes(5) && this.state.BoxX.includes(9))))
             {

                 if(!this.state.BoxX.includes(1) && !this.state.BoxO.includes(1))
               {
               
               this.AddPoint(1);
               done=true;
               }
             }
            else if(!done && ((this.state.BoxO.includes(1) && this.state.BoxO.includes(9)) || (this.state.BoxX.includes(1) && this.state.BoxX.includes(9))))
             {
               if(!this.state.BoxX.includes(5) && !this.state.BoxO.includes(5))
               {
               
               this.AddPoint(5);
               done=true;
               }
             }
           
             if(!done && ((this.state.BoxO.includes(3) && this.state.BoxO.includes(5)) || (this.state.BoxX.includes(3) && this.state.BoxX.includes(5))))
             {
               if(!this.state.BoxX.includes(7) && !this.state.BoxO.includes(7))
               {
                
               this.AddPoint(7);
               done=true;
               }
             }
            else if(!done && ((this.state.BoxO.includes(5) && this.state.BoxO.includes(7)) || (this.state.BoxX.includes(5) && this.state.BoxX.includes(7))))
             {
               if(!this.state.BoxX.includes(3) && !this.state.BoxO.includes(3))
               {
              
               this.AddPoint(3);
               done=true;
               }
             }
            else if(!done && ((this.state.BoxO.includes(3) && this.state.BoxO.includes(9)) || (this.state.BoxX.includes(3) && this.state.BoxX.includes(9))))
             {
                 if(!this.state.BoxX.includes(5) && !this.state.BoxO.includes(5))
               {
            
               this.AddPoint(5);
               done=true;
             }
           }
           if(!done)
           {
           
              let rand = Math.floor(Math.random() * Math.floor(9))+1;

          while(this.state.BoxX.includes(rand) || this.state.BoxO.includes(rand))
          {
            rand = Math.floor(Math.random() * Math.floor(9))+1;
          }
         
          this.AddPoint(rand);
           }
        }
      }
       }

   RenderBoxes =() =>
   {
       return(<div className="XO-all">
           {
            this.state.Boxes.map((i) => {
          return(
            <div key={i} onClick={() => this.AddPoint(i)} className="XO-cont" style={{cursor:'pointer'}}></div>
         )
       })
       }</div>
       )
   }
   PlacePoints = () => 
   {
    return(<div>
    {
     this.state.BoxX.map((i) => {
         let Lvalue=(((i-1)%3)*13);
         let Tvalue=((Math.ceil(i/3)-1)*13);
   return(
    <div key={i} className="XO-point" style={{marginTop:`calc(1.5vw + ${Tvalue}vw)`,marginLeft:`calc(4vw + ${Lvalue}vw)`}}>X</div>
  )
})
}
{
    this.state.BoxO.map((i) => {
        let Lvalue=(((i-1)%3)*13);
        let Tvalue=((Math.ceil(i/3)-1)*13);
  return(
   <div key={i} className="XO-point" style={{marginTop:`calc(1.5vw + ${Tvalue}vw)`,marginLeft:`calc(4vw + ${Lvalue}vw)`}}>O</div>
 )
})
}
</div>
)
   }
  render()
  {
  return (
    <div className="container"> 
    <div className="XO-desc">Want to Play XO give a try here ...!!!</div>
    <div className="XO-boxes">
    {this.RenderBoxes()}
    {this.PlacePoints()}
    </div>
    <div className="XO-reset" onClick={() => this.resetAll()}>Reset</div>
    {this.state.won!=="X"?null:<div className="XO-win">You Won ...!!!</div>}
    {this.state.won!=="O"?null:<div className="XO-win">Better Luck Next Time...!!!</div>}
    {this.state.won!=="Match draw"?null:<div className="XO-win">Seems Though Match Draw...!!!</div>}
    </div>
  )
}
}
export default XoGame;
