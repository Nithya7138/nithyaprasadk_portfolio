import { useState } from 'react'

function Projects() {
  const [showProjects, setShowProjects] = useState(true)

  // Helper to open link in a small popup window
  const openPopup = (url) => {
    window.open(url, 'popup', 'width=500,height=500,scrollbars=yes,resizable=yes');
  }

  return (
    <section className="projects">
      <h2>Projects</h2>
      <button onClick={() => setShowProjects((prev) => !prev)} style={{marginBottom: '1em'}}>
        {showProjects ? 'Hide Projects' : 'Show Projects'}
      </button>
      {showProjects && (
        <ul>
          <li>
            Academy Finder – A web application that helps students find art&Sports academies nearby based on their location.
            <a href="https://academyfindernp.vercel.app//" 
              className="project-link"
              onClick={e => { e.preventDefault(); openPopup('https://academyfindernp.vercel.app/'); }}
              style={{ color: '#ffe082', textDecoration: 'underline', marginLeft: 8 }}
            >Visit Site</a>
          </li>
          <li>
            <strong>NP Solution</strong> – A service provider website for electrical, plumbing, and CCTV solutions. 
            <a 
              href="https://n-p-solution-uto3.vercel.app/" 
              className="project-link"
              onClick={e => { e.preventDefault(); openPopup('https://n-p-solution-uto3.vercel.app/'); }}
              style={{ color: '#ffe082', textDecoration: 'underline', marginLeft: 8 }}
            >Visit Site</a>
          </li>
          <li>
            <strong>Musicweb</strong>
             <a 
              href="https://hosturl.link/2aeSQk" 
              className="project-link"
              onClick={e => { e.preventDefault(); openPopup('https://hosturl.link/2aeSQk'); }}
              style={{ color: '#ffe082', textDecoration: 'underline', marginLeft: 8 }}
            >Visit Site</a> 
          </li>
        </ul>
      )}
    </section>
  )
}

export default Projects;
