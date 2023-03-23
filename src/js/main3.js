    
var passLabel = document.getElementById("passLabel");
var fieldWrap = document.getElementById("field-wrap");
var undrlinePass = document.getElementById("under-pass");
var undrlineEmail = document.getElementById("under-email");
var passInput = document.getElementById("pass");
var emailInput = document.getElementById("email");
var passValue = document.getElementById("pass").value;
var emailValue = document.getElementById("email").value;
var emailError = document.getElementById("email-error");
var passError = document.getElementById("pass-error");


var eyeIcon = document.getElementById("eye-icon");
var loginBtn = document.getElementById("login");
var frgtBtn = document.getElementById("forget");
var slideBtn = document.getElementById("slide");


var eye = false;  
var pass = false;
var thePass = "nirit.website";
var checkEmail = false;

  
passInput.addEventListener("blur", blurPass);
emailInput.addEventListener("blur", blurEmail);


frgtBtn.addEventListener("mouseover", slideRight);
frgtBtn.addEventListener("mouseout", slideLeft);
loginBtn.addEventListener("mouseover", slideLeft);
loginBtn.addEventListener("click", checkFields);


  
//----ON FOCUS----//

passInput.onfocus=function() {
undrlinePass.style.width = ("100%");

}

emailInput.onfocus=function() {
undrlineEmail.style.width = ("100%");

}		



//----ON INPUT EMAIL----//
function typeEmail(valemail) {
 
            console.log(valemail.length);
			console.log(valemail);
			
			
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(valemail.match(mailformat)) {
	console.log("email is good");
	    checkEmail = true;
		emailIsGood();
		
   } else {
		undrlineEmail.style.width = ("100%");
        emailIsError();
		checkEmail = false;
		console.log("email is bad");

	} 

     if(valemail.length > 0){
		undrlineEmail.style.width = ("100%");
        }else if(valemail.length < 0 || valemail == ""){
         		undrlineEmail.style.width = ("0");
			    checkEmail = false;
        }
 
	
}

//----ON INPUT PASSWORD----//
function typePass(type) {
	
			console.log(type.length);
			console.log(type);
	
	if(type === thePass){
	    passIsGood();
	    pass = true;
		hideHint();
		
		
   } else if(type !== thePass){
	   	passIsError();
		pass = false;
	} 

     if(type.length > 0){
	  undrlinePass.style.width = ("100%");
       eye = true;
       eyeIcon.style.visibility = "visible";	
        }else if(type.length < 0 || passValue == ""){
				 undrlinePass.style.width = ("0");
				 pass = false;
		
          eye = false;
	      eyeIcon.style.visibility = "hidden";	
        }
}


function blurPass() {
	console.log("blur pass");
  if(passValue.length < 0 || passValue == ""){
	undrlinePass.style.width = ("0"); 
passError.classList.remove('show-err');
        passError.classList.add('hide-err');		
  }	
}

function blurEmail() {
	console.log("blur email");
  if(emailValue.length < 0 || emailValue == ""){
	undrlineEmail.style.width = ("0"); 
    emailError.classList.remove('show-err');
    emailError.classList.add('hide-err');		
  }	
}

function passIsError() {
		passError.innerHTML = "Please enter a correct password";
        undrlinePass.classList.add('bg-red');
		undrlinePass.classList.remove('bg-under');
		passError.classList.add('show-err');
        passError.classList.remove('hide-err');	
		undrlinePass.style.width = ("100%");
}

function passIsGood() {
        passError.classList.remove('show-err');
        passError.classList.add('hide-err');
		undrlinePass.classList.remove('bg-red');
		undrlinePass.classList.add('bg-under');
		undrlinePass.style.width = ("100%");
}

function emailIsError() {
		emailError.innerHTML = "Please enter a valid e-mail address";
		undrlineEmail.classList.add('bg-red');
		undrlineEmail.classList.remove('bg-under');
		emailError.classList.add('show-err');
        emailError.classList.remove('hide-err');
		undrlineEmail.style.width = ("100%");		
}

function emailIsGood() {
		undrlineEmail.style.width = ("100%");
        emailError.classList.remove('show-err');
        emailError.classList.add('hide-err');
		undrlineEmail.classList.remove('bg-red');
		undrlineEmail.classList.add('bg-under');
}

//---- PASSWORD ----//
function shoPass() {
  if (passInput.type === "password") {
    passInput.type = "text";    
  } else {
    passInput.type = "password";
  }
   if (passValue.length >= 0) {	   
    toggleIcon();
    console.log('toggle');

   } else {
		eyeIcon.classList.add('fa-eye');
   }

}

//----TOGGLE EYE ICON----//
function toggleIcon() {
		eyeIcon.classList.toggle('fa-eye-slash');
		undrlinePass.style.width = ("100%");

}


//----BUTTONS EFFECT----//
function slideRight() {
    slideBtn.classList.add('slide-right');
    slideBtn.classList.remove('slide-left');		
	frgtBtn.classList.add('color-white');
	frgtBtn.classList.remove('color-grey');
	loginBtn.classList.add('color-grey');
}
function slideLeft() {
	slideBtn.classList.add('slide-left');	
	loginBtn.classList.remove('color-grey');
	loginBtn.classList.add('color-white');
	frgtBtn.classList.add('color-grey');
}

//----ON SUBMIT----//
function checkFields() {
	
	if (checkEmail){
		console.log("email checked and gute!");
	} else {
		
		console.log("email checked and NO!");
		emailIsError();
	}
	
	if (pass){
		console.log("pass checked and gute!");
	} else {
		console.log("pass checked and NO!");
		passIsError();

	}
	
	if (pass & checkEmail) {
		endLogin();
		hideHint();
	}
	
	// noTextCursor(btn);
	
}

function noTextCursor(btn) {
  btn.classList.add('no-cursor');
}

function clearForm() {
	document.getElementById("main-form").reset();
}



