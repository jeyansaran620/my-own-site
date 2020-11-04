import React from 'react';
import { Link } from 'react-router-dom';
import '../css/linker.css';

const Items = [ 
  {
    content:"My Profile",
    link:"Home",
    icon:"user",
    message: "Analyze me with the things i know and the path i have crossed over till now, the whole technical way of Expressing the complications in me, Have a look at my 'Profile'..."
  },
   {
    content:"About Me",
    link:"About",
    icon:"info-circle",
    message: "To know more about how the site is built and the Tech stack used here and aslo to know about my social media links, visit 'About me' Page."
  },
  {
    content:"My Promotions",
    link:"Promotions",
    icon:"film",
    message: "Not only a Programmer i have some experience in designing and promotional activities, To get my stuff over videos and poster visit 'My Promotions'...."
  },
  {
    content:"Have Fun",
    link:"Interact",
    icon:"gamepad",
    message: "Having a Hobby is not so bad, what if! one had spend some time on javascript to make it playable, Visit 'Have Fun' to play the Games i have created..."
  }
 ]


const Linker = ({page}) =>{
  return ( 
      <div className="container">       
      {
     Items.filter((item,i) => i !== page ).map((item, i) => {
   return(
    <div key={i} className="row justify-content-center linkerBox m-2"> 

    <div className="col-10 linkerDet p-4">
        {item.message}
    </div>
      <div className={`col-2 m-auto text-center linkerIco ${i%2 ===0 ? 'order-first' : '' }`}>
      <Link to={`/${item.link}`} className={`fa fa-${item.icon} fa-lg`} style={{color: "#464866"}}></Link>
      </div>
  </div>
  )
})
}
      </div>
  );
}


export default Linker;
