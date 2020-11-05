import React from 'react';
import Games from './Games';
import Linker from './linker';

import '../css/About.css';

const About =() => {
    return (
        <div> 
            <div className="heading">
                About the site
            </div>
            <br/>
            <div className="container">
                <div className="row row-content align-items-center">
                    <div  className="col m-2">
                        <h2>The Build</h2>
                        <p>A simple example of React which covers multiple aspects of myself related to the technical side as well as the extra curricular side of me. This Site is Build with the help of React router to switch in-between the pages. Embedded Reactstrap makes the site Responsive and lively, it also includes my own Video player in the promotional page, where i showcased my stuff with designing.</p>
                    </div>
                </div>
                <Games  className="row"/>
            </div>
            <div className="heading">LinkedIn</div>
            <br/>
            <div className="master-piece">
                <div className="linkedin-trail">
                    <img src="./photos/linkedin.jpg" alt="linkedin-backdrop" />
                    <img className="profile-pic" src="./photos/profile_pic.jpg" alt="linkedin-profile" />
                    <div className="profile-desc">
                        <div className="profile-name">
                            jeyan k 
                            <br/>
                        </div>
                            Indian | Learner | Front End Developer | Creator
                        <div>Coimbatore, Tamil Nadu, India</div>
                    </div>
                    <div className="college-name">Government College of Technology, Coimbatore
                        <br/>
                        <br/>
                        <div className="profile-button"><a href="https://www.linkedin.com/in/jeyansaran620">view profile</a></div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="heading">Github</div>
            <br/>
            <div className="github">
                <div className="github-trail">
                    <img className="github-logo" src="./photos/github.png" alt="github-logo"/>
                    <div className="gh-uname"><a href="https://www.github.com/jeyansaran620">jeyansaran620</a></div>
                    <img className="gh-status" src="./photos/github-status.png" alt="github-status"/>
                </div>
                <div className="repos">Popular repositories</div>
                <div className="repo-box">
                    <div className="repo">
                        <div className="repo-name"><a href="https://github.com/jeyansaran620/my-own-site">my-own-site</a></div>
                    </div> 
                    <div className="repo">
                        <div className="repo-name"><a href="https://github.com/jeyansaran620/Sparrow_shot">Sparrow_shot</a></div>
                    </div>
                    <div className="repo">
                        <div className="repo-name"><a href="https://github.com/jeyansaran620/Magic_lens">Magic_lens</a></div>
                    </div>
                    <div className="repo">
                        <div className="repo-name"><a href="https://github.com/jeyansaran620/Redux_with_React">Redux_with_React</a></div>
                    </div>
                    <div className="repo">
                        <div className="repo-name"><a href="https://github.com/jeyansaran620/Practise_DSA">Practise_DSA</a></div>
                    </div>
                    <div className="repo">
                        <div className="repo-name"><a href="https://github.com/jeyansaran620/My-Promotions">My-Promotions</a></div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="heading">Instagram</div>
            <br/>
            <div className="insta-trail">
                <img className="insta-logo" src="./photos/instagram.png" alt="insta-logo"/>
                <img className="insta-name" src="./photos/insta-name.png" alt="insta-name"/>
                <img className="insta-profile" src="./photos/insta-profile.jpg" alt="insta-profile"/>
                <div className="insta-button-con">
                    <div className="insta-button"><a href="https://instagram.com/itz_my_beta_version">Follow</a></div>
                </div>
                <div className="insta-profile-name">itz_my_beta_version</div>
                <div className="insta-desc">
                    <div className="insta-desc-h">JustComplicated</div>
                    GCTian
                    <span role="img" aria-label="heart">💜</span>
                    <span role="img" aria-label="thumbs-up">👍</span>
                    Thalapathian
                    <span role="img" aria-label="heart">💜</span>
                    <div> 
                        Time pass editor
                        <span role="img" aria-label="smiley">😁</span>
                        My ராஐாத்தி`s ராஐா
                    </div>
                    <div>தெய்வத்தால் ஆகா தெனினும் முயற்ச்சிதன்</div>
                    மெய்வருத்த கூலி தரும்
                </div>
            </div>
            <br/>
     
            <Linker page={1} />
        </div>
    );
};

export default About;
