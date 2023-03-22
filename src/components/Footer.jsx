import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';


function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <a href="https://www.instagram.com/akash_m_g0/"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/akash-goravanakoll-83229921a"><LinkedInIcon/></a>
            <a href="https://github.com/ag9731"><GitHubIcon/></a>
            <a href="https://youtube.com/@Akash_Go_Vlogs"><YouTubeIcon/></a>
            <a href="mailto:goravanakollakash@gmail.com"><EmailIcon/></a>
        </div>
      <p>Akash Maruti Goravanakoll</p>
    </div>
  )
}

export default Footer
