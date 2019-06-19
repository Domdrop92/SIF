const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

let email = registerForm['emailInput'].value;
let password = registerForm['password'].value;

auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred)
  })
  
})

