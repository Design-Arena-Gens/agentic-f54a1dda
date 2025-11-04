'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>LUXE INTERIORS</div>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Transform Your Space</h1>
            <p>Creating beautiful, functional interiors that reflect your unique style</p>
            <a href="#contact" className={styles.ctaButton}>Get Started</a>
          </div>
        </section>

        <section id="portfolio" className={styles.portfolio}>
          <div className={styles.sectionContent}>
            <h2>Our Portfolio</h2>
            <p className={styles.subtitle}>Explore our recent projects</p>
            <div className={styles.gallery}>
              {[
                { title: 'Modern Living Room', desc: 'Contemporary design with natural elements' },
                { title: 'Luxury Bedroom', desc: 'Elegant and serene sleeping space' },
                { title: 'Minimalist Kitchen', desc: 'Sleek and functional design' },
                { title: 'Cozy Study', desc: 'Productive workspace with character' },
                { title: 'Elegant Dining', desc: 'Perfect for entertaining guests' },
                { title: 'Spa Bathroom', desc: 'Relaxation and luxury combined' }
              ].map((item, index) => (
                <div key={index} className={styles.galleryItem}>
                  <div className={styles.imagePlaceholder}></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles.sectionContent}>
            <h2>Our Services</h2>
            <p className={styles.subtitle}>Comprehensive interior design solutions</p>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏠</div>
                <h3>Residential Design</h3>
                <p>Complete home transformations tailored to your lifestyle and preferences</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏢</div>
                <h3>Commercial Spaces</h3>
                <p>Professional design for offices, retail, and hospitality environments</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💡</div>
                <h3>Space Planning</h3>
                <p>Optimize your layout for functionality and flow</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🎨</div>
                <h3>Color Consultation</h3>
                <p>Expert guidance on color palettes and finishes</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🛋️</div>
                <h3>Furniture Selection</h3>
                <p>Curated pieces that match your style and budget</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>✨</div>
                <h3>Styling & Decor</h3>
                <p>Final touches that bring your space to life</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className={styles.sectionContent}>
            <h2>About Us</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h3>Creating Spaces That Inspire</h3>
                <p>With over 15 years of experience in interior design, we specialize in creating sophisticated, functional spaces that reflect our clients' unique personalities and lifestyles.</p>
                <p>Our approach combines timeless design principles with contemporary trends, ensuring your space remains beautiful and relevant for years to come.</p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <strong>200+</strong>
                    <span>Projects Completed</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>15</strong>
                    <span>Years Experience</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>98%</strong>
                    <span>Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className={styles.sectionContent}>
            <h2>Get In Touch</h2>
            <p className={styles.subtitle}>Let's discuss your project</p>
            <div className={styles.contactContent}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <strong>Email</strong>
                  <p>hello@luxeinteriors.com</p>
                </div>
                <div className={styles.infoItem}>
                  <strong>Phone</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className={styles.infoItem}>
                  <strong>Office</strong>
                  <p>123 Design Street<br/>New York, NY 10001</p>
                </div>
                <div className={styles.infoItem}>
                  <strong>Hours</strong>
                  <p>Mon - Fri: 9am - 6pm<br/>Sat: 10am - 4pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Luxe Interiors. All rights reserved.</p>
      </footer>
    </div>
  )
}
