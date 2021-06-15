import React from 'react'

export default function Navbar() {
  return <div>
    <section className="hero">
      <div className="hero-body has-text-centered">
        <p className="title is-size-1-desktop">CASTEL OCCUPATIONAL HEALTH</p>
      </div>
    </section>
    <nav className="navbar has-text-centered is-justify-content-center">
      <a className="navbar-item is-size-5-desktop" href="/">About</a>
      <a className="navbar-item is-size-5-desktop" href="/contact">Contact</a>
    </nav>
  </div>

}