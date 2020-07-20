import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/index';
import { PostsList } from './styles';

const Posts = ({ posts, userID, loggedIn, handleEdit, handleAddImage }) => (
  <PostsList className="posts">
    {posts.map(({ id, src, title, links, desc, author_uid: authorID }) => (
      <Post
        key={id}
        id={id}
        src={src}
        title={title}
        links={links}
        desc={desc}
        editable={loggedIn && authorID === userID}
        handleEdit={updatedPost => handleEdit(id, updatedPost)}
        handleAddImage={file => handleAddImage(id, file)}
      />
    ))}
  </PostsList>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ).isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
  userID: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleAddImage: PropTypes.func.isRequired,
};

export default Posts;
