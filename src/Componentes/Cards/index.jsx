import React from 'react'

export default function Cards() {
  return (
    function Card({ title, description, image }) {
        return (
          <div className="card">
            <img src={image} alt="Card" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{title}</h2>
              <p className="card-description">{description}</p>
            </div>
          </div>
        );
      }
  )
}
