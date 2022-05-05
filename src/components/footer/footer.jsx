import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'



const footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>Francis</a>
      <ul className='permalinks'>
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>


      </ul>

      <div className="footer__socials">
        <a href='https://github.com/Okagbue00' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://www.facebook.com/okagbue.francis' target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/francis-okagbue-70a716211/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://dribbble.com/frank1000" target="_blank" rel="noreferrer"><FiDribbble/></a>


      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer