// function greeting(display){
//     console.log("hello")
//     display()
//     console.log("how are you")
// }
// greeting(function(){
//     console.log("shriya")
// })

// function nameE1(greet){
//     console.log("heyy")
//     greet()
//     console.log("where are you")
// }
// function display(){
//     console.log("sharad")
// }
// nameE1(display)

function creating(show){
    console.log("Terminal")
}
let variable=function(){
    console.log("Watts up")
}
creating(variable);


// let counter = 0;
// setInterval(function(){
//     console.log(counter);
//     counter = counter + 1;
// }, 1000);

// let count=0
// let unique=setTimeout(function(){
//     console.log(count)
//     count=count+1

// }, 3000)

// var counter = 0;
// var looper = setInterval(function(){
//     counter++;
//     console.log( " " + counter);

//     if (counter >= 10)
//     {
//         clearInterval(looper);
//     }
// } , 1000)

// var counter = 0;
// var looper = setTimeout(function(){
//     counter++;
//     console.log( " " + counter);

//     if (counter >= 5)
//     {
//         clearTimeout(looper);
//     }
// } , 1000)

let inputE1 = document.getElementById("user-input");
let buttonE2 = document.getElementById("buttonE1");

buttonE2.onclick = function() {
    let inputvalue = inputE1.value;
    localStorage.setItem("shriya", inputvalue)

}
var king = localStorage.getItem("shriya")
console.log(king)



