import { useState, useEffect } from 'react';
import firebase from 'firebase';

const getProjects = (setLoading, setPosts, setError) => {
  const db = firebase.firestore();
  setLoading(true);
  db.collection('posts')
    .get()
    .then(querySnapshot => {
      const newPosts = [];
      querySnapshot.forEach(doc => {
        newPosts.push({ id: doc.id, ...doc.data() });
      });
      setPosts(newPosts);
      setLoading(false);
    })
    .catch(dbError => {
      setLoading(false);
      setError(dbError);
    });
};

export const usePostsData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloaded, setReloaded] = useState(0);

  useEffect(() => getProjects(setLoading, setPosts, setError), []);
  useEffect(() => getProjects(setLoading, setPosts, setError), [reloaded]);

  return [posts, loading, error, reloaded, setReloaded];
};
