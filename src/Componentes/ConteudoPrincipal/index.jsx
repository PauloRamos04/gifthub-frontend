import React from 'react'
import style from './styles/principal.module.css'
import Card from '../Cards'

export default function ConteudoPrincipal() {
  return (        
    <main className={style.container}>
        <div className={style.container_titulos}>
            <h1>Consoles</h1>
            <div className={style.container_cards}>
                <Card
                  title="Card 1"
                  description="Description of Card 1"
                  image="https://via.placeholder.com/150"
                />
            </div>
    </div>
        <div className={style.container_titulos}>
            <h1>Serviços</h1>
                <div className={style.container_cards}>
                <Card
                    title="Card 2"
                    description="Description of Card 2"
                    image="https://via.placeholder.com/150"
                />
                </div>
        </div>
        <div className={style.container_titulos}>
            <h1>PC</h1>
                <div className={style.container_cards}>
                    <Card
                      title="Card 3"
                      description="Description of Card 3"
                      image="https://via.placeholder.com/150"
                    />
                </div>
        </div>
        <div className={style.container_titulos}>
            <h1>Mobile</h1>
                <div className={style.container_cards}>
                    <Card
                      title="Card 3"
                      description="Description of Card 3"
                      image="https://via.placeholder.com/150"
                    />
                </div>
        </div>
    </main>
  )
}
