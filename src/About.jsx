import resume from './assets/resume.pdf';

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        Hi, I'm Nithyaprasad K, a passionate Fullstack Developer with experience in building modern web applications using React, Node.js, and more. I love creating beautiful, interactive, and responsive user experiences.
      </p>
      <a
        href={resume}
        download
        className="contact-btn"
        style={{display:'inline-block',marginTop:'1.5em',marginRight:'1em'}}
      >
        Download Resume
      </a>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn"
        style={{display:'inline-block',marginTop:'1.5em'}}
      >
        View Resume
      </a>
    </section>
  );
}

export default About;
