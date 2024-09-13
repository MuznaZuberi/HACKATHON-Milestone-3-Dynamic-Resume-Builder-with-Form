const Form = document.getElementById("resume")as HTMLFormElement;
const cvShowcaseElement = document.getElementById("Curriculum-Vitae")as HTMLDivElement;

Form.addEventListener("submit",(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById("name")as HTMLInputElement).value
    const email = (document.getElementById("email")as HTMLInputElement).value
    const school = (document.getElementById("school")as HTMLInputElement).value
    const degree = (document.getElementById("degree")as HTMLInputElement).value
    const job = (document.getElementById("job")as HTMLInputElement).value
    const company = (document.getElementById("company")as HTMLInputElement).value
    const skills = (document.getElementById("skills")as HTMLInputElement).value


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

    if(cvShowcaseElement){
        cvShowcaseElement.innerHTML = profileHTML
    }



})
