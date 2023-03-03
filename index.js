var stopButton = document.getElementById("stopButton")
var stopLight = document.getElementById("stopLight")
var slowButton = document.getElementById("slowButton");
var slowLight = document.getElementById("slowLight");
var goButton = document.getElementById("goButton");
var goLight = document.getElementById("goLight")


stopButton.addEventListener("click", function() {   
  stopLight.classList.toggle('stop');
 }); 

slowButton.addEventListener("click", function() {   
  slowLight.classList.toggle('slow');
 });

 goButton.addEventListener("click", function() {   
  goLight.classList.toggle('go');
 });

let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener('mouseenter', (event) => {
    buttonEnter(event.target.textContent)
  })
})

buttons.forEach(button => {
  button.addEventListener('mouseleave', (event) => {
    buttonLeave(event.target.textContent)
  })
})

function buttonEnter(buttonName){
  console.log(`Enter ${buttonName} button`)
}

function buttonLeave(buttonName){
  console.log(`Left ${buttonName} button`)
}

var controls = document.getElementById('controls')
controls.addEventListener("click", function () {
    console.log(stopButton, slowButton, goButton)
});

// Document.querySelector()
// EventTarget.addEventListener()
// `click`
// `Element.classList`
// stopLight.classList.contains('stop')
//   stopLight.classList.remove('stop');