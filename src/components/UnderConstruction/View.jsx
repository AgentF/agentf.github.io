import React from 'react';
import './View.css';

/*
  This should be a render-only component
*/

const View = () => {
  return (
    <main className="content">
      <article>
        <h1>A work in progress</h1>
        <em>
          This site is under a intense designing, researching and coding
          process.
        </em>
        <p>
          Hello there! I&apos;m Freddy Mota a Web Developer, nice to meet you
          this will be my portfolio page for my projects in GitHub, there are
          the repositories if you wanna check the code and see my work flow just
          click
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AgentF?tab=repositories"
          >
            here!
          </a>
        </p>
        git remote add origin git@github.com:AgentF/agentf.github.io.git
      </article>
    </main>
  );
};

export default View;
