interface ResumeData {
  name: string;
  email: string;
  degree: string;
  school: string;
  jobTitle: string;
  company: string;
  skills: string[];
}

const Form = document.getElementById('formresume') as HTMLFormElement;
const Display = document.getElementById('displayresume') as HTMLElement;

Form.addEventListener('submitt', (e) => {
  e.preventDefault();
  const resumeData: ResumeData = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    degree: (document.getElementById('degree') as HTMLInputElement).value,
    school: (document.getElementById('school') as HTMLInputElement).value,
    jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
    company: (document.getElementById('company') as HTMLInputElement).value,
    skills: (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()),
  };

  GenerateResume(resumeData);
});

function GenerateResume(data: ResumeData) {
  Display.innerHTML = `
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



function Formvalidate(data: ResumeData): boolean {
  if (!data.name || !data.email || !data.degree || !data.school || !data.jobTitle || !data.company || data.skills.length === 0) {
    alert('Please fill in all the fields');
    return false;
  }
  return true;
}
