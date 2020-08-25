import React from 'react';
import './playerlist.css';
import Display from './Display';
import Player from './Player';

const PlayerList = () => {
    let VideoList=[
        {
            name:"'GEEKSCOOP XX' Teaser",
            desc:"An Innovative Intra-Department Function that compiles the qualitative and quantitative analysis of the students with the Challenging Technical and Enthusiastic Non-Technical events.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/GEEKSCOOP XX Teaser.mp4',
            content:"video"
        },
        {
            name:"'DOERS DEPICTS' Promo",
            desc:"The Initiative put forward by our GCT Y's Club students to an interactive talking session with the great indian space scientist Dr.Mylswamy Annadurai, Checkout his inspirational speech in our club's Youtube Channel.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/Interview.mp4',
            content:"video"
        },
        {
            name:"'Our Love Mashup'",
            desc:"A small try by our System Committee members, Just feel the fragrance of love in it.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/love mashup.mp4',
            content:"video"
        },
        {
            name:"'TECHNOVATE XX' Teaser",
            desc:"A Fun Filled National Level Technical Symposium comprising of Technical and Non-Technical events with an active participation of more than 500 Inter-College students, checkout our official Department page for the updates.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/TECHNOVATE XX Teaser.mp4',
            content:"video"
        },
        {
            name:"'Workshop X9' Promo",
            desc:"One day Technical seminar on the topic of Cyber Security conducted by the K7 Computing with a practical hands-on in the afternoon session.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/workshop.mp4',
            content:"video"
        },
        {
            name:"GCT Y's Club Promo",
            desc:"A Promotional video Describing the one year contributions of the Y's Service Club of GCT YOUTH member to the college and our society.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/ys club.mp4',
            content:"video"
        },
        {
            name:"'Cloud Spot' Poster",
            desc:"One Day Technical Session conducted by our Y's Service Club Of GCT YOUTH on the topic of Microsoft Azure Cloud Computing taken over by the technical expert from microsoft.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/cloud%20poster.jpg',
            content:"Photo"
        },
        {
            name:"'One Day Seminar' Poster",
            desc:"One Day Technical Session conducted by our college in the topic of Electric Mobility hosted by the Department of EIE and EEE with our Y's Service Club taken over by the experts from GARC, Chennai.",
            src:'https://github.com/jeyansaran620/My-Promotions/raw/master/host EI.jpg',
            content:"Photo"
        },
        {
            name:"'One Day Workshop' Poster",
            desc:"One day Technical seminar on the topic of Machine Learning conducted by the school of AI, the session was wonderfully taken over by Mr.Navaneeth Malingan .",
            src:'https://raw.githubusercontent.com/jeyansaran620/My-Promotions/master/workshop.jpg',
            content:"Photo"
        },
        {
            name:"'ITA - 5' The Name Reaveal",
            desc:"As the legacy continues the throne updates itself with the new diplomacy, a promo video on the name reveal of batch 5 of ITA.",
            src:'https://raw.githubusercontent.com/jeyansaran620/My-Promotions/master/Intimidators.mp4',
            content:"video"
        },
        {
            name:"'Room - 108' A 3D Model",
            desc:"This Corona lockdown made us to worry about our memories of hostel life and it made me think of generating a virtual 3D model of our hostel room to dive in.",
            src:'https://raw.githubusercontent.com/jeyansaran620/My-Promotions/master/Room 108.mp4',
            content:"video"
        },
        {
            name:"'IT Third year' A 3D Model",
            desc:"A student Evloves in his classroom, but ours is different even the memory of it makes him to evolve a grade higher.",
            src:'https://raw.githubusercontent.com/jeyansaran620/My-Promotions/master/Third year memories.mp4',
            content:"video"
        },
        {
            name:"'Vote Without Ink' Promo",
            desc:"A social activity to analyze the minds of the people in many aspects of life and mentality over it.",
            src:'https://raw.githubusercontent.com/jeyansaran620/My-Promotions/master/vote without ink.mp4',
            content:"video"
        }
    ]
    const shuffle =arr => arr
.map(a => [Math.random(), a])
.sort((a, b) => a[0] - b[0])
.map(a => a[1]);
  
   const RenderList = (Videos) =>
   {
       return (
    <div>
    {
        Videos.map((student, i) => {
return(
   <div key={i} >
   <label className="my-name">{student.name}</label>
   <div className="works-description">
               {student.desc}          
            </div>
  <div className="media-content"> {student.content==="video"?<Player src={student.src}/>:<Display src={student.src} alter={student.name}/>}</div>
   </div>
)
})
}
    </div>
       );
    
   }
        return ( <div>
            <div className="works-heading">
            My Works
            </div>
      {RenderList(shuffle(VideoList))}
</div>
);
}
export default PlayerList;
