import React,{Component} from 'react';
import './Player.css';

class Player extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      play:"play",
      volume:"unmute",
      orangeWidth:0,
      currentTime:0,
      videoDuration:0
    }
  }
  onVolumeChange = () => 
 {  
   if(this.state.volume==="unmute")
   {
      this.setState({volume:"mute"});
      this.player.muted=true;
   }
   else
   {
    this.setState({volume:"unmute"});
      this.player.muted=false;
   }
 }
  onPlayChange = () => 
 {  
   if(this.state.play==="play")
   {
      this.setState({play:"pause",videoDuration:this.player.duration});
      this.player.play();
   }
   else
   {
    this.setState({play:"play"});
    this.player.pause();
   }
 }
 onFullScreen =() => 
 {
   this.player.requestFullscreen();
 }
 onTimeChange =() =>
 {
    let value=(this.player.currentTime/this.player.duration)*100;
   this.setState({orangeWidth:value,currentTime:Math.floor(this.player.currentTime)});
   if(this.player.ended)
   {
    this.setState({play:"play"});
   }
 }
 getTimeChange = (event) =>
 {
    this.player.currentTime=this.player.duration*((event.pageX-this.player.getBoundingClientRect().left)/this.player.getBoundingClientRect().width);
  
 }
render(){
  return (
    <div>
    <div className="cvideo">
    <video className="video" src={this.props.src} ref={player =>{this.player=player}}  onClick={this.onPlayChange} onTimeUpdate={this.onTimeChange}/>
    <div className="controls">
        <div className="bar"   onClick = {event => {
          this.getTimeChange(event)}
          }>
            <div className="orange" style={{width:`${this.state.orangeWidth}%`}}></div>    
        </div>
        <label className="time">{this.state.currentTime}s</label>
        <div className="buttons">
            <button id="mute" className={this.state.volume} onClick={this.onVolumeChange} ></button>   
            <button id="play" className={this.state.play} onClick={this.onPlayChange}></button>  
            <button className="fullscreen" onClick={this.onFullScreen}></button>        
        </div>
        <label className="time">-{Math.floor(this.state.videoDuration)-this.state.currentTime}s</label>
    </div></div>
    </div>
  )
}
}

export default Player;
