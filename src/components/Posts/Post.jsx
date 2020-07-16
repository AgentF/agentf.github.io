import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ title, link, googleDocsId, desc }) => (
  <li className="post">
    <img
      className="post-img"
      src={`http://drive.google.com/uc?export=view&id=${googleDocsId}`}
      alt={`${title} thumbnail`}
    />
    <h3 className="post-title">{title}</h3>
    <p className="post-desc">{desc}</p>
    <div className="post-options">
      <button
        className="post-option"
        type="button"
        onClick={() => window.open(link, '_blank')}
      >
        <span className="material-icons">navigate_next</span>
      </button>
    </div>
  </li>
);

Post.propTypes = {
  googleDocsId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Post;
