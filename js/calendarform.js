
   //listen for submit event
document.getElementById('eventForm').addEventListener('submit', eventSubmit);

//Submit form
function eventSubmit(e) {
 e.preventDefault();
 // Get Values from the DOM
 let eventName = eventForm['eventName'].value;
 let month = eventForm['inputMonth'].value;
 let day = eventForm['day'].value;
 let description = eventForm['description'].value;

 //   Form Reset After Submission
 document.getElementById('eventForm').reset();

 const eventId =
 db.collection('Events').add({
   eventName,
   month,
   day,
   description
 }).then(res => {
   console.log(res);
 })
}