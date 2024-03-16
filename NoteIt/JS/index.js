let parent = document.querySelector(".parent");
let addNoteContent = document.querySelector(".add_note_content");
let addNote = document.querySelector(".add_note");
let okay = document.querySelector(".okay");
let test = document.querySelector("#test");
let noteTitle = document.querySelector("#noteTitle");
let noteMessage = document.querySelector("#noteMessage");
let emptyMessage = document.querySelector(".empty_message");
let noteName = document.querySelector("#note_name");


// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//      'use strict'
   
//      // Fetch all the forms we want to apply custom Bootstrap validation styles to
//      const forms = document.querySelectorAll('.needs-validation')
   
//      // Loop over them and prevent submission
//      Array.from(forms).forEach(form => {
//        form.addEventListener('submit', event => {
//          if (!form.checkValidity()) {
//            event.preventDefault()
//            event.stopPropagation()
//          }
   
//          form.classList.add('was-validated')
//        }, false)
//      })
//    })()

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
   const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
