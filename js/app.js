// Firebase configuration
// let firebaseConfig = {
//   apiKey: "AIzaSyBfMKU92wbOsaux9enmoBN0xpdo3__de5E",
//   authDomain: "gitgirls-2019.firebaseapp.com",
//   databaseURL: "https://gitgirls-2019.firebaseio.com",
//   projectId: "gitgirls-2019",
//   storageBucket: "gitgirls-2019.appspot.com",
//   messagingSenderId: "924271804292",
//   appId: "1:924271804292:web:38987aee5f4e40d7"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log(firebase);

//Reference for form collection
let formMessage = firebase.database().ref('Users');

//listen for submit event
document.getElementById('registerForm').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let first = document.querySelector('#firstNameInput').value;
  let last = document.querySelector('#lastNameInput').value;
  let email = document.querySelector('#emailInput').value;
  let password = document.querySelector('#password', '#repeatePassword').value;
  //   let student = document.querySelector('#student').value;
  //   let mentor = document.querySelector('#mentor').value;

  //   Form Reset After Submission
  document.getElementById('registerForm').reset();

  const userId = 


  db.collection('Users').add({
    first,
    last, 
    email,
    password
  }).then(res => {
    console.log(res);
  })
}



  // function sendMessage(first, last, email, password){
  //   let newFormMessage = formMessage.push();
  //   newFormMessage.add({
  //     name: name,
  //     email: email,
  //     password: password
  //   });
  // }

