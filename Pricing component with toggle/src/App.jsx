import React, { useState } from 'react'
import Card from './components/card'
import { data } from './data.js'
import bgTop from "./images/bg-top.svg";
import bgBottom from "./images/bg-bottom.svg";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  }

  return (
    <main>
      <div className='bg__top'>
        <img src={bgTop} alt="" />
      </div>
      <div className='pricing__header'>
        <h1>Our Pricing</h1>
        <div className='toggle'>
          <span>Annually</span>
          <label className="switch">
            <input type="checkbox" checked={toggle} onChange={handleChange} />
            <span className="slider round"></span>
          </label>
          <span>Monthly</span>
        </div>

      </div>
      <section className='pricing__container'>

        {data.map((item, index) => {
          return <Card key={index} {...item} toggle={toggle} />
        })}

      </section>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href="https://akash-portfolio-website.netlify.app" target='_blank' rel='noreferrer'>Akash</a>.
      </div>

      <div className='bg__bottom'>
        <img src={bgBottom} alt="" />
      </div>
    </main>
  )
}

export default App