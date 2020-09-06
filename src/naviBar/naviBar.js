import React from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler,Jumbotron,
  Collapse, NavItem,} from 'reactstrap';
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';

class NavigBar extends React.Component{
  constructor(props)
  {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
   
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

 Items = [ 
  {
    content:"My Profile",
    link:"Home",
    icon:"user"
  },
   {
    content:"About Me",
    link:"About",
    icon:"info-circle"
  },
  {
    content:"My Promotions",
    link:"Promotions",
    icon:"film"
  },
  {
    content:"Have Fun",
    link:"Interact",
    icon:"gamepad"
  }
 ]
 RenderList = () =>
 {
     return (   
      <Nav navbar className="ml-auto">
  {
     this.Items.map((item, i) => {
   return(
        <NavItem key={i} className="m-1">
         <NavLink className="nav-link" to={`/${item.link}`}><span className={`fa fa-${item.icon} fa-md`}></span>  {item.content}</NavLink>
        </NavItem>  
  )
})
}
</Nav>   
     ); 
 }

render(){
  return (
    <>
    <Navbar dark expand="md">
        <div className="container">
            <NavbarBrand className="mr-auto" href="/Home">Just Complicated</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                {this.RenderList()}
            </Collapse>
        </div>
    </Navbar>
    <Jumbotron>
      <div className="container">
          <div className="row row-header">
              <div className="col-12 col-md-8">
                  <h2>Jeyan K</h2>
                  <p>An Enthusiastic Learner who want to explore in all the aspects of updating his knowledge and experience to the very next level, having the only goal of "Not being the same as Yesterday".</p>
              </div>
          </div>
      </div>
  </Jumbotron>
    </>
  );
}
}
export default withRouter(NavigBar);
