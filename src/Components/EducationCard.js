import React from 'react'

function EducationCard({ institutionName,
    university,
    location,
    status,
    gpaScale,
    gpaSecured,
    joining,
    leaving }) {
  return (
    <div className="item">
        <div className="about-txtx">
          <h5>Institution :</h5> 
          <span className='about-span'> { institutionName }</span>
          <h5> Name of University :</h5>
          <span className='about-span'> { university }</span>
          <h5>Location :</h5>
          <span className='about-span'> { location }</span>
          <h5>Status :</h5>
          <span className='about-span'> { status }</span>
          <h5>GPA :</h5>
          <span className='about-span'> { gpaSecured} / {gpaScale }</span>
          <h5>Duration :</h5>
          <span className='about-span'> { joining } - {leaving}</span>
        </div>
      </div>
  )
}

export default EducationCard
