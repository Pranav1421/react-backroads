import React from 'react'
import Title from './Title'
import { tours } from './data'
const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title title='Featured' stitle='Tours'/>


    <div className="section-center featured-center">

    {tours.map((tour)=>{
      const {id,image,info,title,price,duration,location,date} = tour
      return (
        <article className="tour-card"
        key={id}>
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>
            {info}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {location}
            </p>
            <p>{duration} days</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>
      )
    })}

      

      
    </div>
  </section>
  )
}

export default Tours