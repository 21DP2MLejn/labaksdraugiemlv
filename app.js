  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBwUXhfAE0MiSBC5127xkCekgkpZxLnpnk",
    authDomain: "cuhani.firebaseapp.com",
    projectId: "cuhani",
    storageBucket: "cuhani.appspot.com",
    messagingSenderId: "760712515949",
    appId: "1:760712515949:web:e2e37d4d4a1578fce88a64",
    measurementId: "G-5XSLZXGT90"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth()
  const analytics = getAnalytics(app);

var email = document.getElementsById("email")
var password = document.getElementById("password")

window.signup = function(e){
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("Registered successfully")
    })
    .catch(function(err){
        alert("error" + err)
    })
    console.log(obj)
};
   
