import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCFvVzTZ5n8DTKk0a6whyCsGFbPz_XRM3s",
  authDomain: "buatodo-272e3.firebaseapp.com",
  databaseURL: "https://buatodo-272e3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buatodo-272e3",
  storageBucket: "buatodo-272e3.appspot.com",
  messagingSenderId: "401686557095",
  appId: "1:401686557095:web:3c3853e9e4e43bd12d4682",
};

const fire = firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage();
export default fire;