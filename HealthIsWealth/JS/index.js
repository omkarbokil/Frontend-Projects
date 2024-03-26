let vegetableCard = document.querySelectorAll(".vegetable-card");
let readInfo = document.querySelectorAll(".read-info");
let notificationBell = document.querySelector("#notification-bell");

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

notificationBell.addEventListener("click", () => {
     console.log('Hello');
})

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
     const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type}2 d-flex gap-3 align-items-center" role="alert">`,
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