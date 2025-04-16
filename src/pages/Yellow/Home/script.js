"use strict";

const studentLogInForm = document.getElementsByClassName("studentLogInForm")
const studentLoginEmail = document.getElementsByClassName("studentLoginEmail");
const studentLoginPassword = document.getElementsByClassName("studentLoginPassword");
const studentLoginResult = document.getElementsByClassName("studentLoginResult");
const studentLoginButton = document.getElementsByClassName("studentLoginButton")
const studentSignUpButton = document.getElementsByClassName("studentSignUpButton")


//Event listener
studentSignUpButton.addEventListener("click", sendStudentLogin)


//Function

function sendStudentLogin(event) {
    event.preventDefault();
    console.log("Logged In");
    
}





