import React, {useRef, useState} from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs.sendForm('service_meqgiic', 'template_iqsu67z', form.current, 'eovWSVqE0qAKxua-2')
      .then(() => {
          setLoading(false);
        e.target.reset();
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your message has been sent!',
        showConfirmButton: false,
        timer: 2000
      })
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon"/>
            <h4>Email</h4>
            <h5>tasmin.sarreha@gmail.com</h5>
            <a href="mailto:tasmin.sarreha@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_icon"/>
            <h4>Messenger</h4>
            <h5>sarreha_tasmin</h5>
            <a href="https://m.me/tasnim.sarreha.581" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_icon"/>
            <h4>Whatsapp</h4>
            <h5>+8801796009868</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801796009868" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button className='btn btn-primary' type='submit'>{ loading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
