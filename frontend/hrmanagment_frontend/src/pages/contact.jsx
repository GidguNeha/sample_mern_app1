import { useState } from 'react'
import './contact.css'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    college: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <section className="contact-intro">
        <span className="contact-eyebrow">WE’RE HERE TO HELP</span>
        <h1>Let’s talk</h1>
        <p>Share a few details and our team will be ready to connect with you.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-heading">
          <h2>Get in touch</h2>
          <p>Fields marked with * are required.</p>
        </div>

        <div className="contact-fields">
          <label className="contact-field">
            <span>Name <span aria-hidden="true">*</span></span>
            <input
              autoComplete="name"
              name="name"
              onChange={handleChange}
              placeholder="Your full name"
              required
              value={form.name}
            />
          </label>

          <label className="contact-field">
            <span>Age <span aria-hidden="true">*</span></span>
            <input
              inputMode="numeric"
              max="120"
              min="1"
              name="age"
              onChange={handleChange}
              placeholder="Your age"
              required
              type="number"
              value={form.age}
            />
          </label>

          <label className="contact-field">
            <span>Email address <span aria-hidden="true">*</span></span>
            <input
              autoComplete="email"
              name="email"
              onChange={handleChange}
              placeholder="you@example.com"
              required
              type="email"
              value={form.email}
            />
          </label>

          <label className="contact-field">
            <span>College or organization</span>
            <input
              autoComplete="organization"
              name="college"
              onChange={handleChange}
              placeholder="Where you study or work"
              value={form.college}
            />
          </label>
        </div>

        <div className="contact-form-actions">
          <button type="submit">Send details <span aria-hidden="true">→</span></button>
          {submitted && (
            <p className="contact-success" role="status">
              Thanks, {form.name}. Your details have been recorded in this form.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Contact
