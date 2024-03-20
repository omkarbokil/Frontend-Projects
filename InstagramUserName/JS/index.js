// Bootstrap Tooltip JS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Username Generation
let generateUsername = document.querySelector(".generate_btn");
let generatedBlock  =    document.querySelector(".generated_block");
let userInput = document.querySelector(".user_input");

let usernames = ['itz','official','_','unofficial','its'];

generateUsername.addEventListener("click", () => {
     let value = userInput.value;

     usernames.forEach((val) => {
          generatedBlock.innerHTML = 
          `<div>
               ${val}_${value}
          </div>`;
     })
})