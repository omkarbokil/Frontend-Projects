let parent          =    document.querySelector(".parent");
let addNoteContent  =    document.querySelector(".add_note_content");
let addNote         =    document.querySelector(".add_note");
let test            =    document.querySelector("#test");
let noteTitle       =    document.querySelector("#noteTitle");
let noteMessage     =    document.querySelector("#noteMessage");
let emptyMessage    =    document.querySelector(".empty_message");
let noteName        =    document.querySelector("#note_name");
let notes           =    document.querySelectorAll(".notes");
// Common Variables
let closeButton     =    document.querySelector(".close_button");

// Bootstrap Tooltip JS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Draggable Calculator
//Make the DIV element draggagle:
dragElement(document.getElementById("calculator"));

function dragElement(elmnt) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
     if (document.getElementById(elmnt.id + "header")) {
          /* if present, the header is where you move the DIV from:*/
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
     }
     else{
          /* otherwise, move the DIV from anywhere inside the DIV:*/
          elmnt.onmousedown = dragMouseDown;
     }

     function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
     }

     function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
     }

     function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
     }
}

// Toast Notification
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

// When clicking on ADD NEW NOTE, clearing the Title and Note area, so that user can input new data
addNote.addEventListener("click", () => {
     noteTitle.value = '';
     noteMessage.value = '';
})

// Adding textarea on webpage
addNoteContent.addEventListener("click", () =>{

     if(noteTitle.value.length > 0 || noteMessage.value.length > 0){
          let noteModal = document.createElement("div");
          // console.log(noteTitle.value);
          let titles = noteTitle.value;
          let messages = noteMessage.value;

          noteModal.setAttribute("class", "notes");
     
          noteModal.innerHTML = `
          <section class="note_display">
               <h4 id="note_title">${titles}</h4>
               <hr>
               <div id="note_content">
                     ${messages}
               </div>
          </section>
          `;
     
          parent.insertBefore(noteModal, parent.childNodes[0]);

          const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
          noteName.innerText = titles;
          toastBootstrap.show();
          
          noteTitle.value = '';
          noteMessage.value = '';
          emptyMessage.innerText = '';
     }
     else{
          emptyMessage.innerText = "Title or Note should contain something";
     }
})

// Calculator
let calculateIcon        =    document.querySelector("#calculate_icon");
let calculator           =    document.querySelector("#calculator");
let calcDisp             =    document.querySelector(".calc_disp");
let calcBtnClear         =    document.querySelector("#calc_btn_clear");
let one                  =    document.querySelector("#calc_btn_1");
let two                  =    document.querySelector("#calc_btn_2");
let three                =    document.querySelector("#calc_btn_3");
let four                 =    document.querySelector("#calc_btn_4");
let five                 =    document.querySelector("#calc_btn_5");
let calculatorButtons    =    document.querySelectorAll(".calculator_buttons");
let calculatorFlag       =    true;

// When clicking on Calculator Icon Menu
calculateIcon.addEventListener("click", ()=> {
     if(calculatorFlag == true){
          calculator.classList.remove("d-none");
          calculatorFlag = false;
          console.log(calculatorFlag);
     }
     else{
          calculator.classList.add("d-none");
          calculatorFlag = true;
          console.log(calculatorFlag);
     }
})

// When clikcing on Calculator close button
closeButton.addEventListener("click", ()=> {
     calculator.classList.add("d-none");
     calculatorFlag = true;
})

// When clicking Clear button
calcBtnClear.addEventListener("click", ()=> {
     calcDisp.innerText = '';
})

calculatorButtons.forEach((val) => {
     val.addEventListener("click", () => {
          let calcDispData = calcDisp.innerText;
          if(val.innerText == 'C')
               calcDisp.innerText = '';
          else
               calcDisp.innerText = calcDispData + val.innerText;
     })
})

// Password Vault
// let lockIcon        =    document.querySelector("#lock_icon");
// let passwordVault   =    document.querySelector("#password_vault");

// lockIcon.addEventListener("click", () => {
//      passwordVault.classList.remove("d-none");
// })