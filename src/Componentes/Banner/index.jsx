import React from 'react'
import './styles/banner.module.css'
import banner from './assets/Banner.png'

export default function Banner() {
  return (
    <div>
        <img className='foto' src={banner} alt="Banner de itens" />
    </div>
  )
}
