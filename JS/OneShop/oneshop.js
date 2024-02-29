let itemOne = document.querySelectorAll(".item-1");
let itemCard1 = document.querySelectorAll(".item-card-1");
let buyNow = document.querySelectorAll(".buy-now");
let offer = document.querySelectorAll(".offer");
let offer1 = document.querySelectorAll(".offer1");

itemOne.forEach((val, ind) => {
     val.addEventListener("mouseenter", () => {
          buyNow[ind].classList.remove("hidden");
     })
})

itemOne.forEach((val, ind) => {
     val.addEventListener("mouseleave", () => {
          buyNow[ind].classList.add("hidden");
     })
})

offer.forEach((val, ind) => {
     val.addEventListener("mouseenter", () => {
          offer1[ind].classList.remove("hidden");
     })
})

offer.forEach((val, ind) => {
     val.addEventListener("mouseleave", () => {
          offer1[ind].classList.add("hidden");
     })
})