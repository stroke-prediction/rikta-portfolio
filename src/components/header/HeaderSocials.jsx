import React from 'react'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className="header_socials">
          <a href="https://www.facebook.com/tasnim.sarreha.581" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
          <a href="https://github.com/sarrehatasmin" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
          <a href="https://www.linkedin.com/in/sarreha-tasmin-867948236/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
    </div>
  )
}

export default HeaderSocials
