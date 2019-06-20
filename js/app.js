//Firebase configuration
const firebaseConfig = {
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

  document.getElementById('postForm').addEventListener('submitButton', submitPost);
  
  function submitPost(e) {
      e.preventDefault();

      let name = postForm['formUserName'].value;
      let title = postForm['formTitle'].value;
      let post = postform['messageText'].value;

      document.getElementById('postForm').reset();

      const postId = 
      db.collection('forumPosts').add({
          name,
          title,
          post,
          date: firebase.database.ServerValue.TIMESTAMP
      });
  };