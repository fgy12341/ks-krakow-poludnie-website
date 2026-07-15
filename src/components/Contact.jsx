import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-subtitle">Mamy pytania? Chętnie się odezwiemy</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <FaPhone className="icon" style={{ color: 'var(--blue-dark)' }} />
              <h3>Telefon</h3>
              <p>+48 12 123 45 67</p>
              <p>+48 12 123 45 68</p>
            </div>
            <div className="info-card">
              <FaEnvelope className="icon" style={{ color: 'var(--red-orange)' }} />
              <h3>Email</h3>
              <p>info@kskrakowpoludnie.pl</p>
              <p>kontakt@kskrakowpoludnie.pl</p>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt className="icon" style={{ color: 'var(--green)' }} />
              <h3>Adres</h3>
              <p>ul. Sportowa 123</p>
              <p>31-999 Kraków, Polska</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Imię i Nazwisko</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Wpisz swoje imię i nazwisko"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="twój@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Temat</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Temat wiadomości"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Napisz swoją wiadomość..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Wyślij</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
