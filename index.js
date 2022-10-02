
"use strict";

let submitForm = document.querySelector("#submitForm");
submitForm.addEventListener("click", function(){
  validate(true);
});

const resetFunction = () => {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#confirm-password").value = "";
  document.querySelector("#t-and-c").checked = false;
  

  document.getElementById("first-name-Valid").style.display = "none";
  document.querySelector("#last-name-Valid").style.display = "none";
  document.querySelector("#email-Valid").style.display = "none";
  document.querySelector("#password-Valid").style.display = "none";
  document.querySelector("#confirm-password-Valid").style.display = "none";
  document.querySelector("#t-and-c-inValid").style.display = "none";
  
  submitted = false;
}

let submitted = false;

function validate(isSubmitted) {
  if(isSubmitted){
    submitted = true;
  }
  let firstName = document.querySelector("#first-name").value;
  let lastName = document.querySelector("#last-name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;
  let tnC = document.querySelector("#t-and-c").checked;
  
  let error = false;
  if(submitted){
  if (firstName.length >= 3) {
    document.getElementById("first-name-Valid").style.display = "block";
    document.querySelector("#first-name-invalid").style.display = "none";
  } else {
    document.querySelector("#first-name-invalid").style.display = "block";
    document.getElementById("first-name-Valid").style.display = "none";
    error = true;
  }
  if (lastName.length >= 3) {
    document.querySelector("#last-name-Valid").style.display = "block";
    document.querySelector("#last-name-invalid").style.display = "none";
  } else {
    document.querySelector("#last-name-invalid").style.display = "block";
    document.querySelector("#last-name-Valid").style.display = "none";
    error = true;
  }
  if (
    email.includes("@") &&
    email.includes(".") &&
    !email.startsWith("@") &&
    email.length - (email.lastIndexOf(".") + 1) >= 2
  ) {
    document.querySelector("#email-Valid").style.display = "block";
    document.querySelector("#email-invalid").style.display = "none";
  } else {
    document.querySelector("#email-invalid").style.display = "block";
    document.querySelector("#email-Valid").style.display = "none";
    error = true;
  }
  let passwordPassed = false;
  
    if (
      password.length >= 8 && password.match(/[0-9]/i) && password.match(/[^A-Za-z0-9-'']/i) && password.charAt(0) != '@')
      
      {
      document.querySelector("#password-Valid").style.display = "block";
      document.querySelector("#password-inValid").style.display = "none";
      passwordPassed = true;
    } else {
      document.querySelector("#password-Valid").style.display = "none";
      document.querySelector("#password-inValid").style.display = "block";
      error = false;
      passwordPassed = false;
    }

    if (confirmPassword === password && passwordPassed) {
      document.querySelector("#confirm-password-Valid").style.display = "block";
      document.querySelector("#confirm-password-inValid").style.display = "none";
    } else {
      document.querySelector("#confirm-password-Valid").style.display = "none";
      document.querySelector("#confirm-password-inValid").style.display = "block";
      error = true;
    }
  
  if(tnC){
    document.querySelector("#t-and-c-inValid").style.display = "none";
  } else {
    document.querySelector("#t-and-c-inValid").style.display = "block" ;
    error = true;
  }
  
  if(error === false && isSubmitted === true){
    alert('Your details have been saved successfully!');
    resetFunction();
  } 
} 
}