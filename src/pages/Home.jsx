import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "../styles/Home.css";
import profile from "../assets/profile.jpg";
import EmailIcon from '@material-ui/icons/Email';


function Home() {
  return (
    <div className="home">
        <div className="about">
              <img className='profile' src={profile} alt="profile"/>
            <h2>Hi My Name Is Akash</h2>
        <div className="prompt">
            
            <p>A software developer with passion of learning and creating</p>
            <a href="https://www.linkedin.com/in/akash-goravanakoll-83229921a"><LinkedInIcon/></a>
            <a href="https://github.com/ag9731"><GitHubIcon/></a>
            <a href="https://youtube.com/@Akash_Go_Vlogs"><YouTubeIcon/></a>
            <a href="mailto:goravanakollakash@gmail.com"><EmailIcon/></a>
            <p>Contact : 9380128840</p>
        </div>
        
        </div>
        <div className="skills">
            <ol className='list'>
                <h1>Skills</h1>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>React Js, Wordpress, CSS , NPM, HTML, Bootstrap, MaterialUI</span>
                </li>
            
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>PHP, Laravel-8, Mysql, Python</span>
                </li>
            
                <li className='item'>
                    <h2>Languages</h2>
                    <span>C, Javascript, CPP, PHP, Python</span>
                </li>
                
            </ol>
            <button><a href="/resume.pdf" download="Akash.pdf">Download Resume</a></button>
        </div>
    </div>
  )
}

export default Home
