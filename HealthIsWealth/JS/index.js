let vegetableCard = document.querySelectorAll(".vegetable-card");
let readInfo = document.querySelectorAll(".read-info");
let notificationBell = document.querySelector("#notification-bell");

// Bootstrap Tooltip JS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

vegetableCard.forEach((val,ind) => {
     val.addEventListener("mouseenter", () => {
          readInfo[ind].classList.remove("visually-hidden")
     })
})

vegetableCard.forEach((val,ind) => {
     val.addEventListener("mouseleave", () => {
          readInfo[ind].classList.add("visually-hidden")
     })
})


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
     const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} d-flex gap-3 align-items-center" role="alert">`,
    '<span class="material-symbols-rounded" style="color:blue">water_drop</span>',
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
].join('')

alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('notification-bell')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Paani pi le bhai !!', 'primary')
  })
}

// Body and Weight Porportion
let gender = document.querySelector(".gender");
let genderOptions = document.querySelectorAll(".gender-options");

genderOptions.forEach((val) => {
     val.addEventListener("click", () => {
          let selectedGender = val.innerText;

          gender.innerText = selectedGender;
     })
})

// Calculate Water Intake
let weight = document.querySelector("#weight");
let checkWaterIntake = document.querySelector("#check-water-intake");
let waterIntake = document.querySelector("#water-intake");

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

checkWaterIntake.addEventListener("click", () => {
     if(weight.value !== null){
          let result = weight.value * 0.03;

          result = result.toFixed(2);

          waterIntake.value = result;
     }
})