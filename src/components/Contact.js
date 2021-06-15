import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'




export default function Contact() {

  const [emailData, updateEmailData] = useState({
    firstname: '',
    lastname: '',
    subject: '',
    text: '',
    email: ''
  })

  const [emailErrors, updateEmailErrors] = useState({
    name: '',
    subject: '',
    text: '',
    email: ''
  })

  const [sendSuccess, updateSendSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  

  function handleChange(event) {
    const { name, value } = event.target
    updateEmailData({ ...emailData, [name]: value })
    updateEmailErrors({ ...emailErrors, [name]: '' })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!emailData.email || !emailData.email.includes('@')) {
      updateEmailErrors({ ...emailErrors, email: 'Please enter a valid email address' })
      return
    } else if (!emailData.subject) {
      updateEmailErrors({ ...emailErrors, subject: 'Please give your message a subject' })
      return
    } else if (!emailData.text) {
      updateEmailErrors({ ...emailErrors, text: 'Please give your message some text' })
      return
    } else if (!emailData.firstname || !emailData.lastname) {
      updateEmailErrors({ ...emailErrors, name: 'Please provide your full name' })
      return
    }
    setLoading(true)
    emailjs.send(process.env.SERVICEID, process.env.FORMID, emailData, process.env.USERID)
      .then(function () {
        updateSendSuccess(true)
        updateEmailData({
          firstname: '',
          lastname: '',
          subject: '',
          text: '',
          email: ''
        })
        setLoading(false)
      }, function (error) {
        console.log('Error: ', error)
      })
  }

  return <section className="section">
    <div className="columns">
      <div className="column"></div>
      <div className="column is-one-third">
        <p className="subtitle">Contact Us</p>
        <p>Please email us using the form below and we will get back to you as soon as possible.<br /><br />
        Many thanks,<br /><br />
        Castel Occupational Health
        </p>
        <br /><br />
        <form>
          <div className="field">
            <label className="labels">First Name *</label>
            <div className="control  mb-2 mt-2">
              <input className="input"
                type="text"
                value={emailData.firstname}
                onChange={handleChange}
                name={'firstname'} />
            </div>
          </div>
          <div className="field">
            <label className="labels">Last Name *</label>
            <div className="control  mb-2 mt-2">
              <input className="input"
                type="text"
                value={emailData.lastname}
                onChange={handleChange}
                name={'lastname'} />
              {emailErrors && <small className="has-text-danger">{emailErrors.name}</small>}
            </div>
          </div>
          <div className="field">
            <label className="labels">Email *</label>
            <div className="control  mb-2 mt-2">
              <input className="input"
                type="text"
                value={emailData.email}
                onChange={handleChange}
                name={'email'} />
              {emailErrors && <small className="has-text-danger">{emailErrors.email}</small>}
            </div>
          </div>
          <div className="field">
            <label className="labels">Subject *</label>
            <div className="control  mb-2 mt-2">
              <input className="input"
                type="text"
                value={emailData.subject}
                onChange={handleChange}
                name={'subject'} />
              {emailErrors && <small className="has-text-danger">{emailErrors.subject}</small>}
            </div>
          </div>
          <div className="field">
            <label className="labels">Message *</label>
            <div className="control  mb-2 mt-2">
              <textarea className="textarea"
                type="text"
                value={emailData.text}
                onChange={handleChange}
                name={'text'} />
              {emailErrors && <small className="has-text-danger">{emailErrors.text}</small>}
            </div>
          </div>
          <div>
            {!sendSuccess ? <button type="submit" onClick={handleSubmit} className="button mt-2 mr-2 mb-2">{!loading ? 'Submit' : 'Sending'}</button> : <button type="submit" onClick={handleSubmit} className="button mt-2 mr-2 mb-2" disabled>Sent</button>}
          </div>
          <div>
            {sendSuccess && <small>Thank you for your email, we will get back to you as soon as possible.</small>}
          </div>
        </form>
      </div>
      <div className="column"></div>
    </div>
  </section>
}