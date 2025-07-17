import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/xkgzggyl', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
      },
    });
    if (response.ok) {
      setStatus('Message sent successfully!');
      form.reset();
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact" style={{ maxWidth: '700px', margin: '2em auto', padding: '2em', borderRadius: '1.5em', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(8px)' }}>
      <h2>Contact</h2>
      <div style={{marginBottom: '1.5em'}}>
        <p><strong>Email:</strong> <a href="mailto:nithyaprasadk01@example.com" className="contact-link">nithyaprasad.k@example.com</a></p>
        <p><strong>Phone:</strong> +91 7708112871</p>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1em', marginTop: '1em', justifyContent: 'center'}}>
          <a href="https://wa.me/7708112871" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{flex: '0 1 180px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em', background: 'linear-gradient(90deg, #25d366 0%, #128c7e 100%)', color: '#fff', fontWeight: 600, boxShadow: '0 2px 12px 0 rgba(37,211,102,0.15)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer'}} onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(37,211,102,0.25)';}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 2px 12px 0 rgba(37,211,102,0.15)';}}>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" style={{width: '1.3em', height: '1.3em'}} />
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/nithya-prasad-k-602258369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{flex: '0 1 180px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em', background: 'linear-gradient(90deg, #0077b5 0%, #00c6ff 100%)', color: '#fff', fontWeight: 600, boxShadow: '0 2px 12px 0 rgba(0,119,181,0.15)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer'}} onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(0,119,181,0.25)';}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 2px 12px 0 rgba(0,119,181,0.15)';}}>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style={{width: '1.3em', height: '1.3em'}} />
            LinkedIn
          </a>
          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{flex: '0 1 180px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em', background: 'linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%)', color: '#222', fontWeight: 600, boxShadow: '0 2px 12px 0 rgba(0,195,255,0.15)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer'}} onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(0,195,255,0.25)';}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 2px 12px 0 rgba(0,195,255,0.15)';}}>
            <svg width="1.3em" height="1.3em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#00c3ff"/><text x="16" y="22" textAnchor="middle" fontSize="15" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">N</text></svg>
            Naukri Profile
          </a>
          <a href="https://www.google.com/maps/place/10%C2%B058'31.3%22N+76%C2%B054'43.2%22E/@10.9821017,76.9128681,15.71z/data=!4m4!3m3!8m2!3d10.975354!4d76.912?authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{flex: '0 1 180px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em', background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)', color: '#fff', fontWeight: 600, boxShadow: '0 2px 12px 0 rgba(255,81,47,0.15)', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer'}} onMouseOver={e => {e.currentTarget.style.transform='scale(1.07)';e.currentTarget.style.boxShadow='0 4px 24px 0 rgba(255,81,47,0.25)';}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 2px 12px 0 rgba(255,81,47,0.15)';}}>
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlemaps.svg" alt="Location" style={{width: '1.3em', height: '1.3em'}} />
            Location
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} style={{marginTop:'2em'}}>
        <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
        <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
        <textarea name="message" placeholder="Your Message" required className="contact-input" rows={3}></textarea>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
      {status && <p style={{marginTop: '1em', color: '#ffe082'}}>{status}</p>}
    </section>
  );
}

export default Contact;
