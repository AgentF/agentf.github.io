import { useState, useEffect } from 'react';
import firebase from 'firebase';
import CloudFirestoreDB from '../APIs/CloudFirestoreDB';

export const usePostsData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cloudFirestoreDB = new CloudFirestoreDB(firebase.firestore());

  useEffect(() => {
    const unsubscribe = cloudFirestoreDB.getCollection(
      'posts',
      setPosts,
      setLoading,
      setError,
    );
    return () => unsubscribe();
  }, []);

  return [posts, loading, error, setPosts];
};
