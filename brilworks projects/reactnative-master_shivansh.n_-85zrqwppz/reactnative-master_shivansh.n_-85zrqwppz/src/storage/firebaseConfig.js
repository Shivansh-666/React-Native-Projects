// import {initializeApp} from 'firebase/app';
// import {getDatabase} from 'firebase/database';

// import {getAuth} from 'firebase/auth';
// import firebase from 'firebase/compat';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBO2XksaUh0ibaaFH-_tdXOaZ2ya_JfkDA',
//   authDomain: 'demoapp-f6a6f.firebaseapp.com',
//   databaseURL: 'https://demoapp-f6a6f-default-rtdb.firebaseio.com',
//   projectId: 'demoapp-f6a6f',
//   storageBucket: 'demoapp-f6a6f.appspot.com',
//   messagingSenderId: '1080656393235',
//   appId: '1:1080656393235:web:066b878fe91615527a7be6',
//   measurementId: 'G-QKS0NHPJ4R',
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// export default db;

import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBO2XksaUh0ibaaFH-_tdXOaZ2ya_JfkDA',
  authDomain: 'demoapp-f6a6f.firebaseapp.com',
  databaseURL: 'https://demoapp-f6a6f-default-rtdb.firebaseio.com',
  projectId: 'demoapp-f6a6f',
  storageBucket: 'demoapp-f6a6f.appspot.com',
  messagingSenderId: '1080656393235',
  appId: '1:1080656393235:web:066b878fe91615527a7be6',
  measurementId: 'G-QKS0NHPJ4R',
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
