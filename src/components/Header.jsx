import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">KS Kraków Południe</div>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Start</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>O nas</a>
            <a href="#classes" onClick={() => setMobileMenuOpen(false)}>Zajęcia</a>
            <a href="#coaches" onClick={() => setMobileMenuOpen(false)}>Trenerzy</a>
            <a href="#membership" onClick={() => setMobileMenuOpen(false)}>Członkostwo</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
