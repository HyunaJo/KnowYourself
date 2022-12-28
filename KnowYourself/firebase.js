import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBKkIVgXV-pt5PCFe3nlFqd6EoUE3GTDw",
    authDomain: "knowyourself-bef9d.firebaseapp.com",
    projectId: "knowyourself-bef9d",
    storageBucket: "knowyourself-bef9d.appspot.com",
    messagingSenderId: "1041074531226",
    appId: "1:1041074531226:web:e12a32c560a5cedc1ee823",
    measurementId: "G-LLRPL41BEW"
  };

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };