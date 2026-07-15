import React from 'react'
import './Membership.css'

const Membership = () => {
  const plans = [
    {
      name: 'Podstawowy',
      price: '49 zł',
      period: '/miesiąc',
      features: [
        'Dostęp do 2 zajęć tygodniowo',
        'Dostęp do siłowni',
        'Brak umowy długoterminowej',
        'Wsparcie e-mail'
      ],
      highlighted: false
    },
    {
      name: 'Premium',
      price: '99 zł',
      period: '/miesiąc',
      features: [
        'Nieograniczone zajęcia',
        'Dostęp do siłowni',
        'Zaproszenia na specjalne imprezy',
        'Sesje coachingu 1-na-1 (2/miesiąc)',
        'Priorytetowe wsparcie'
      ],
      highlighted: true
    },
    {
      name: 'Drużynowy',
      price: '1299 zł',
      period: '/miesiąc',
      features: [
        'Dla grup 10+ osób',
        'Zajęcia dostosowane do drużyny',
        'Dedykowany trener',
        'Zaproszenia na turnieje',
        'Wsparcie i zarządzanie'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="membership" className="membership section">
      <div className="container">
        <h2 className="section-title">Członkostwo</h2>
        <p className="section-subtitle">Wybierz plan, który najlepiej odpowiada Twoim potrzebom</p>
        
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}>
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                Wybierz plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Membership
