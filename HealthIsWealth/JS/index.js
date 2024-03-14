let vegetableCard = document.querySelectorAll(".vegetable-card");
let readInfo = document.querySelectorAll(".read-info");
let notificationBell = document.querySelector("#notification-bell")

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