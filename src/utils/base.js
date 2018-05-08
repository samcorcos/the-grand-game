import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAhKaZpYCx_gGM8H5t69JKiCu5-KU4vDXM",
  authDomain: "the-grand-game.firebaseapp.com",
  databaseURL: "https://the-grand-game.firebaseio.com",
  projectId: "the-grand-game",
  storageBucket: "",
  messagingSenderId: "1016166833780"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base