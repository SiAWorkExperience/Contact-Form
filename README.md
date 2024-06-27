# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
  

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/SiAWorkExperience/SiAWorkExperience.github.io/assets/173684234/a90d70b6-5d90-4a7b-b494-e49445d1e1ca)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Flexbox

### What I learned

I learned how to create a proper layout for HTML documents by using CSS, in addition to flexbox.

form{
  border: 2px solid white;
  border-radius: 7px;
  padding: 10px 30px 20px 30px;
  display: flex;
  flex-flow: column;
  background-color: white;
  max-width: 65%;
}

Furthermore, I was able to adapt the page to change it's format for mobile devices, which was achieved using CSS.

@media (max-width: 644px){
  .flex1, .flex2{
    flex: 100%;
  }body{
    padding-top: 10px;
  }form{
    padding: 0px 30px 15px 30px;
    max-width: 80%;
  }
}

Another useful skill I learned was how to properly utilise JavaScript in order to provide client-side validation and feedback as to what needs to be filled in.

This is one example of how I was able to validate the "First Name" field:

HTML:
  <label for="fName">First Name <span id="asterix">*</span></label>
  <input type="text" id="fName" name="fName" class="input">
  <span id="fNameError" class="errorMessage"></span>

CSS:
.errorMessage{
  color: hsl(0, 66%, 54%);
}

.inputError{
  border: 2px solid hsl(0, 66%, 54%);
  border-radius: 7px;
  background-color: #FFFFFF;
  height: 30px;
}

.input{
  border: 1px solid hsl(186, 15%, 59%);
  border-radius: 7px;
  background-color: #FFFFFF;
  height: 30px;
}

JS:
function validateForm(){
  const firstName = document.getElementById("fName").value;
  fNameError.textContent = "";
  fNElement.className = "input";
  let isValid = true;
if (firstName == ""){
    fNameError.textContent = "This field is required";
    fNElement.className = "inputError";
    isValid = false;
  }
  return isValid

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**
In future projects, I would like to continue refining my skills using CSS and JavaScript, as I found them to be very powerful tools. In particular, I would like to practice with flexbox and grid in CSS, as I found them essential for creating a proper layout for web pages.

### Useful resources

- [https://www.w3schools.com/] - This is a very useful site for finding how to use certain syntax for HTML, CSS and JS.
- [https://flexboxfroggy.com/] - This is a great game for learning how to properly manipulate CSS flexbox

## Author

- Frontend Mentor - [@SiAWorkExperience](https://www.frontendmentor.io/profile/SiAWorkExperience)
