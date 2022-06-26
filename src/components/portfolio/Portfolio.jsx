import React from 'react'
import './portfolio.css'
import NOTE from '../../assets/note.png'
import EMPLOYEE from '../../assets/employee.png'
import PLANET from '../../assets/planet.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={NOTE} alt="Stroke Web" />
          </div>
          <h3>Store Note</h3>
          <a className='btn' href="https://github.com/sarrehatasmin/RN_DevSkills/tree/main/DemoApp" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={PLANET} alt="Stroke Web" />
          </div>
          <h3>Planet Details (Mobile)</h3>
          <a className='btn' href="https://github.com/sarrehatasmin/RN_DevSkills/tree/main/planet-app" target='_blank' rel="noreferrer">Github</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={EMPLOYEE} alt="Stroke Web" />
          </div>
          <h3>Store Employee Records</h3>
          <a className='btn' href="https://github.com/sarrehatasmin/RN_DevSkills/tree/main/employee-app" target='_blank' rel="noreferrer">Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
