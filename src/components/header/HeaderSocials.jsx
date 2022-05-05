import React from 'react'
import {BsLinkedin, BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/francis-okagbue-70a716211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Okagbue00" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/okagbue.francis" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://dribbble.com/frank1000" target="_blank" rel="noreferrer"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials