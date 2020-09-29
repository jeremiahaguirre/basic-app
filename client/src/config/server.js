import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrW-NxPjYmP-3APXn2eAYR8Sxg2QXrPmw',
  authDomain: 'basic-app-dc4c1.firebaseapp.com',
  databaseURL: 'https://basic-app-dc4c1.firebaseio.com',
  projectId: 'basic-app-dc4c1',
  storageBucket: 'basic-app-dc4c1.appspot.com',
  messagingSenderId: '288389041576',
  appId: '1:288389041576:web:b5b2cc59f53849273be19d',
  measurementId: 'G-L6EDPT4ZV7',
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
