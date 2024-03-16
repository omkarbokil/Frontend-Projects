let parent = document.querySelector(".parent");
let signupBtn = document.querySelector(".signup_btn");
let addNote = document.querySelector(".add_note");
let okay = document.querySelector(".okay");


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Adding textarea on webpage
signupBtn.addEventListener("click", () =>{
     let textArea = document.createElement("textarea");
     parent.insertBefore(textArea, parent.childNodes[0]);
     let a = parent.childNodes[0];
     a.textContent = okay;
     console.log(okay);
})