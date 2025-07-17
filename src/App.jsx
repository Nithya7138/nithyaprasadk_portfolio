import './App.css'
import { useState } from 'react'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import Experience from './Experience'

function App() {
  const [section, setSection] = useState('about')

  return (
    <div className="portfolio-container">
      <header>
        <h1>Nithyaprasad k</h1>
        <p>Fullstack Developer</p>
        <nav>
          <ul className="nav-list">
            <li>
              <button className={section === 'about' ? 'active' : ''} onClick={() => setSection('about')}>About</button>
            </li>
            <li>
              <button className={section === 'education' ? 'active' : ''} onClick={() => setSection('education')}>Education</button>
            </li>
            <li>
              <button className={section === 'projects' ? 'active' : ''} onClick={() => setSection('projects')}>Projects</button>
            </li>
            <li>
              <button className={section === 'contact' ? 'active' : ''} onClick={() => setSection('contact')}>Contact</button>
            </li>
            <li>
              <button className={section === 'skills' ? 'active' : ''} onClick={() => setSection('skills')}>Skills</button>
            </li>
            <li>
              <button className={section === 'experience' ? 'active' : ''} onClick={() => setSection('experience')}>Experience</button>
            </li>
          </ul>
        </nav>
      </header>
      {section === 'about' && <About />}
      {section === 'education' && <Education />}
      {section === 'projects' && <Projects />}
      {section === 'contact' && <Contact />}
      {section === 'skills' && <Skills />}
      {section === 'experience' && <Experience />}
    </div>
  )
}

export default App
