
//START FORUM PAGE
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

// START NAVBAR LINKS
document.getElementById("myCalendar").onclick= function(){
  location.href = "studentcalendar.html";
};
document.getElementById("myDashboard").onclick= function(){
  location.href = "dashboard.html";
};
document.getElementById("myForum").onclick= function(){
  location.href = "forum.html";
};
// END NAVBAR LINKS