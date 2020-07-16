import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import './Posts.css';

const Posts = ({ posts }) => (
  <ul className="posts">
    {posts.map(({ id, googleDocsId, title, link, desc }) => (
      <Post
        key={id}
        id={id}
        googleDocsId={googleDocsId}
        title={title}
        link={link}
        desc={desc}
      />
    ))}
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
};

export default Posts;
