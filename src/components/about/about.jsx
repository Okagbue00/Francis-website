import React from 'react'
import './about.css'
import ME from '../../assets/20200728_195808.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='About Image' />
          </div>

        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ years</small>
              </article>

              <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h5>Pursuing Degree</h5>
              <small>Computer Science</small>
              </article>

              <article className='about__card'>
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
              </article>
        </div>

        <p>
          I'm a Web Developer and Web Designer with a passion for creating beautiful and functional websites. I have a strong background in Figma, HTML, CSS, JavaScript and React. I'm based in Canada. 
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        </div>
      

    </section>

  )
}

export default about