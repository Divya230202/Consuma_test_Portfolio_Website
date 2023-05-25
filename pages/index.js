import React from 'react';
import '../styles/tailwind.css';
import Hobbies from './Hobbies';
import Languages from './Languages';

const Home = () => {
  return (
    <div>
      <div className="profile-image"></div>
      <div className="profile-name">Divya M</div>
      <div className="profile-title">Student</div>
      <div className="profile-line"></div>
      <div className="profile-about">I am Divya M. A third year Btech Computer Science Student in PES University</div>
    
      <div className="contact-box"></div>
      <div className="contact-txt">Contact</div>

      <div className="Email-box"></div>
      <div className="Email-txt">
        <a href="mailto:divyamaregowda@gmail.com">Email</a>
      </div>
      <div className="email-symbol">&#128279;</div>

      <div className="LinkedIn-box"></div>
      <div className="LinkedIn-txt">
        <a href="https://www.linkedin.com/in/divya-m-852a68249">LinkedIn</a>
      </div>
      <div className="link-symbol">&#128279;</div>

      <div className="Github-box"></div>
      <div className="Github-txt">
        <a href="https://github.com/Divya230202">Github</a>
      </div>
      <div className="git-symbol">&#128279;</div>

      <div className="exp">Experience</div>
      <div className="exp-line"></div>
      <div className="exp-dot1"></div>
      <div className="exp-dot2"></div>
      <div className="exp-dot3"></div>
      <div className="exp-txt1">2016-2017<br></br>Generalist</div>
      <div className="exp-txt2">2018-2019<br></br>Full-Stack Developer</div>
      <div className="exp-txt3">2019-2020<br></br>Front-end Developer</div>

      <div className="skills">Skills</div>
      <div className="s1">Coding</div>
      <div className="s1-box"></div>
      <div className="s1-fill"></div>
      <div className="s2">Problem Solving</div>
      <div className="s2-box"></div>
      <div className="s2-fill"></div>
      <div className="s3">Communication</div>
      <div className="s3-box"></div>
      <div className="s3-fill"></div>
      <div className="s4">Creativity</div>
      <div className="s4-box"></div>
      <div className="s4-fill"></div>
      <Hobbies />
      <Languages/>

    </div>

  );
};

export default Home;
