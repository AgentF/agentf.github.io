import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './Posts.css';

const Posts = ({ posts, userID, loggedIn, handleEdit }) => (
  <ul className="posts">
    {posts.map(
      ({ id, googleDocsId, title, links, desc, author_uid: authorID }) => (
        <Post
          key={id}
          id={id}
          googleDocsId={googleDocsId}
          title={title}
          links={links}
          desc={desc}
          editable={loggedIn && authorID === userID}
          handleEdit={updatedPost => handleEdit(id, updatedPost)}
        />
      ),
    )}
  </ul>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      googleDocsId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
  userID: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Posts;
