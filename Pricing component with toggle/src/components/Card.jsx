import React, { useState } from 'react'
import "./card.css"

const Card = ({title, monthlyPrice, annualPrice, feature, toggle}) => {
  return (
    <article className="card">
        <h3 className='card__title'>{title}</h3>
        {toggle ? <h2 className='card__price'><span>$</span> {monthlyPrice}</h2>:
        <h2 className='card__price'><span>$</span> {annualPrice}</h2>}
        <ul className='card__feature'>
            {feature.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
        <button className='card__cta'>learn more</button>
    </article>
  )
}

export default Card