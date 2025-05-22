let UserID = 1;
const Form = document.querySelector("form")
Form.addEventListener("submit",(e)=>{

const Name = document.getElementById("name").value;
const Pnumber = document.getElementById("num").value;
const Email = document.getElementById("email").value;
const Password = document.getElementById("pass").value;
const Address = e.target[4].value;
const Age = e.target[5].value;
const DOB = e.target[6].value;
const Gender = e.target[7].value;
const Result = document.createElement("div")
const Photo = document.getElementById("photo").files[0];//.files[0] means: get the first file the user selected.
//Generate Image
// Initialize image URL
// Ek khaali string banao jisme image ka link store hoga
let imageURL = "";
// If a file is selected, create a temporary URL to preview it // Preview ka matlab: bina upload kiye image ko dikhana bina server par bheje.
  if (Photo) {
    imageURL = URL.createObjectURL(Photo);
  } 
  //e.g Tum Facebook ya WhatsApp pe image select karte ho aur wo turant dikh jaati hai —
//upload hone se pehle — bas waisa hi hota hai preview! 

console.log(Name)
e.preventDefault();//it stops the form from submitting to the reloading of page.
e.target.reset();//This clears the form inputs & resets the form to its original state.

 // Error placeholders
 let nameError = document.getElementById("nameError");
 let phoneError = document.getElementById("phoneError");
 let emailError = document.getElementById("emailError");
 let PasswordError = document.getElementById("passError");
 let ageError = document.getElementById("ageError");

 // Clear old errors
 nameError.textContent = "";
 phoneError.textContent = "";
 emailError.textContent = "";
 PasswordError.textContent = "";
 ageError.textContent = "";
//Agar aap textcontent ka use karte hain, toh agar aap error messages mein HTML tags jaise <b>, <i>, <div>, etc. daal rahe ho, toh wo tags render ho jayenge.

 // Simple Checks
 let isValid = true;

 if (Name=== "" || Name.length < 2) {
   nameError.innerHTML = "<strong>Please enter a valid name.";
   isValid = false;//es ka maylab Yeha ha k jab isValid false ho jayega(let isValid = true k bat hurahe ha) aur form ko submit nahi karne diya jayega.
 }
 if (Pnumber == "" || Pnumber.length > 11  ) {
   phoneError.innerHTML = "<strong>Please enter a 11-Digit .";
   isValid = false;
 }
 if (!Email.includes("@") || !Email.includes(".")) {
   emailError.innerHTML = "<strong>Please enter a valid email.";
   isValid = false;
 }
 if (Password === "" || Password.length <= 7) {
   PasswordError.innerHTML = "<strong>Please enter at least 8 leaters.";
   isValid = false;
 }

 if (Age === "" || isNaN(Age) || Number(Age) <= 0) {
   ageError.innerHTML = "<strong>Please enter a valid age.</strong>";
   isValid = false;
   
 }
//  Stop if there are any errors
 if (isValid === false) return
 alert("Form Submitted Successfully!")
Result.innerHTML=`
<img src="${imageURL}" width="100" height="100" style="object-fit:cover, marginTop:4px" /><br> 
<b>ID : </b>A${UserID}<br>
<b>Name : </b>${Name}<br>
<b>Phone NO : </b>${Pnumber}<br>
<b>Email : </b>${Email}<br>
<b>Password : </b>${Password}<br>
<b>Address : </b>${Address}<br>
<b>Age : </b>${Age}<br>
<b>DOB : </b>${DOB}<br>
<b>Gender : </b>${Gender}<br>
<button class="deleteBtn">Delete</button>`;
document.getElementById("result").append(Result);//Ye keh raha hai:“Jo result wala div hai us ke andar Result ko neechay add kar do
//append “Add something at the end of an element.”
UserID++;
 // Delete functionality
  Result.querySelector(".deleteBtn").addEventListener("click", () => {
    Result.remove();
  });
  

});



