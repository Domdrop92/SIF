const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

let email = registerForm['emailInput'].value;
let password = registerForm['password'].value;

auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
   
    const modal = document.querySelector('#newAccountModal');
    modal.close();
    document.getElementById('registerForm').reset();
  });
});


  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('login-submit', (e) => {
    e.preventDefault();
  
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log the user in
    db.collection(email, password).then((cred) => {
      console.log(cred.user);
      // close the signup modal & reset form
      loginForm.reset();
    }); 
  }
)

