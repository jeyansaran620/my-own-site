import React from 'react';
import './Profile.css';
const Profile =() => {
    const Contacts =[
        {
           src:require('./e-mail.png'),
           alt:"mail",
           content:"jeyansaran620@gmail.com",
           link:"mailto:jeyansaran620@gmail.com"
        },
        {
            src:require('./call.png'),
            alt:"call",
            content:"+919677990745",
            link:"tel:+919677990745"
         },
         {
            src:require('./linked-in.png'),
            alt:"linked-in",
            content:"linkedin.com/in/jeyansaran620",
            link:"http://www.linkedin.com/in/jeyansaran620"
         },
          {
            src:require('./github.png'),
            alt:"github",
            content:"github.com/jeyansaran620",
            link:"http://www.github.com/jeyansaran620"
         }
    ]
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
        year:"2021*",
        mark:"CGPA-7.9*"
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



  const ContactList =() => 
  {
      return ( <div className="profile-contact-info-box">
          {
  Contacts.map((con, i) => {
    return(
        <div key={i} className="profile-contact-info">
    <img src={con.src}alt={con.alt}/>
    <a href={con.link}>
    {con.content}
    </a>
    </div>
    )
  })
  }
  </div>
  )
  }
    const EduField =() => 
    {
        return ( <div>
            {
    eduFields.map((edu, i) => {
      return(
          <div key={i} >
          <div className="educational-field">
            <div className="educational-qual">
            {edu.qual}
            </div>
            <div className="educational-school">
            <a href={edu.link}>
            {edu.school}</a>,
            <div>{edu.area}</div>
            </div>
            <div className="educational-year">
            {edu.year}
            </div>
            <div className="educational-mark">
            {edu.mark}
            </div>
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
          <div className="potency">    
    <img src={require('./point.png')}alt="point"/><a href={pot.link}>{pot.value}</a>
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
          <div className="potency">    
    <img src={require('./point.png')}alt="point"/> {tech.value}
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
          <div className="potency">    
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
          <div className="potency">    
          <img src={require('./point.png')}alt="point"/>  {a.value}
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
          <div className="potency">    
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
          <div className="potency">   
         <div className="Project-title"> {pro.title}</div>
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
    const List =[
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
      <div key={i} className="profile-container" >
      <div className="objective-title">
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
    <div className="my-profile-bg">
    <div className="my-profile-all">
    <div className="profile-container">
    <div className="my-profile-name">Jeyan K</div>
    </div>
    <div className="profile-container">
    <div className="profile-contact">
    <div className="profile-contact-name">
    Contact Me
    </div>
    {ContactList()}
    </div>
    </div>
    <div className="profile-container">
    <div className="objective-title">
    Objective
    </div>
    <div className="objective-content">
    Looking forward to work in a Dynamic and challenging environment with a putative organization to utilize my creativity and innovative thinking for the benefit of the organization and myself.  
    </div>
    </div>   
  {GiveList()}
    </div></div>
    </div>
  )
}

export default Profile;
