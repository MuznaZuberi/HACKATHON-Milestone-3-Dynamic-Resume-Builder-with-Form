"use strict";
const Form = document.getElementById("resume");
const cvShowcaseElement = document.getElementById("Curriculum-Vitae");
Form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const school = document.getElementById("school").value;
    const degree = document.getElementById("degree").value;
    const job = document.getElementById("job").value;
    const company = document.getElementById("company").value;
    const skills = document.getElementById("skills").value;
    const profileHTML = `
    <h2><b>Professional Highlights</b></h2>
    <br/>
    <h3>Personal Information</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>


    <h3>Education</h3>
    <p>School: ${school}</p>
    <p>Degree: ${degree}</p>




    <h3>Experience</h3>
    <p>Job-Title: ${job}</p>
    <p>Company: ${company}</p>


     <h3>Skills</h3>
    <p>Skills: ${skills}</p>

    `;
    if (cvShowcaseElement) {
        cvShowcaseElement.innerHTML = profileHTML;
    }
});
