import { Link } from 'react-router-dom'
import './service.css'

const services = [
  {
    number: '01',
    icon: 'PE',
    title: 'People management',
    description:
      'Keep employee information, team structures, and important documents organized in one place.',
    detail: 'Employee records · Onboarding · Self-service',
  },
  {
    number: '02',
    icon: 'TA',
    title: 'Talent acquisition',
    description:
      'Make hiring easier with a clear view of candidates, open roles, and every step in your process.',
    detail: 'Job openings · Candidate pipeline · Hiring',
  },
  {
    number: '03',
    icon: 'PA',
    title: 'Payroll & attendance',
    description:
      'Bring attendance, time off, and payroll workflows together for more dependable operations.',
    detail: 'Timesheets · Leave tracking · Payroll',
  },
  {
    number: '04',
    icon: 'GR',
    title: 'Growth & performance',
    description:
      'Help people and teams grow with meaningful goals, regular feedback, and performance reviews.',
    detail: 'Goals · Feedback · Reviews',
  },
]

function Service() {
  return (
    <div className="services-page">
      <section className="services-intro" aria-labelledby="services-title">
        <span className="services-eyebrow">PEOPLE-FIRST HR</span>
        <h1 id="services-title">Our Services</h1>
        <p>Everything you need to support your people and keep your organization moving forward.</p>
      </section>

      <section className="services-grid" aria-label="HR services">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-heading">
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <span className="service-number">{service.number}</span>
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className="service-detail">{service.detail}</span>
          </article>
        ))}
      </section>

      <section className="services-contact">
        <div>
          <h2>Let’s build a better workplace.</h2>
          <p>Tell us what your team needs, and we’ll help you find the right place to start.</p>
        </div>
        <Link className="services-contact-link" to="/contact">Talk to our team <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  )
}

export default Service
