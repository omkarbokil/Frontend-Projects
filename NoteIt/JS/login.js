let viewPassword = document.querySelectorAll(".view_password");
let password = document.querySelector("#password");
let passwords = document.querySelectorAll(".passwords");
let viewPasswordIcon = document.querySelectorAll(".view_password_icon");
let signupBtn = document.querySelector(".signup_btn");
let signupLogo = document.querySelector(".signup_logo");

let checkViewCount = true;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
     'use strict'
   
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     const forms = document.querySelectorAll('.needs-validation')
   
     // Loop over them and prevent submission
     Array.from(forms).forEach(form => {
       form.addEventListener('submit', event => {
         if (!form.checkValidity()) {
           event.preventDefault()
           event.stopPropagation()
         }
   
         form.classList.add('was-validated')
       }, false)
     })
   })()

// viewPassword.addEventListener("click", () => {
//      if(checkViewCount == true){
//           password.type = 'text';
//           checkViewCount = false;
//      }
//      else{
//           password.type = 'password';
//           checkViewCount = true;
//      }

// })

viewPassword.forEach((val, ind) => {
     val.addEventListener("click", () => {
          if(checkViewCount == true){
               passwords[ind].type = 'text';
               checkViewCount = false;
               console.log(checkViewCount);
               viewPasswordIcon[ind].innerText = 'visibility_off';
          }
          else{
               passwords[ind].type = 'password';
               checkViewCount = true;
               console.log(checkViewCount);
               viewPasswordIcon[ind].innerText = 'visibility';
          }
     
     })
})