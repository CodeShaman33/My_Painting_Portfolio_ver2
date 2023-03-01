import setLayout from "./main.mjs";
import Gallery from "./gallery-class.mjs";
import  createPhotoCarousel  from "./carousel.mjs";
import { paintingsList } from './data.mjs';

//setting up baasic elements 
let layout = new setLayout();
layout.setCanvas();
layout.setNavBar();
layout.hamburger();
formForm();


function formForm() {
    const container = document.getElementById('main-container');
    let formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    container.append(formContainer);
    
    let form = document.createElement('form');
    form.classList.add('form');
    
    // Email input
    let emailLabel = document.createElement('label');
    emailInput.setAttribute('id', 'email');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContext = 'your email';
    let emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Email Address');
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    
    // Input with options
    let selectInput = document.createElement('select');
    selectInput.setAttribute('name', 'options');
    let option1 = document.createElement('option');
    option1.text = 'Option 1';
    selectInput.appendChild(option1);
    let option2 = document.createElement('option');
    option2.text = 'Option 2';
    selectInput.appendChild(option2);
    let option3 = document.createElement('option');
    option3.text = 'Option 3';
    selectInput.appendChild(option3);
    form.appendChild(selectInput);
    
    // Textarea input
    let textareaInput = document.createElement('textarea');
    textareaInput.setAttribute('name', 'message');
    textareaInput.setAttribute('placeholder', 'Enter your message here');
    form.appendChild(textareaInput);
    
    // Submit button
    let submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Submit';
    form.appendChild(submitBtn);
    
    formContainer.appendChild(form);
    }
    
    // Call the function to generate the form
    
    
    
    
