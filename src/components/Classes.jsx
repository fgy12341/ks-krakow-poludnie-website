import React from 'react'
import './Classes.css'

const Classes = () => {
  const classes = [
    {
      name: 'Piłka Nożna',
      schedule: 'Poniedziałek i Czwartek 18:00-19:30',
      level: 'Wszystkie poziomy',
      ageGroup: '6+',
      coach: 'Marek Kowalski'
    },
    {
      name: 'Koszykówka',
      schedule: 'Wtorek i Piątek 17:00-18:30',
      level: 'Średniozaawansowani',
      ageGroup: '10+',
      coach: 'Anna Nowak'
    },
    {
      name: 'Siatkówka',
      schedule: 'Środa i Sobota 18:00-19:30',
      level: 'Zaawansowani',
      ageGroup: '12+',
      coach: 'Piotr Lewandowski'
    },
    {
      name: 'Judo',
      schedule: 'Poniedziałek, Środa, Piątek 17:00-18:30',
      level: 'Wszyscy',
      ageGroup: '4+',
      coach: 'Kamil Ostrowski'
    },
    {
      name: 'Pływanie',
      schedule: 'Wtorek-Piątek 16:00-17:00',
      level: 'Początkujący-Zaawansowani',
      ageGroup: '5+',
      coach: 'Ewa Szymańska'
    },
    {
      name: 'Tenisa Stołowego',
      schedule: 'Czwartek i Sobota 17:00-18:30',
      level: 'Wszyscy',
      ageGroup: '7+',
      coach: 'Jakub Wójcik'
    }
  ]

  const colors = [
    'var(--blue-dark)',
    'var(--green)',
    'var(--red-orange)',
    'var(--yellow)',
    'var(--blue-light)',
    'var(--green)'
  ]

  return (
    <section id="classes" className="classes section">
      <div className="container">
        <h2 className="section-title">Zajęcia i Treningi</h2>
        <p className="section-subtitle">Znajdź zajęcia, które odpowiadają Twoim zainteresowaniom</p>
        
        <div className="classes-grid">
          {classes.map((cls, index) => (
            <div key={index} className="class-card">
              <div className="class-header" style={{
                background: colors[index % colors.length]
              }}>
                <h3>{cls.name}</h3>
              </div>
              <div className="class-body">
                <div className="class-info">
                  <span className="label">Harmonogram:</span>
                  <span>{cls.schedule}</span>
                </div>
                <div className="class-info">
                  <span className="label">Poziom:</span>
                  <span>{cls.level}</span>
                </div>
                <div className="class-info">
                  <span className="label">Wiek:</span>
                  <span>{cls.ageGroup}</span>
                </div>
                <div className="class-info">
                  <span className="label">Trener:</span>
                  <span>{cls.coach}</span>
                </div>
                <button className="btn btn-primary btn-small">Zapisz się</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
