import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
import './navBar.css';
 
class NavigBar extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      menuOption:"Menu",
      menuClass:"full"
    }
  }

   onMenuChange = () => 
 {  
   if(this.state.menuOption==="Menu")
   {
      this.setState({menuOption:"X",menuClass:"half"});
   }
   else
   {
    this.setState({menuOption:"Menu",menuClass:"full"});
   }
 }
 onNavChange = (link) => {
   this.onMenuChange();
   this.props.history.push(`/${link}`)
 }
 Items = [ 
  {
    content:"My Profile",
    link:""
  },
   {
    content:"About Me",
    link:"About"
  },
  {
    content:"My Promotions",
    link:"Promotions"
  },
  {
    content:"Have Fun",
    link:"Interact"
  }
 ]
 RenderList = () =>
 {
     return (     
  <div>
  {
     this.Items.map((student, i) => {
   return(
        <div key={i}>
        <li onClick={() => this.onNavChange(student.link)}>{student.content}</li>
        </div>  
  )
})
}
</div>
     ); 
 }

render(){
  return (
    <nav className="navBar">
    <label className="my-name">Just Complicated</label>
    <label className="menu"  onClick={this.onMenuChange}>{this.state.menuOption}</label>
    <ul className={this.state.menuClass}>
        {this.RenderList()}
    </ul>
    </nav>
  );
}
}
export default withRouter(NavigBar);
