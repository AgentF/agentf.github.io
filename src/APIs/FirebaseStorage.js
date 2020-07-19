class FirebaseStorage {
  constructor(storage) {
    this.storage = storage;
  }

  uploadImage(
    collection,
    userID,
    id,
    file,
    handleNotifications,
    successfullyUploaded,
  ) {
    const type = file.type ? file.type : 'other';
    const refStorage = this.storage.ref(
      `${collection}/${userID}/${id}/${type}/${file.name}`,
    );
    const task = refStorage.put(file);

    task.on(
      'state_changed',
      snapshot => {
        const porcentaje =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        handleNotifications(
          `${file.name} is ${Math.floor(porcentaje)}% ready!`,
        );
      },
      error => {
        handleNotifications(`Error uploading ${file.name}: ${error.message}`);
        console.error(`Error uploading ${file.name}: ${error.message}`);
      },
      () => {
        task.snapshot.ref
          .getDownloadURL()
          .then(url => {
            handleNotifications(
              `${file.name} is ready!, here is the url: ${url}`,
            );
            console.log(`${file.name} is ready!, here is the url: ${url}`);
            successfullyUploaded(url);
          })
          .catch(error => {
            handleNotifications(`Error uploading ${file.name}: ${error}`);
            console.error(`Error uploading ${file.name}: ${error}`);
          });
      },
    );
  }
}

export default FirebaseStorage;
