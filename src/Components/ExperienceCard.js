import React from 'react'

function ExperienceCard({ company,
  location,
  title,
  joining,
  leaving, }) {
  return (
    <div className="item">
        <div className="about-txtx">
          <h5>Company :</h5>
          <span className='about-span'> { company }</span>
          <h5> Designation :</h5>
          <span className='about-span'> { title }</span>
          <h5>Location :</h5>
          <span className='about-span'> { location }</span>
          <h5>Duration :</h5>
          <span className='about-span'> { joining } - {leaving}</span>
        </div>
      </div>
  )
}

export default ExperienceCard
