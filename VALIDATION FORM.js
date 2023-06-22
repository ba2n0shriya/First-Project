let myform = document.getElementById('my-form');
let nameE1 = document.getElementById('name');
let emailE1 = document.getElementById('email');
let passwordE1 = document.getElementById('password');
let genderE1 = document.getElementById('gender');
let submitbutton = document.getElementById('submit-button');

myform.addEventListener('submit', function(event) {
    event.preventDefault();
});

let formdata = {
    name: '',
    email: '',
    password: '',
    gender: ''
};

nameE1.addEventListener('input', function() {
    formdata.name = nameE1.value
});

emailE1.addEventListener('input', function() {
    formdata.email = emailE1.value
});

passwordE1.addEventListener('input', function() {
    formdata.password = passwordE1.value;
});

genderE1.addEventListener('change', function() {
    formdata.password = passwordE1.value;
});




submitbutton.onclick = function() {
    console.log(formdata)
}