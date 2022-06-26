import React from 'react'
import './footer.css'
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer_logo'>SARREHA TASMIN RIKTA</a>
      <ul className="premalinks">
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/tasnim.sarreha.581" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://github.com/sarrehatasmin" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
          <a href="hhttps://www.linkedin.com/in/sarreha-tasmin-867948236/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
      <div className="footer_copyright">
        <small>
          Copyright &copy; Sarreha Tasmin Rikta. All rights reserved. 
        </small>
      </div>
    </footer>
  )
}

export default Footer
