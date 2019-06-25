document.getElementById('registerForm').addEventListener('submit', formSubmit);

//Submit form FOR REGISTRATION
function formSubmit(e) {

  console.log(document.getElementById('student'),document.getElementById('mentor'));
  e.preventDefault();
  // Get Values from the DOM
  const first = registerForm['firstNameInput'].value,
    last = registerForm['lastNameInput'].value, 
    email = registerForm['emailInput'].value,
    password = registerForm['password'].value,
    student = document.getElementById('student').checked,
    mentor = document.getElementById('mentor').checked;

    console.log(student, mentor);

  //   Form Reset After Submission
  document.getElementById('registerForm').reset();
  
if (mentor === true){

  const mentorId = 
  db.collection('mentors').add({
    first,
    last, 
    email,
    password,
    mentor
  }).then(res => {
    console.log(res);
  })
}else if (student == true){

  const studentId = 
  db.collection('students').add({
    first,
    last, 
    email,
    password,
    student
  }).then(res => {
    console.log(res);
  })
}
}


// LOGIN USERS
function check(form){

    if ( form.loginEmail.value === "sq123@gmail.com" && form.loginPass.value === "test12345")
    {
      alert("logged in")
    }else if (form.loginEmail.value === "kathyprice@gmail.com" && form.loginPass.value === "test12345"){
      alert("logged in")
    }else{
      alert("Error Password or Username")
  }
}
     