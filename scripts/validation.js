
// function to validate the name and email
function validate() {
  return checkUserName() && checkEmail();
}

// function to check if the entered name is correct
function checkUserName() {
  // get the name
  var userName = document.getElementById('user-name');
  // pattern for the validation of the name
  var pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  // if the name does not match the pattern inform the user with a message
  if (!pattern.test(userName.value)) {
    alert('Please provide a valid name');
    userName.focus;
    return false;
  }
  // if the name matches the pattern return true
  else {
    return true;
  }
}

// function to check if the entered email is correct
function checkEmail() {
  // get the email
  var email = document.getElementById('email-address');
  // pattern for the validation of the email
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // if the email does not match the pattern inform the user with a message
  if (!pattern.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
   return false;
  }
  // if the email matches the pattern return true
  else {
    return true;
  }
}