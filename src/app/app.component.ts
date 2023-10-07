import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH_qhBiGxS17vGwFOc8qjZXxeSt-9AECw",
  authDomain: "devday-projetos.firebaseapp.com",
  projectId: "devday-projetos",
  storageBucket: "devday-projetos.appspot.com",
  messagingSenderId: "884072327540",
  appId: "1:884072327540:web:07a6c5c5c97e5a55ed6421",
  measurementId: "G-QD6HGWCQE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-utils';
}
