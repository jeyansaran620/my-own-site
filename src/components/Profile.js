import React from 'react';
import { Link } from 'react-router-dom';
import Linker from './linker';

const Profile =() => {

  const eduFields=[
      {
          qual:"SSLC",
          school:"Holy Cross Matric",
          link:"https://en.wikipedia.org/wiki/Holy_Cross",
          area:"Oddanchatram",
          year:"2015",
          mark:"95%"
      },   
      {
        qual:"HSLC",
        school:"Akshaya Academy",
        link:"http://www.akshayaacademy.in/",
        area:"Oddanchatram",
        year:"2017",
        mark:"95%"
    },
       {
        qual:"B-Tech IT",
        school:"GCT",
        link:"http://www.gct.ac.in/",
        area:"Coimbatore",
        year:"2021",
        mark:"CGPA-7.65*"
    },
  ]
  
const Techies =[
    {
        value:"C, Java, Python"
    },
    {
        value:"React JS, Express JS, Redux"
    },
    {
        value:"Mysql, Mongo DB"
    }
]
const Parts =[
    {
        value:"Workshop on Ethical Hacking conducted by PSG College of Technology"
    },
    {
        value:"Workshop on Basics of Machine Learning conducted by Coimbatore Institute of Technology"
    },
    {
        value:"Mini-Hackathon Conducted by College of Engineering, Guindy"
    },
    {
        value:"3 days Hackathon Conducted by Kumaraguru College of Technology, Coimbatore"
    }
]
const AI =[
    {
        value:"Data Structures"
    },
    {
        value:"Object Oriented Programming"
    },
    {
        value:"Full Stack Web Designing"
    },
    {
        value:"Database Management"
    }
]

const Achieve =[
    {
        value:"Secured 'First Place' in EX-MATERIA, Geekscoop-X9"
    },
    {
        value:"Grabbed 'Second Place' in Paper Expo, Geekscoop-X9"
    },
    {
        value:"Placed 'First Place' in Promo Video, Geekscoop-X9"
    },
    {
        value:"Recorded the 'Best Idea' of the Hackathon, KCT Tamil Mandram"
    }
]
const Projects =[
    
    {
        title:"Internship Project",
        value:"Educational website to store and share knowledge among the Authorized users of the site with the help of ReactJS, AngularJS, MongoDB and AWS."
    },
    {
        title:"Hobby Games",
        value:"Pure JavaScript single player Games which are build over react where i proved my javascript skillset and innovative thinking.",
        link:"Interact"
    },
]

    const EduField =() => 
    {
        return ( <div>
            {
    eduFields.map((edu, i) => {
      return(
          <div key={i} className="row mb-2 mt-2 mb-sm-2">
            <div className="col-4 col-sm-2">
            {edu.qual}
            </div>
            <div className="col-8 align-middle col-sm-6">
            <a href={edu.link}>{edu.school}</a>,{edu.area}
            </div>
            <div className="col-6 col-sm-1 align-middle">
            {edu.year}
            </div>
            <div className="col-6 col-sm-3 align-right">
            {edu.mark}
            </div>
          </div>
      )
    })
    }
    </div>
    )
    }
   
    const Technical =() => 
    {
        return ( <div>
            {
    Techies.map((tech, i) => {
      return(
          <div key={i} >
           <div className="pb-2"> {tech.value}
          </div>
          </div>
      )
    })
    }
    </div>
    )
    }
    const Participatons =() => 
    {
        return ( <div>
            {
    Parts.map((part, i) => {
      return(
          <div key={i} >
         <div className="pb-3 pt-2">      
          {part.value}
          </div>
          </div>
      )
    })
    }
    </div>
    )
    }
    const AOI =() => 
    {
        return ( <div>
            {
    AI.map((a, i) => {
      return(
          <div key={i} >
          <div className="pb-3">     
          {a.value}
          </div>
          </div>
      )
    })
    }
    </div>
    )
    }
    const Achieved =() => 
    {
        return ( <div>
            {
    Achieve.map((ac, i) => {
      return(
          <div key={i} >
          <div className="pb-3 pt-3">
          {ac.value}
          </div>
          </div>
      )
    })
    }
    </div>
    )
    }
    const Project =() => 
    {
        return ( <div>
            {
    Projects.map((pro, i) => {
      return(
          <div key={i} >
           <div className="pb-2">
         <div className="h6 ">{pro.title}</div>
          <div >
          {pro.value}
          <div className="h5 p-2">
          {pro.link ? <Link to={`/${pro.link}`}>Live Link</Link> : null}
          </div>
          </div>
          </div>
          </div>
      )
    })
    }
    </div>
    )
    }

    const MaayaKannadi =() => 
    {
        return ( 
           <div className="pb-3">
         <div className="h6 pt-3 pb-3">
             A Live Prototype Website Model Build using Express JS in which people can send queries with photographs of Plants/Trees and get more information about them regarding the Tamil Literature References about them.  
         </div>
         <div  className="h6 pb-3"><a href="http://maayakannadi.herokuapp.com/" >Link to Live Website</a></div>
         <div  className="h6 pb-3"><a href="https://github.com/jeyansaran620/Magic_lens" >Link to Git Repository</a></div>
          </div>
    )
    }

    const SparrowShot =() => 
    {
        return ( 
           <div className= "pb-3">
         <div className="h6 pt-3 pb-3">
             A Live Website Build using React Js and Express JS in which people can send queries with URL and get screenshots of those websites, They can also configure the Quality and format of the screenshot from the the frontend.  
         </div>
          <div  className="h6 pb-3"><a href="https://sparrow-shot.netlify.app/" >Link to Live Website</a></div>
          <div  className="h6 pb-3"><a href="https://github.com/jeyansaran620/Sparrow_shot" >Link to Git Repository</a></div>
          </div>
    )
    }

    const List = [
        {
            title:"Educational Qualifications",
            content:EduField()
        },
        {
            title:"Technical Skills",
            content:Technical()
        },
        {
            title:"Area Of Interest",
            content:AOI()
        },
        {
            title:"Achievements",
            content:Achieved()
        },
        {
            title:"Participatons",
            content:Participatons()
        },
        {
            title:"Projects",
            content:Project()
        },
        {
            title:"Maaya Kannadi",
            content:MaayaKannadi()
        },
        {
            title:"Sparrow Shot",
            content:SparrowShot()
        }
    ]
const GiveList = () => 
{
    return ( 
List.map((li, i) => {
  return(
    <div key={i} className="col-12 col-sm-6 border text-center rounded box mt-sm-0 mt-sm-1 mb-sm-0 mb-sm-1">
    <div className="font-weight-bold m-2 border-bottom pb-2"> 
      {li.title}
    </div>
     {li.content}
    </div>
  )
})
)
}

  return (
    <div>
    <div className="container">
    <div  className="row row-content"> 
      {GiveList()}
    </div>
    </div>
    
    <Linker page={0} />
    </div>
  )
}

export default Profile;
