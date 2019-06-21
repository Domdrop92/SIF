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




let posts = [
    {
        "name": "Amber",
        "title": "HTML Question",
        "Date": "8-25-19",
        "post": "I wanted to know what HTML stood for?",
        "isAnswered": true,
        "comments": [
            {
                "name": "Cynthia",
                "date": "8-26-19",
                "answer": "It stands for Hypertext Markup Language."
            }
        ]
    },
    {
        "name": "Tameka",
        "title": "What is a Var?",
        "Date": "9-10-19",
        "post": "So I am just getting into JS and don't get Var can someone help?",
        "isAnswered": true,
        "comments": [
            {
                "name": "Hannah",
                "date": "9-13-19",
                "answer": "Var in JS declares a variable. Which you use to store information."
            }
        ]
    }
];

console.log(posts);

fetch(
    'js/posts.json'
)

//store
localStorage.setItem("posts", JSON.stringify(posts));

//get
let post = JSON.parse( localStorage.getItem("posts") || "[]" );

function loadForum(){
    let text = "";

    let section2 = document.getElementById("posts");
    for (i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key); 
   
   
   text = localStorage.getItem(key)  + "<br>" ;
   
   
       }
      section2.innerHTML += text;
   }




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