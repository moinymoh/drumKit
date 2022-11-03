
// ANONYMOUS FUNCTION
// document.querySelector("button").addEventListener("click", function (){
//     alert("I got clicked");
// });


// passing function as an argument
// function add(num1, num2) {
//     return num1 + num2;
// }
// function sub(num1, num2) {
//     return num1 - num2;
// }
// function mul(num1, num2) {
//     return num1 * num2;
// }
// function div(num1, num2) {
//     return num1 / num2;
// }
// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

// // object and constructor
// function HouseKepper(year, name, cleans) {
//     this.name = name;
//     this.year = year;
//     this.cleans = cleans;
    //    this.clean = function(){
    //     alert("Cleaning is in progress");
    //    }
// }

// var houseKep = new HouseKepper(12, "ayush", ["kadj", "ad"]);
// houseKep.clean();



// DETECTING THE BUTTON PRESSED

var elements = document.querySelectorAll(".drum");


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", handleClick);
}
// FIRSTLY USING NORMAL FUNCTION
function handleClick() {

    var buttonInnerHTML = this.innerHTML; //takes w
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    // console.log(this);
    // this gets us the complete button <button class="w drum">w</button>
    // this.style.color = "white";
}

// DETECTING KEYBOARD PRESSED
//USIGN PSEUODO FUNCTION
//call back function
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    //adding the css to the button
    activeButton.classList.add("pressed");

    //removing the css to the button
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}