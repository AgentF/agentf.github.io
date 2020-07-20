/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { usePostsData } from '../hooks/usePostsData';

export const withPosts = Component => {
  return props => {
    const [posts, loading, error] = usePostsData();
    return <Component data={{ error, loading, posts }} {...props} />;
  };
};
