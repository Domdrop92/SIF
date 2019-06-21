//Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBfMKU92wbOsaux9enmoBN0xpdo3__de5E",
  authDomain: "gitgirls-2019.firebaseapp.com",
  databaseURL: "https://gitgirls-2019.firebaseio.com",
  projectId: "gitgirls-2019",
  storageBucket: "gitgirls-2019.appspot.com",
  messagingSenderId: "924271804292",
  appId: "1:924271804292:web:38987aee5f4e40d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const auth = firebase.auth();

console.log(firebase);

//Reference for form collection
// let formMessage = firebase.database().ref('Users');

// //listen for submit event
// document.getElementById('registerForm').addEventListener('submit', formSubmit);

// //Submit form FOR REGISTRATION
// function formSubmit(e) {
//   e.preventDefault();
//   // Get Values from the DOM
//   let first = registerForm['firstNameInput'].value;
//   let last = registerForm['lastNameInput'].value;
//   let email = registerForm['emailInput'].value;
//   let password = registerForm['password'].value;
//   //   let student = document.querySelector('#student').value;
//   //   let mentor = document.querySelector('#mentor').value;

//   //   Form Reset After Submission
//   document.getElementById('registerForm').reset();

//   const userId = 
//   db.collection('Users').add({
//     first,
//     last, 
//     email,
//     password
//   }).then(res => {
//     console.log(res);
//   })
// }

  // login
//   const loginForm = document.querySelector('#login-form');
//   loginForm.addEventListener('login-submit', (e) => {
//     e.preventDefault();
  
//     // get user info
//     const email = loginForm['login-email'].value;
//     const password = loginForm['login-password'].value;

//     // log the user in
//     db.collection(email, password).then((cred) => {
//       console.log(cred.user);
//       // close the signup modal & reset form
//       loginForm.reset();
//     }); 
//   }
// )}
// END REGISTRATION
