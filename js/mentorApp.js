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
   console.log(firebase);

   //listen for submit event
document.getElementById('eventForm').addEventListener('submit', eventSubmit);

//Submit form
function eventSubmit(e) {
 e.preventDefault();
 // Get Values from the DOM
 let eventName = eventForm['eventName'].value;
 let month = eventForm['inputMonth'].value;
 let day = eventForm['day'].value;
 let description = eventForm['description'].value;

 //   Form Reset After Submission
 document.getElementById('eventForm').reset();

 const eventId =
 db.collection('Events').add({
   eventName,
   month,
   day,
   description
 }).then(res => {
   console.log(res);
 })
}