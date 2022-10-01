// function resetFields () {

// 	document.getElementById('registration-form').reset()

// 	document.getElementById('first-name-valid').style.display = 'none'
// 	document.getElementById('last-name-valid').style.display = 'none'
// 	document.getElementById('email-valid').style.display = 'none'
// 	document.getElementById('city-valid').style.display = 'none'
// 	document.getElementById('state-valid').style.display = 'none'
// 	document.getElementById('zip-code-valid').style.display = 'none'
// 	document.getElementById('tNC-valid').style.display = 'none'
// }

// function validate() {

// 	let firstName = document.getElementById('first-name').value
// 	let lastName = document.getElementById('last-name').value
// 	let email = document.getElementById('email').value
// 	let password = document.getElementById('password').value
//     let confirmPassword = document.getElementById('confirm-password').value
// 	let tnC = document.getElementById('t-and-c').checked
     
//     let error = false

//     // First name:-

// 	if(firstName.length >= 2) {
// 		document.getElementById('first-name-valid').style.display = 'block'
// 		document.getElementById('first-name-invalid').style.display = 'none'
// 	} else {
// 		error = true
// 		document.getElementById('first-name-invalid').style.display = 'block'
// 		document.getElementById('first-name-valid').style.display = 'none'
// 	}
    
//     // last name:-

// 	if(lastName.length >= 2) {
// 		document.getElementById('last-name-valid').style.display = 'block'
// 		document.getElementById('last-name-invalid').style.display = 'none'
// 	} else {
// 		error = true
// 		document.getElementById('last-name-invalid').style.display = 'block'
// 		document.getElementById('last-name-valid').style.display = 'none'
// 	}

// 	// email:- 
	
// 	if(	email.includes('@') &&
// 		email.includes('.') &&
// 		email.indexOf('@') > 0 &&
// 		email.substr(email.lastIndexOf('.')+1).length >= 2
// 		) 
// 		{
// 		document.getElementById('email-valid').style.display = 'block'
// 		document.getElementById('email-invalid').style.display = 'none'
// 	} else {
// 		error = true
// 		document.getElementById('email-invalid').style.display = 'block'
// 		document.getElementById('email-valid').style.display = 'none'
// 	}


// 	// password

     
    
//     if(password.length>=8 && password.match(/[0-9]/i) && password.match(/[^A-Za-z0-9-' ']/i) && password.match(' ')){
// 		document.getElementById('password-valid').style.display = 'block'
// 		document.getElementById('password-invalid').style.display = 'none'
//     }
//     else{
//     		document.getElementById('password-invalid').style.display = 'block'
//     		document.getElementById('password-valid').style.display = 'none'
//     }
    
//     // confirmPassword
    
//     if(password !== confirmPassword){
//     	document.getElementById('confirm-password-invalid').style.display = 'block'
    
//     }else{
//     	document.getElementById('confirm-password-invalid').style.display = 'none'
    
//     }
    
    	 
     
    
    
    	 
//     //    checkbox:-
    
//     	if(tnC) {
// 		document.getElementById("tNC-invalid").style.display = "none"
		 
// 	} else {
// 		error = true
// 		document.getElementById("tNC-invalid").style.display = "block"
		 
// 	}

	 

// 	if(error ===  false) { // also can be checked this way: !error
// 		alert('Your details have been saved successfully!')
// 		resetFields()
// 	}

     
    

// }

// console.log('hi');


// shivam code--

"use strict";

let submitForm = document.querySelector("#submitForm");
submitForm.addEventListener("click", function(){
  validate(true);
});

const resetFn = () => {
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
  document.querySelector("#t-and-c-Valid").style.display = "none";
  
  submitted = false;
}

let submitted = false;

function validate(isSubmitted) {
  if(isSubmitted){
    submitted = true;
  }
  let firstNameValidation = document.querySelector("#first-name").value;
  let lastNameValidation = document.querySelector("#last-name").value;
  let mailValidation = document.querySelector("#email").value;
  let passValidation = document.querySelector("#password").value;
  let confirmPassValidation = document.querySelector("#confirm-password").value;
  let checkboxValidation = document.querySelector("#t-and-c").checked;
  
  let error = false;
  if(submitted){
  if (firstNameValidation.length >= 3) {
    document.getElementById("first-name-Valid").style.display = "block";
    document.querySelector("#first-name-invalid").style.display = "none";
  } else {
    document.querySelector("#first-name-invalid").style.display = "block";
    document.getElementById("first-name-Valid").style.display = "none";
    error = true;
  }
  if (lastNameValidation.length >= 3) {
    document.querySelector("#last-name-Valid").style.display = "block";
    document.querySelector("#last-name-invalid").style.display = "none";
  } else {
    document.querySelector("#last-name-invalid").style.display = "block";
    document.querySelector("#last-name-Valid").style.display = "none";
    error = true;
  }
  if (
    mailValidation.includes("@") &&
    mailValidation.includes(".") &&
    !mailValidation.startsWith("@") &&
    mailValidation.length - (mailValidation.lastIndexOf(".") + 1) >= 2
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
      passValidation.length >= 8 && passValidation.match(/[0-9]/i) && passValidation.match(/[^A-Za-z0-9-'']/i))
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

    if (confirmPassValidation === passValidation && passwordPassed) {
      document.querySelector("#confirm-password-Valid").style.display = "block";
      document.querySelector("#confirm-password-inValid").style.display = "none";
    } else {
      document.querySelector("#confirm-password-Valid").style.display = "none";
      document.querySelector("#confirm-password-inValid").style.display = "block";
      error = true;
    }
  
  if(checkboxValidation){
    document.querySelector("#t-and-c-inValid").style.display = "none";
  } else {
    document.querySelector("#t-and-c-inValid").style.display = "block";
    error = true;
  }
  
  if(error === false && isSubmitted === true){
    alert('Your details have been saved successfully');
    resetFn();
  } 
} 
}