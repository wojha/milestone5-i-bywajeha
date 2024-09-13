document.getElementById('resumeform')?.addEventListener("submit", function(event){
    event.preventDefault();

 //type assertion
const  profilePictureInput = document.getElementById(
  "profilePicture"
) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLAreaElement;

//** 
const usernameElement = document.getElementById(
  "username"
) as HTMLInputElement;

    
    
    
    
    
    if (
       profilePictureInput && 
      nameElement && 
      emailElement && 
      phoneElement &&
       educationElement && 
       experienceElement && 
       skillsElement &&
//**
      usernameElement
      
      
        ) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.nodeValue;
        const experience = experienceElement.nodeValue;
        const skills = skillsElement.nodeValue;

        //** 
        const username = usernameElement.value;
        const uniquePath = `resume/${username.replace(/\s+/g,'')}_cv.html`




//picture element 
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile
 ? URL.createObjectURL(profilePictureFile)
  : "";

    const resumeOutput = `
          <h2>Resume</h2>
         ${
           profilePictureURL 
             ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` 
             : ""
            }
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
      `;
      
 
//** 
const downloadLink = document.createElement('a')
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = 'Download Your 2024 Resume';



// resume output
    const resumeOutputElement = document.getElementById("resumeOutput");
     if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;

//**
resumeOutputElement.appendChild(downloadLink)

        resumeOutputElement.style.display = "block";
            }
} else {
    console.error("one or more output elements are missing.")
}
});
