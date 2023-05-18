import React from 'react'
import './HomePage.css'
import Hero from '../../components/Hero/Hero'
import Numbers from '../../components/Numbers/Numbers'

export default function HomePage() {
  return (
    <>
        
        
        <Hero
            cName="hero"
            title="Calculator!"
            text="¡Juega a la calculadora!"
        
            />
            
        <Numbers/>
        
        
    </>
    
  )
}
