import { getStorage, ref, getDownloadURL } from 'firebase/storage';

// Create a reference with an initial file path and name
const storage = getStorage();
// const pathReference = ref(storage, 'Erol Mahmutoglu Resume.pdf');

// Create a reference from a Google Cloud Storage URI
const gsReference = ref(
  storage,
  'gs://portfolio-erol1098.appspot.com/Erol Mahmutoglu Resume.pdf'
);

const downloadCV = () => {
  getDownloadURL(gsReference)
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
    })
    .catch((error) => {
      // Handle any errors
    });
};

export default downloadCV;
