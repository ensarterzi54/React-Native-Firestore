import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase yapılandırma bilgilerinizi buraya ekleyin
// Bu bilgileri Firebase Console'dan alabilirsiniz:
// Firebase Console > Project Settings > General > Your apps > Web app
const firebaseConfig = {
    apiKey: "AIzaSyDb9888CRAqgk43HooxyyNBFE1W7N6AMbI",
    authDomain: "react-firestore-83d4d.firebaseapp.com",
    projectId: "react-firestore-83d4d",
    storageBucket: "react-firestore-83d4d.firebasestorage.app",
    messagingSenderId: "1007670993341",
    appId: "1:1007670993341:web:68ba626976ea8d839a32d4"
}

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore'u başlat ve export et
export const db = getFirestore(app);

