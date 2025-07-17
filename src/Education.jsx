function Education() {
  // Helper to open link in a small popup window, but block if the link is to the current site
  const openPopup = (url) => {
    // Only open popup if the link is not the current site
    if (!window.location.href.includes(url.replace(/^https?:\/\//, ''))) {
      window.open(url, 'popup', 'width=400,height=400,scrollbars=yes,resizable=yes');
    } else {
      window.location.href = url;
    }
  };

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-degree">BE-Computer Science</div>
          <div className="edu-meta">
            <a href="https://www.srit.org/" onClick={e => { e.preventDefault(); openPopup('https://www.srit.org/'); }} className="edu-link">Sri Ramakrishna Institute of Technology</a>
            <span className="edu-year">2021 - 2024</span>
          </div>
          <div className="edu-desc">Graduated with First Class.</div>
        </div>
        <div className="edu-item">
          <div className="edu-degree">DEEE</div>
          <div className="edu-meta">
            <a href="http://www.sriragavendra.org/" onClick={e => { e.preventDefault(); openPopup('http://www.sriragavendra.org/'); }} className="edu-link">Sri Ragavendra Polytechnic College</a>
            <span className="edu-year">2016 - 2019</span>
          </div>
          <div className="edu-desc">Diploma in Electrical and Electronics Engineering.</div>
        </div>
        <div className="edu-item">
          <div className="edu-degree">SSLC</div>
          <div className="edu-meta">
            <a href="https://www.sriragavendraedutrust.org/groups.html" onClick={e => { e.preventDefault(); openPopup('https://www.sriragavendraedutrust.org/groups.html'); }} className="edu-link">Sri Ragavendra Matric Higher Secondary School</a>
            <span className="edu-year">2016 - 2019</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education;
