let htmlTab = document.querySelector("#html-tab");

htmlTab.addEventListener("mouseover",() => {
     htmlTab.innerText = '<h1> HTML </h1>'
})

htmlTab.addEventListener("mouseout",() => {
     htmlTab.innerText = 'HTML'
})