// let myform = document.getElementById('my-form');
// let submitButton = document.getElementById('submit-button');
// let nameE1= document.getElementById('name');
// let emailE1 = document.getElementById('email');
// let passwordE1 = document.getElementById('password');
// let genderE1 = document.getElementById('gender');

// myform.addEventListener('submit', function (event){
//     event.preventDefault();

// let name = nameE1.value ;
// let email = emailE1.value ;
// let password= passwordE1.value ;
// let gender = genderE1.value ;

// let formdata = {}
//     name:nameE1.''
//     email:emailE1.''
//     password:passwordE1.''
//     gender:genderE1.''
// };
// console.log(formdata);

// });
// nameE1.addEventListener('input')

// let myform = document.getElementById('my-form');
// let nameE1 = document.getElementById('name');
// let emailE1 = document.getElementById('email');
// let passwordE1 = document.getElementById('password');
// let genderE1 = document.getElementById('gender');
// let submitButton = document.getElementById('submit-button');

// myform.addEventListener('submit', function(event) {
//     event.preventDefault();

// });

//     let formdata = {

//     name: '',
//     email:'',
//     password:'',
//     gender:'',
//     };


// nameE1.addEventListener('input', function() {
//     formdata.name = nameE1.value;
// });

// emailE1.addEventListener('input', function() {
//     formdata.email = emailE1.value;
// });

// passwordE1.addEventListener('input', function() {
//     formdata.password = passwordE1.value;
// });

// genderE1.addEventListener('change', function() {
//     formdata.gender = genderE1.value;
// });

// submitbutton.onclick = function(){
//     console.log(formdata);
// }
function greeting(display){
    console.log("hello")
    display()
    console.log("how are you")
}
greeting(function(){
    console.log("shriya")
})



