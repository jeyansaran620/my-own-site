import React from 'react';

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
  const Potency =[
      {
          value:"Punctual",
          link:"https://en.wikipedia.org/wiki/Punctuality"
      },
       {
        value:"Determined",
        link:"https://en.wikipedia.org/wiki/Determination"
    },
     {
        value:"Optimal",
        link:"https://en.wikipedia.org/wiki/Optimist"
    },
    {
        value:"Creative",
        link:"https://en.wikipedia.org/wiki/Creativity"
    },
  ]
const Techies =[
    {
        value:"C, Java"
    },
    {
        value:"HTML, CSS"
    },
    {
        value:"React JS"
    },
    {
        value:"Mysql"
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
    }
]
const AI =[
    {
        value:"Data Structures"
    },
    {
        value:"Web Designing"
    },
    {
        value:"RDBMS Mysql"
    }
]

const Achieve =[
    {
        value:"Secured First Place in EX-MATERIA, Geekscoop-X9"
    },
    {
        value:"Grabbed Second Place in Paper Expo, Geekscoop-X9"
    },
    {
        value:"Placced First Place in Promo Video, Geekscoop-X9"
    }
]
const Projects =[
    {
        title:"Mini Project",
        value:"Intrusion Detection System over Network with the help of Random Forest Method Implementation."
    },
    {
        title:"Internship Project",
        value:"Educational website to store and share knowledge among the Authorized users of the site with the help of ReactJS, AngularJS, MongoDB and AWS."
    }
]

   const Objectives =() => {
    return (
    <p className="col-11 text-align-center">
    Looking forward to work in a Dynamic and challenging environment with a putative organization to utilize my creativity and innovative thinking for the benefit of the organization and myself.  
    </p> ) }

    const EduField =() => 
    {
        return ( <div>
            {
    eduFields.map((edu, i) => {
      return(
          <div key={i} className="row mb-3 mb-sm-2">
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
        
    const Potencies =() => 
    {
        return ( <div>
            {
    Potency.map((pot, i) => {
      return(
          <div key={i} >
          <div className="pl-4 pb-2">    
          <a href={pot.link}>{pot.value}</a>
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
           <div className="pl-4 pb-2"> {tech.value}
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
         <div className="pl-4 pb-2 pr-2">      
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
          <div className="pl-4 pb-3">     
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
          <div className="pl-4 pb-3 pt-3">
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
           <div className="pl-4 pb-3">
         <div className="h6 pl-2">{pro.title}</div>
          <div >
          {pro.value}
          </div>
          </div>
          </div>
      )
    })
    }
    </div>
    )
    }
    const List = [
        {
            title:"Objective",
            content:Objectives()
        },
        {
            title:"Educational Qualifications",
            content:EduField()
        },
        {
            title:"Personal Potency",
            content:Potencies()
        },
        {
            title:"Technical Skills",
            content:Technical()
        },
        {
            title:"Participatons",
            content:Participatons()
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
            title:"Projects",
            content:Project()
        }
    ]
const GiveList = () => 
{
    return ( 
List.map((li, i) => {
  return(
    <div key={i} className="col-12 col-sm-6 border rounded box mt-sm-0 mt-sm-1 mb-sm-0 mb-sm-1">
    <div className="font-weight-bold m-2 pl-2 border-bottom pb-2"> 
      {li.title}
    </div>
     {li.content}
    </div>
  )
})
)
}

  return (
    <div className="container">
    <div  className="row row-content"> 
      {GiveList()}
    </div>
    </div>
  )
}

export default Profile;
