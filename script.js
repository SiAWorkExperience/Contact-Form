let fNElement = document.getElementById("fName");
let lNElement = document.getElementById("lName");
let emElement = document.getElementById("email");
let msElement = document.getElementById("message");
let element1 = document.getElementById("radioButton1");
let element2 = document.getElementById("radioButton2");

function validateForm(){
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const gen = document.getElementById("generalEnquiry").checked;
  const sup = document.getElementById("supportRequest").checked;
  const message = document.getElementById("message").value;
  const consent = document.getElementById("consent").checked;
  fNameError.textContent = "";
  fNElement.className = "input";
  lNameError.textContent = "";
  lNElement.className = "input";
  emailError.textContent = "";
  emElement.className = "input";
  queryError.textContent = "";
  messageError.textContent = "";
  msElement.className = "input";
  checkboxError.textContent = "";
  let isValid = true;
  if (firstName == ""){
    fNameError.textContent = "This field is required";
    fNElement.className = "inputError";
    isValid = false;
  }
  if (lastName == ""){
    lNameError.textContent = "This field is required";
    lNElement.className = "inputError";
    isValid = false;
  }
  if (gen == false && sup == false){
    queryError.textContent = "Please select a query type";
    isValid = false
  }
  if (email.includes("@") == false){
    emailError.textContent = "Please enter a valid email address";
    emElement.className = "inputError";
    isValid = false;
  }
  if (email == ""){
    emailError.textContent = "This field is required";
    emElement.className = "inputError";
    isValid = false;
  }
  if (message == ""){
    messageError.textContent = "This field is required";
    msElement.className = "inputError";
    isValid = false
  }
  if (consent == false){
    checkboxError.textContent = "To submit this form, please consent to being contacted";
    isValid = false
  }
  if (isValid == true){
    const popup = document.getElementById("popup");
    popup.className = "show";
    setTimeout(function(){popup.className = popup.className.replace("show", "")}, 3000);
  }
  return isValid
}

function radioChange1(){
  element1.className = "newInput";
  element2.className = "input";
}
function radioChange2(){
  element1.className = "input";
  element2.className = "newInput";
}