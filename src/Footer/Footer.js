import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
 
class Footer extends Component{
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
  <div className="Footer">
  {
     this.Items.map((student, i) => {
   return(
        <div key={i} className="Footer-items">
        <li onClick={() =>this.props.history.push(`/${student.link}`)}>{student.content}</li>
        </div>  
  )
})
}
</div>
     ); 
 }

render(){
  return (
    <div className="Footer-nav">
        {this.RenderList()}
    </div>
  );
}
}

export default withRouter(Footer);
