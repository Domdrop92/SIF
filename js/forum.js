document.getElementById('postForm').addEventListener('submit', submitPost);
  
  function submitPost(e) {
      e.preventDefault();

      let name = postForm['formUserName'].value;
      let title = postForm['formTitle'].value;
      let post = postForm['messageText'].value;

      document.getElementById('postForm').reset();

      const postId = 
      db.collection('forumPosts').add({
          name,
          title,
          post
      }).then(res => {
        console.log(res);
    })
  }



// nav bar
document.getElementById("myCalendar").onclick= function(){
  window.open(location.href = "calendar.html","_blank" );
};
document.getElementById("myDashboard").onclick= function(){
  window.open(location.href = "dashboard.html","_blank" );
};
document.getElementById("myForum").onclick= function(){
  window.open(location.href = "forum.html","_blank" );
};
document.getElementById("myInbox").onclick= function(){
  window.open(location.href = "inbox.html","_blank" );
};

const posts = document.querySelector('#posts');
function renderPosts(doc){
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let li = document.createElement('li');
  let name = document.createElement('span');
  let message = document.createElement('span');
  let title = document.createElement('span');

  
  h2.setAttribute('data.id', doc.id);
  title.textContent = doc.data().title;
  h2.appendChild(title);
  
  posts.appendChild(h2);

  h3.setAttribute('data.id', doc.id);
  name.textContent = doc.data().name;
  h3.appendChild(name);
  
  posts.appendChild(h3);

  li.setAttribute('data.id', doc.id);
  message.textContent = doc.data().post;
  li.appendChild(message);
  
  posts.appendChild(li);

}
db.collection('forumPosts').get().then((snapshot)=>{
  snapshot.docs.forEach(doc =>{
    renderPosts(doc);
  })
})
//  function toDoList(){
//   const item = document.getElementById('toDoInput').value
//   const text = document.createTextNode(item);
//   const newItem = document.createElement('li');
//   const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.addEventListener('click', deleteItem);
//   newItem.appendChild(text);
//   newItem.appendChild(deleteBtn);
//   document.getElementById('toDoList').appendChild(newItem);
//   document.forms[0].reset();
// }
// function deleteItem(){
//   console.log(this.parentNode);
//   this.parentNode.style.display ="none";
// }
// var myDate = new Date();
// console.log(myDate);
// document.getElementById('myDate').append;

// api info
// var config = {
//   apiKey: "AIzaSyBfMKU92wbOsaux9enmoBN0xpdo3__de5E",
//   authDomain: "gitgirls-2019.firebaseapp.com",
//   databaseURL: "https://gitgirls-2019.firebaseio.com",
//   projectId: "gitgirls-2019",
//   storageBucket: "gitgirls-2019.appspot.com",
//   messagingSenderId: "924271804292",
//   appId: "1:924271804292:web:38987aee5f4e40d7"
// };
// firebase.initializeApp(config);

// var userDataRef = firebase.database().ref("forumPost").orderByKey();
// userDataRef.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var key = childSnapshot.key;
//       var childData = childSnapshot.val();              // childData will be the actual contents of the child

//       var nameval = childSnapshot.val().Name;
//       document.getElementById("name").innerHTML = nameval;
//   });
//  });
    // const db = firebase.firestore();
    // const auth = firebase.auth();
// end api info
// function writeData() {
//   firebase.database().ref("forumPosts").set({
//     name: document.getElementById("nameField").value,
//     post: document.getElementById("postField").value
//   });
// }
// // data
// function getData() {
//   firebase.database().ref('/').once('value', function(snapshot){
//     snapshot.forEach(function(childSnapshot)
//     {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
//       document.getElementById("data").innerHTML = childData['name'] + "," + childData['post'];
//     })
//   })
// }
// getData();
// // end data


// //START FORUM PAGE
document.getElementById('postForm').addEventListener('submit', submitPost);
  
  function submitPost(e) {
      e.preventDefault();

      let name = postForm['formUserName'].value;
      let title = postForm['formTitle'].value;
      let post = postForm['messageText'].value;

      document.getElementById('postForm').reset();

      const postId = 
      db.collection('forumPosts').add({
          name,
          title,
          post
      }).then(res => {
        console.log(res);
    })
  }



// nav bar
document.getElementById("myCalendar").onclick= function(){
  window.open(location.href = "calendar.html","_blank" );
};
document.getElementById("myDashboard").onclick= function(){
  window.open(location.href = "dashboard.html","_blank" );
};
document.getElementById("myForum").onclick= function(){
  window.open(location.href = "forum.html","_blank" );
};
document.getElementById("myInbox").onclick= function(){
  window.open(location.href = "inbox.html","_blank" );
};
// end nav bar

// let posts = [
//     {
//         "name": "Amber",
//         "title": "HTML Question",
//         "Date": "8-25-19",
//         "post": "I wanted to know what HTML stood for?",
//         "isAnswered": true,
//         "comments": [
//             {
//                 "name": "Cynthia",
//                 "date": "8-26-19",
//                 "answer": "It stands for Hypertext Markup Language."
//             }
//         ]
//     },
//     {
//         "name": "Tameka",
//         "title": "What is a Var?",
//         "Date": "9-10-19",
//         "post": "So I am just getting into JS and don't get Var can someone help?",
//         "isAnswered": true,
//         "comments": [
//             {
//                 "name": "Hannah",
//                 "date": "9-13-19",
//                 "answer": "Var in JS declares a variable. Which you use to store information."
//             }
//         ]
//     }
// ];

// console.log(posts);

// fetch(
//     'js/posts.json'
// )

// //store
// localStorage.setItem("posts", JSON.stringify(posts));

// //get
// let post = JSON.parse( localStorage.getItem("posts") || "[]" );

// function loadForum(){
//     let text = "";

//     let section2 = document.getElementById("posts");
//     for (i = 0; i < localStorage.length; i++){
//         var key = localStorage.key(i);
//         var value = localStorage.getItem(key); 
   
   
//    text = localStorage.getItem(key)  + "<br>" ;
   
   
//        }
//       section2.innerHTML += text;
//    }




// (function(){
//     let posts = getelement
//     let makePost = document.getElementById("submitButton");

//     makePost.addEventListener("click") 
//         fetch('/posts.json', {
//             method: 'GET',
//             mode: 'cors',
//             credentials: 'same-origin',
//             headers: {
//                 "content-type": 'Application/json'
//             }
//         })
// })