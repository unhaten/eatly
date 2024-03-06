// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCi3yeLC-nZF-69MzLVd4vlVbBQNnr94-k',
	authDomain: 'feedme-eatly.firebaseapp.com',
	projectId: 'feedme-eatly',
	storageBucket: 'feedme-eatly.appspot.com',
	messagingSenderId: '298663660068',
	appId: '1:298663660068:web:7b96cba9ad7eaa48f526b1',
	measurementId: 'G-L873BH6KKY'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
