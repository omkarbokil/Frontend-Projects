let itemOne = document.querySelectorAll(".item-1");
let itemCard1 = document.querySelectorAll(".item-card-1");

// itemOne.addEventListener("mouseover", () => {
//      itemCard1.classList.remove("hidden");
// })
// itemOne.addEventListener("mouseout", () => {
//      itemCard1.classList.add("hidden");
// })
// itemCard1.addEventListener("mouseover", () => {
//      itemCard1.classList.remove("hidden");
// })

itemOne.forEach((val, ind) => {
     val.addEventListener("mouseover", () => {
          itemCard1[ind].classList.remove("hidden");
     })
})

itemOne.forEach((val, ind) => {
     val.addEventListener("mouseout", () => {
          itemCard1[ind].classList.add("hidden");
     })
})

// itemOne.forEach((ach) => {
//      ach.addEventListener("mouseover", () => {
//           itemCard1.forEach((element, val) => {
//                itemCard1[val].classList.remove("hidden");
//                console.log("inner", val);
//           });
//      })
// })