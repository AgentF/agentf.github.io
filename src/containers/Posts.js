// eslint-disable-next-line import/extensions
import { withPosts } from '../hoc/withPosts.jsx';
import PostsComponent from '../components/Posts/index';

export const Posts = withPosts(PostsComponent);
