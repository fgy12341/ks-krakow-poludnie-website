import React from 'react'
import './About.css'

const About = () => {
  const values = [
    {
      title: 'Pasja',
      description: 'Kochamy sport i dzielimy się tą pasją z każdym członkiem naszego klubu.',
      color: 'var(--red-orange)'
    },
    {
      title: 'Wspólnota',
      description: 'Budujemy silną społeczność sportowców, którzy się wspierają i motywują.',
      color: 'var(--green)'
    },
    {
      title: 'Profesjonalizm',
      description: 'Nasi doświadczeni trenerzy zapewniają najwyższy poziom szkolenia.',
      color: 'var(--blue-dark)'
    },
    {
      title: 'Dostępność',
      description: 'Oferujemy zajęcia dla wszystkich poziomów umiejętności i grup wiekowych.',
      color: 'var(--yellow)'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">O nas</h2>
        <p className="section-subtitle">Poznaj wartości i misję Klubu Sportowego Kraków Południe</p>
        
        <div className="about-text">
          <p>
            Klub Sportowy Kraków Południe jest wiodącą instytucją sportową w południowej części Krakowa,
            dedykowaną promowaniu zdrowego stylu życia i doskonałości sportowej. Od naszego założenia
            zgromadziliśmy tysiące pasjonatów sportu wszystkich wieków.
          </p>
          <p>
            Naszą misją jest zapewnienie dostępu do wysokiej jakości szkolenia sportowego, budowanie
            silnej wspólnoty i inspirowanie każdego członka do osiągnięcia swoich celów.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card" style={{ borderTopColor: value.color }}>
              <h3 style={{ color: value.color }}>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
