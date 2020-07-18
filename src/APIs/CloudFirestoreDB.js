class CloudFirestoreDB {
  constructor(db) {
    this.db = db;
  }

  getCollection(collection, setFunction) {
    this.db.collection(collection).onSnapshot(querySnapshot => {
      const collectionElementsArray = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        collectionElementsArray.push({ id: doc.id, ...data });
      });
      setFunction(collectionElementsArray);
    });
  }

  addDocToCollection(collection, doc) {
    // no ID needed
    this.db.collection(collection).add(doc);
  }

  setDocToCollection(collection, id, doc) {
    // needs ID
    this.db
      .collection(collection)
      .doc(id)
      .set(doc);
  }

  addFieldByID(collection, field, id) {
    const { name, value } = field;
    this.db
      .collection(collection)
      .doc(id)
      .set(
        {
          [name]: value,
        },
        { merge: true },
      );
  }

  deleteByID(id) {
    this.db
      .collection('posts')
      .doc(id)
      .delete();
  }

  updateByID(collection, id, doc) {
    this.db
      .collection(collection)
      .doc(id)
      .update(doc);
  }

  /*

  querySingle(id) {
    let ref = this.db.collection('posts').doc(id);
    ref.get().then(respDoc => {
      console.log(`querySingle postID ${id} => ${respDoc.data().titulo}`);
    });
  }

  queryByTitulo(titulo) {
    this.db
      .collection('posts')
      .where('titulo', '==', titulo)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(
            `queryByTitulo postTitulo ${titulo}=> ${doc.data().titulo}`,
          );
        });
      });
  }

  deleteFields(id) {
    console.log(`Post => ${id}, se elimina imagenLink`);
    this.db
      .collection('posts')
      .doc(id)
      .update({
        imagenLink: firebase.firestore.FieldValue.delete(),
      });
  }


  batch(collection) {
    // better performance
    const batch = this.db.batch();

    const ref1 = this.db.collection(collection).doc('123456789');
    batch.set(ref1, { titulo: '123456789' });

    const ref2 = this.db.collection(collection).doc('987654321');
    batch.set(ref2, { titulo: '987654321' });

    const ref3 = this.db.collection(collection).doc('456789');
    batch.set(ref3, { titulo: '456789' });

    batch
      .commit()
      .then(() => {
        console.log('Batch correcto');
      })
      .catch(error => console.error(error));
  }
  
  */
}

export default CloudFirestoreDB;
