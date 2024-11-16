

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDialogElement;
// console.log(form ,resumeDisplayElement);


form.addEventListener("submit",(event : Event) =>{
event.preventDefault();

const name = (document.getElementById("name") as HTMLInputElement).value
const email = (document.getElementById("email") as HTMLInputElement).value
const phone = (document.getElementById("phone") as HTMLInputElement).value
const education = (document.getElementById("education") as HTMLInputElement).value
const experience = (document.getElementById("experience") as HTMLInputElement).value
const skills = (document.getElementById("skills") as HTMLInputElement).value

const resumeForHtmlG =`

<h1 ><strong> My Reusem</strong></h1>
<h3><b>Personal Infomation</b></h3>
<p ><b>Name :<span contenteditable="true"> </b>${name}</span></p>
<p><b>Email : </b><span contenteditable="true">${email}</span></p>
<p><b>Phone : </b><span contenteditable="true">${phone}</span></p>

<h3><b>Education</b></h3>
<p contenteditable="true">${education}</p>


<h3><b>Experience</b></h3>
<p contenteditable="true">${experience}</p>


<h3><b>Skills</b></h3>
<p contenteditable="true">${skills}</p>
`;

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeForHtmlG;
   
}
else{
    console.error('Reuseme Disply Missing .');
}



})