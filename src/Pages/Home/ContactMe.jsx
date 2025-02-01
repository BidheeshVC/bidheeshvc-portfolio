import React from 'react';

export default function ContactMe() {
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email",
      content: [{
        text: "bidheeshvc@gmail.com",
        href: "mailto:bidheeshvc@gmail.com"
      }]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Phone",
      content: [
        {
          text: "+91 8921171208",
          href: "tel:+918921171208"
        },
        {
          text: "+91 9526441663",
          href: "tel:+919526441663"
        }
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: "Website",
      content: [{
        text: "bidheesh.dev",
        href: "https://bidheesh.dev"
      }]
    }
  ];

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-subtitle">Get In Touch</p>
          <h2 className="contact-heading">Contact Me</h2>
          <p className="contact-description">
            Feel free to reach out to me for any opportunities or collaborations.
            I'm always excited to connect and discuss new possibilities.
          </p>
        </div>

        <div className="contact-cards-container">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">{info.icon}</span>
              </div>
              <h3 className="contact-card-title">{info.title}</h3>
              <div className="contact-links">
                {info.content.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <a
                      href={item.href}
                      className="contact-link"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.text}
                    </a>
                    {idx < info.content.length - 1 && (
                      <span className="contact-divider">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}