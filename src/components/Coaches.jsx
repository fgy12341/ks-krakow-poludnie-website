import React from 'react'
import './Coaches.css'

const Coaches = () => {
  const coaches = [
    {
      name: 'Marek Kowalski',
      specialty: 'Piłka Nożna',
      experience: '15 lat doświadczenia',
      bio: 'Ekspert w treningu młodzieży i dorosłych. Były zawodnik profesjonalny.'
    },
    {
      name: 'Anna Nowak',
      specialty: 'Koszykówka',
      experience: '12 lat doświadczenia',
      bio: 'Specjalistka w szkoleniu techniki i taktyki kosykówki.'
    },
    {
      name: 'Piotr Lewandowski',
      specialty: 'Siatkówka',
      experience: '18 lat doświadczenia',
      bio: 'Certyfikowany trener międzynarodowy. Przygotowuje zawodników do konkursów.'
    },
    {
      name: 'Kamil Ostrowski',
      specialty: 'Judo',
      experience: '20 lat doświadczenia',
      bio: 'Mistrz judo i certyfikowany instruktor. Uczy dzieci i dorosłych.'
    },
    {
      name: 'Ewa Szymańska',
      specialty: 'Pływanie',
      experience: '10 lat doświadczenia',
      bio: 'Trenuje pływaków od poziomu początkującego do zaawansowanego.'
    },
    {
      name: 'Jakub Wójcik',
      specialty: 'Tenisa Stołowego',
      experience: '14 lat doświadczenia',
      bio: 'Zawodnik i trener z międzynarodowym doświadczeniem.'
    }
  ]

  return (
    <section id="coaches" className="coaches section">
      <div className="container">
        <h2 className="section-title">Nasi Trenerzy</h2>
        <p className="section-subtitle">Doświadczeni profesjonaliści gotowi do wspierania Twojego rozwoju</p>
        
        <div className="coaches-grid">
          {coaches.map((coach, index) => (
            <div key={index} className="coach-card">
              <div className="coach-avatar">{coach.name.split(' ').map(n => n[0]).join('')}</div>
              <h3>{coach.name}</h3>
              <p className="specialty">{coach.specialty}</p>
              <p className="experience">{coach.experience}</p>
              <p className="bio">{coach.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coaches
