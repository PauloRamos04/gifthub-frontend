import React from 'react'

export default function Cards() {
  return (
    function Card({ css, descricao, image }) {
        return (
        <div className={css}>
        <img src={image} alt={descricao} />
      </div>
        );
      }
  )
}
