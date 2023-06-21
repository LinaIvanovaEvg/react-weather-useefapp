import React from 'react'
import "./Cards.css";


function Cards({weekday, date, temp, description, img, state}) {
  return (
    <div className={state? 'wrapper-cards': 'wrapper-cards-dark'}>
   <div className={ state? 'wrapper-weekday':'wrapper-weekday-dark'} > {weekday} </div>
   <div className='wrapper-date'> {date} </div>
   <div className='wrapper-img'> {img} </div>
   <div className={ state?  'wrapper-tempmax':  'wrapper-tempmax-dark'}> {temp} </div>
   <div className='wrapper-description'> {description} </div>
    </div>
  )
}

export default Cards



