import { useFirestore, initialize } from 'web-firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const useFirebase = () => {
  const { db } = initialize({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID,
  });

  //? For Firestore Database CRUD Operations
  const { addNewEntry, getEntries, error } = useFirestore(db);

  const storage = getStorage();
  const httpsReference = ref(
    storage,
    'https://firebasestorage.googleapis.com/v0/b/portfolio-erol1098.appspot.com/o/erol-mahmutoglu-resume.pdf?alt=media&token=8595ab64-e72c-411b-b6a4-e2685cec4ce8'
  );

  const downloadCV = () => {
    getDownloadURL(httpsReference)
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.open('GET', url);
        xhr.send();
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  return {
    addNewEntry,
    getEntries,
    error,
    downloadCV,
  };
};
export default useFirebase;
