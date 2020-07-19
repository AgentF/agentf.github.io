import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../basics/Input';
import TextArea from '../basics/TextArea';
import Button from '../basics/Button';
import '../basics/Form.css';
import './NewPost.css';

const NewPost = ({ handleSend, handleClose, setNotificationMessage }) => {
  const [newPostDesc, setNewPostDesc] = useState('');
  const [newPostGoogleDocsId, setNewPostGoogleDocsId] = useState('');
  const [newPostLink, setNewPostLink] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');

  const handleClearForm = e => {
    e.preventDefault();
    setNewPostDesc('');
    setNewPostGoogleDocsId('');
    setNewPostLink('');
    setNewPostTitle('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    handleSend({
      desc: newPostDesc,
      googleDocsId: newPostGoogleDocsId,
      lick: newPostLink,
      title: newPostTitle,
    });

    setNotificationMessage(`${newPostTitle} Posted!`);

    handleClearForm(e);
    handleClose(e);
  };

  return (
    <form className="new-post" onSubmit={handleFormSubmit}>
      <Input
        name="title"
        title="Title"
        type="text"
        value={newPostTitle}
        handleChange={e => {
          setNewPostTitle(e.target.value);
        }}
        placeholder="New Post"
      />
      <Input
        name="googleDocsId"
        title="GoogleDocsId"
        type="text"
        value={newPostGoogleDocsId}
        handleChange={e => {
          setNewPostGoogleDocsId(e.target.value);
        }}
      />
      <TextArea
        name="description"
        title="Description"
        type="text"
        value={newPostDesc}
        handleChange={e => {
          setNewPostDesc(e.target.value);
        }}
        placeholder="Newest Post of the line!"
      />
      <Input
        name="link"
        title="Link"
        type="text"
        value={newPostLink}
        handleChange={e => {
          setNewPostLink(e.target.value);
        }}
        placeholder="https://google.com"
      />
      <Button
        className="confirm-button"
        handleOnclick={handleFormSubmit}
        title="Post!"
      >
        Post!
      </Button>
    </form>
  );
};

NewPost.propTypes = {
  handleSend: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired,
};

export default NewPost;
