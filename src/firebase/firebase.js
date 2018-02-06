import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAxZb3SZcNqeqeIlbeJk68jLZQ7B4LzBqE",
  authDomain: "expensify-gn.firebaseapp.com",
  databaseURL: "https://expensify-gn.firebaseio.com",
  projectId: "expensify-gn",
  storageBucket: "expensify-gn.appspot.com",
  messagingSenderId: "58882340520"
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }
