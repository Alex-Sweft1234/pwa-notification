import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAUhA6yUhDQLswUlHmww8eW2EDz_KAl04U",
  authDomain: "pwa-notification-98bfa.firebaseapp.com",
  projectId: "pwa-notification-98bfa",
  storageBucket: "pwa-notification-98bfa.appspot.com",
  messagingSenderId: "510188209174",
  appId: "1:510188209174:web:71c849a51ed448784ee137",
  measurementId: "G-HL3MF1XQ77"
};

export const vapidKey = 'BIsatn53SOZ1bGaLG6kbFyRvBwmmv_ud7BHOcwYONhGa_IMnuvEqy0EHD-K9TWmuHllk2iVxoLiaUQMA0n-yuNk'

export const firebaseApp = initializeApp(firebaseConfig)

