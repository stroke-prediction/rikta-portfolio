import React from 'react'
import CTA from './CTA'
import './header.css'
import Typical from 'react-typical'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sarreha Tasmin Rikta</h1>
        <h3 className='text-light'>
          <Typical
            steps={[
              'Mobile App Developer',
              2000,
              'Full Stack Developer',
              2000,
              'Front End Developer',
              2000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href='#contact' className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
