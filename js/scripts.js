(function(){
    const messageButton = document.getElementById('message-button');

    console.log(messageButton);

    messageButton.addEventListener('click', (e) => {
        setInterval(() => {
            fetch('/messages.json', {
                method: 'GET',
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(res => {
                res.messages.push({id: 2, content: "Stuffffff"});

                console.log(res.messages);
            });
        }, 5000);
    }); 
}());