import React from 'react';
import Button from '../Form/Button';
import './View.css';

/*
  This should be a render-only component
*/

// const handleSendMail = () => {
//   const email = 'freddyfx231@gmail.com';
//   const subject = 'Portfolio Site';
//   document.location = `mailto:${email}?subject=${subject}`;
// };

const handleExternalLink = url => {
  window.open(url, '_blank');
};

const View = () => {
  return (
    <footer className="footer">
      <Button
        className="social-link"
        title="Follow me!"
        id="Twitter"
        onClick={() => handleExternalLink('https://twitter.com/Agente_F')}
      >
        Twitter
      </Button>
      <Button
        className="social-link"
        title="Check my codes!"
        id="GitHub"
        onClick={() => handleExternalLink('https://github.com/AgentF')}
      >
        GitHub
      </Button>
      <Button
        className="social-link"
        title="Contact with me!"
        id="LinkedIn"
        onClick={() => {
          handleExternalLink(
            'https://www.linkedin.com/in/freddy-mota-6397aa128/',
          );
        }}
      >
        LinkedIn
      </Button>
    </footer>
  );
};

export default View;
