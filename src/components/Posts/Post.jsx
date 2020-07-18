import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ title, links, googleDocsId, desc, editable, handleEdit }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);

  return (
    <li className="post">
      <img
        className="post-img"
        src={`http://drive.google.com/uc?export=view&id=${googleDocsId}`}
        alt={`${title} thumbnail`}
      />
      <span
        className="post-title"
        contentEditable={editable}
        role="textbox"
        tabIndex="0"
      >
        {newTitle}
      </span>
      <div className="edit-options">
        <button
          className="save-changes-button"
          type="button"
          onClick={e => {
            handleEdit({ title: e.target.innerText });
            setNewTitle(e.target.innerText);
          }}
        >
          <span className="material-icons">save</span>
        </button>
        <button
          className="save-changes-button"
          type="button"
          onClick={() => {
            // cancel and set original text
          }}
        >
          <span className="material-icons">close</span>
        </button>
      </div>
      <div
        className="post-desc"
        contentEditable={editable}
        role="textbox"
        tabIndex="0"
      >
        {newDesc}
      </div>
      <div className="edit-options">
        <button
          className="save-changes-button"
          type="button"
          onClick={e => {
            handleEdit({ desc: e.target.innerText });
            setNewDesc(e.target.innerText);
          }}
        >
          <span className="material-icons">save</span>
        </button>
        <button
          className="save-changes-button"
          type="button"
          onClick={() => {
            // cancel and set original text
          }}
        >
          <span className="material-icons">close</span>
        </button>
      </div>
      {links && links.length && (
        <div className="post-options">
          {links.map(({ name, url, icon }) => (
            <button
              className="post-option"
              title={name}
              type="button"
              onClick={() => window.open(url, '_blank')}
            >
              <span className="material-icons">{icon}</span>
            </button>
          ))}
        </div>
      )}
    </li>
  );
};

Post.propTypes = {
  googleDocsId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  desc: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Post;
