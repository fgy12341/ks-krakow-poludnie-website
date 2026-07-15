import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Klub Sportowy Kraków Południe</h4>
            <p>Rozwijaj swoje umiejętności sportowe i zbuduj wspólnotę z pasjonatami sportu.</p>
          </div>
          <div className="footer-section">
            <h4>Szybkie Linki</h4>
            <ul>
              <li><a href="#home">Start</a></li>
              <li><a href="#about">O nas</a></li>
              <li><a href="#classes">Zajęcia</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Zajęcia</h4>
            <ul>
              <li><a href="#classes">Piłka Nożna</a></li>
              <li><a href="#classes">Koszykówka</a></li>
              <li><a href="#classes">Judo</a></li>
              <li><a href="#classes">Pływanie</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Śledź nas</h4>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Klub Sportowy Kraków Południe. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
