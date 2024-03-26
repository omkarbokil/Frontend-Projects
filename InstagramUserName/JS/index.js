// Bootstrap Tooltip JS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Username Generation
let generateUsername = document.querySelector(".generate_btn");
let generatedBlock  =    document.querySelector(".generated_block");
let userInput = document.querySelector(".user_input");

let usernames1 = ['@', '2024', 'official', 'king', 'social', 'i_am', 'just', 'what', 'always'];
let usernames2 = ['@', '2024', 'official', 'king', 'social', 'i_am', 'just', 'what', 'always'];
let usernames3 = ['@', '2024', 'official', 'king', 'social', 'i_am', 'just', 'what', 'always'];
let usernames4 = ['@', '2024', 'official', 'king', 'social', 'i_am', 'just', 'what', 'always'];
let checkRound = 'first';

generateUsername.addEventListener("click", () => {
     if(checkRound == 'first'){
          usernames1.forEach((val) => {
               kk(val);
          })
          checkRound = 'second';
     }
     else if(checkRound == 'second'){
          usernames2.forEach((val) => {
               kk(val);
          })
          checkRound = 'third';
     }
     else if(checkRound == 'third'){
          usernames3.forEach((val) => {
               kk(val);
          })
          checkRound = 'fourth';
     }
     else if(checkRound == 'fourth'){
          usernames4.forEach((val) => {
               kk(val);
          })
          checkRound = 'first';
     }

})

kk = (val) =>{
     let value = userInput.value;
     let newSection = document.createElement("div");

     newSection.setAttribute("class", "generated_usernames");
     newSection.setAttribute("role", "button");
     newSection.classList.add('px-4', 'py-1' ,'rounded-5', 'text-center');
     if(checkRound == 'first'){
          newSection.innerHTML = 
               `${val}_${value}`
               localStorage.setItem("ok",`${newSection}`);
               console.log(localStorage.getItem("ok"));
     }
     else if(checkRound == 'second'){
          newSection.innerHTML = 
               `${val}.${value}`
     }
     else if(checkRound == 'third'){
          newSection.innerHTML = 
               `${value}_${val}`
     }
     else if(checkRound == 'fourth'){
          newSection.innerHTML = 
               `@${val}${value}`
     }

     generatedBlock.appendChild(newSection);
}

let generatedUsernames = document.querySelectorAll(".generated_usernames");

(generatedBlock.childNodes).forEach((val) => {
     val.addEventListener("click", () => {
          console.log('no');
     })
})