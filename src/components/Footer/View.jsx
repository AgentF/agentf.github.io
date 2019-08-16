import React from 'react';
import './View.css';

/*
  This should be a render-only component
*/
const handleSendMail = () => {
  const email = 'freddyfx231@gmail.com';
  const subject = 'Portfolio Site';
  document.location = `mailto:${email}?subject=${subject}`;
};

const handleExternalLink = url => {
  window.open(url, '_blank');
};

const View = () => {
  return (
    <footer className="footer">
      <button
        className="social-link"
        title="Email me!"
        type="button"
        id="Mail"
        onClick={handleSendMail}
      >
        Mail
      </button>
      <button
        className="social-link"
        title="Follow me!"
        type="button"
        id="Twitter"
        onClick={() => handleExternalLink('https://twitter.com/Agente_F')}
      >
        Twitter
      </button>
      <button
        className="social-link"
        title="Check my codes!"
        type="button"
        id="GitHub"
        onClick={() => handleExternalLink('https://github.com/AgentF')}
      >
        GitHub
      </button>
    </footer>
  );
};

export default View;
