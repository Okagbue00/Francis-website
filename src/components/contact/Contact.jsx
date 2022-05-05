import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j5f629b', 'template_cwlx0un', form.current, '3XHTQlWdlPcFcc0OI')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>okagbueonyeka20@gmail.com</h5>
            <a href='mailto:okagbueonyeka20@gmail'>Send a message</a>
            </article>

            <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Okagbue Francis</h5>
            <a href='https://www.facebook.com/okagbue.francis'>Send a message</a>
            </article>

            <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>306-361-4666</h5>
            <a href='https://api.whatsapp.com/send?phone=+13063614666'>Send a message</a>
            </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>



    </section>  
    )
}

export default Contact