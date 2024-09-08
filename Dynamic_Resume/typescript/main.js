"use strict";
const resumeForm = document.getElementById('resumeForm');
const resumeDisplay = document.getElementById('resumeDisplay');
resumeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        degree: document.getElementById('degree').value,
        school: document.getElementById('school').value,
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        skills: document.getElementById('skills').value.split(',').map(skill => skill.trim()),
    };
    generateResume(resumeData);
});
function generateResume(data) {
    resumeDisplay.innerHTML = `
    <h2>${data.name}</h2>
    <p>Email: ${data.email}</p>
    <h3>Education</h3>
    <p>${data.degree} from ${data.school}</p>
    <h3>Work Experience</h3>
    <p>${data.jobTitle} at ${data.company}</p>
    <h3>Skills</h3>
    <ul>
      ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
  `;
}
function validateForm(data) {
    if (!data.name || !data.email || !data.degree || !data.school || !data.jobTitle || !data.company || data.skills.length === 0) {
        alert('Please fill in all fields');
        return false;
    }
    return true;
}
