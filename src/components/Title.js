import React from 'react'

const Title = ({title,stitle}) => {
  return (
    <div className="section-title">
        <h2>
            {title} <span>{stitle}</span>
        </h2>
      </div>
  )
}

export default Title