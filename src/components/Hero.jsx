import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Klub Sportowy Kraków Południe</h1>
          <p className="hero-subtitle">
            Rozwijaj swoje umiejętności sportowe i zbuduj wspólnotę z pasjonatami sportu
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Dołącz do nas</button>
            <button className="btn btn-secondary">Dowiedz się więcej</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="logo-placeholder">KS</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
