import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";




const firebaseConfig = {
 apiKey: "AIzaSyDnaHwUv6yZSK6E4bUuibX373fQ_xUm7TY",
 authDomain: "chuhani.firebaseapp.com",
 databaseURL: "https://chuhani-default-rtdb.europe-west1.firebasedatabase.app",
 projectId: "chuhani",
 storageBucket: "chuhani.appspot.com",
 messagingSenderId: "1060950558265",
 appId: "1:1060950558265:web:af8caa1da3f1c2049f6fe8",
 measurementId: "G-69J3S9KEQQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.addEventListener("DOMContentLoaded", function() {
 window.onload = function() {
     document.getElementById("reg-btn").addEventListener('click',  function(){
       document.getElementById("register-div").style.display="inline";
       document.getElementById("login-div").style.display="none";
       
     });
     
     document.getElementById("log-btn").addEventListener('click', function(){
       document.getElementById("register-div").style.display="none";
       document.getElementById("login-div").style.display="inline";
     
     });
     
     document.getElementById("login-btn").addEventListener('click', function(){
       login();
     });
     
     document.getElementById("login-password").addEventListener('keydown', function(event){
       if (event.key === "Enter") {
         event.preventDefault();
         login();
       }
     });



     function login() {
     const loginEmail = document.getElementById("login-email").value;
     const loginPassword = document.getElementById("login-password").value;

     signInWithEmailAndPassword(auth, loginEmail, loginPassword)
       .then((userCredential) => {
         const user = userCredential.user;
         document.getElementById("result-box").style.display="inline";
         document.getElementById("login-div").style.display="none";
         location.href = "homepage.html";
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert("Sorry !\n" + errorMessage);
       });
     }


       document.getElementById("register-btn").addEventListener('click', function(){

       const registerEmail= document.getElementById("register-email").value;
       const registerPassword =document.getElementById("register-password").value;

       createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
       .then((userCredential) => {
         const user = userCredential.user;
         alert("User registered successfully!");
       }).catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert("Sorry !\n" + errorMessage);

       });
     });


     document.getElementById("register-email").addEventListener('keypress', function(e){
       if (e.key === "Enter"){
         e.preventDefault(); // Prevents the form from submitting or page from refreshing
         const registerEmail= document.getElementById("register-email").value;
         const registerPassword =document.getElementById("register-password").value;
         createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
         .then((userCredential) => {
           const user = userCredential.user;
           alert("User registered successfully!");
         }).catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           alert("Sorry !\n" + errorMessage);
         });
       }
     });

     document.getElementById("register-password").addEventListener('keypress', function(e){
       if (e.key === "Enter"){
         e.preventDefault(); // Prevents the form from submitting or page from refreshing
         const registerEmail= document.getElementById("register-email").value;
         const registerPassword =document.getElementById("register-password").value;
         createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
         .then((userCredential) => {
           const user = userCredential.user;
           alert("User registered successfully!");
         }).catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           alert("Sorry !\n" + errorMessage);
         });
       }
     });



 };
});