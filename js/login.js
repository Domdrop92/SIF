document.getElementById('registerForm').addEventListener('submit', formSubmit);

//Submit form FOR REGISTRATION
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let first = registerForm['firstNameInput'].value;
  let last = registerForm['lastNameInput'].value;
  let email = registerForm['emailInput'].value;
  let password = registerForm['password'].value;
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