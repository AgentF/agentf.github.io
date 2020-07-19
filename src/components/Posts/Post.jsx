import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({
  title,
  links,
  src,
  desc,
  editable,
  handleEdit,
  handleAddImage,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [showTitleEditOptions, setShowTitleEditOptions] = useState(false);
  const [newDesc, setNewDesc] = useState(desc);
  const [showDescEditOptions, setShowDescEditOptions] = useState(false);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imgInputRef = useRef(null);

  return (
    <li className="post">
      <button
        className="img-button"
        type="button"
        disabled={!editable}
        onClick={() => {
          if (editable && imgInputRef.current) {
            imgInputRef.current.click();
          }
        }}
      >
        <img className="post-img" src={src} alt={`${title} thumbnail`} />
        {editable && (
          <input
            className="img-input"
            type="file"
            ref={imgInputRef}
            accept="image/png, image/jpeg"
            onChange={({ target: { files } }) => handleAddImage(files[0])}
          />
        )}
      </button>
      <span
        className="post-title"
        contentEditable={editable}
        ref={titleRef}
        onClick={() => setShowTitleEditOptions(true)}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            titleRef.current.innerText = newTitle;
            setShowTitleEditOptions(false);
          }
        }}
        role="textbox"
        tabIndex={editable ? '0' : '-1'}
      >
        {newTitle}
      </span>
      {showTitleEditOptions && (
        <div className="edit-options">
          <button
            className="save-changes-button"
            type="button"
            onClick={() => {
              handleEdit({ title: titleRef.current.innerText });
              setNewTitle(titleRef.current.innerText);
              setShowTitleEditOptions(false);
            }}
          >
            <span className="material-icons">save</span>
          </button>
          <button
            className="save-changes-button"
            type="button"
            onClick={() => {
              titleRef.current.innerText = newTitle;
              setShowTitleEditOptions(false);
            }}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
      )}
      <div
        className="post-desc"
        contentEditable={editable}
        ref={descRef}
        onClick={() => setShowDescEditOptions(true)}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            descRef.current.innerText = newDesc;
            setShowDescEditOptions(false);
          }
        }}
        role="textbox"
        tabIndex={editable ? '0' : '-1'}
      >
        {newDesc}
      </div>
      {showDescEditOptions && (
        <div className="edit-options">
          <button
            className="save-changes-button"
            type="button"
            onClick={() => {
              handleEdit({ desc: descRef.current.innerText });
              setNewDesc(descRef.current.innerText);
              setShowDescEditOptions(false);
            }}
          >
            <span className="material-icons">save</span>
          </button>
          <button
            className="save-changes-button"
            type="button"
            onClick={() => {
              descRef.current.innerText = newDesc;
              setShowDescEditOptions(false);
            }}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
      )}
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
  src: PropTypes.string.isRequired,
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
  handleAddImage: PropTypes.func.isRequired,
};

export default Post;
