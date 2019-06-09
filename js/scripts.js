(function(){
    let makePost = document.getElementById("submitButton");

    makePost.addEventListener("click", (e) => {
        fetch('/post.json', {
            method: 'GET',
            mode: 'cors',
            
        })
    })
})