// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBiglkDi3TkMTahfTh3bmHiU4pETxJm9EI',
  authDomain: 'house-marketplace-app-510dd.firebaseapp.com',
  projectId: 'house-marketplace-app-510dd',
  storageBucket: 'house-marketplace-app-510dd.appspot.com',
  messagingSenderId: '996362564484',
  appId: '1:996362564484:web:2594f32bf57a4782c5e3d1',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
