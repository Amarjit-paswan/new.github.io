let firstName = document.querySelector('#firstname');
let lastName = document.querySelector('#lastname');
let numbBox = document.querySelector('#mobile');
let emailBox = document.querySelector('#email');
let addBox = document.querySelector('#Address');
let buttonBox = document.querySelector('button');
let errorBox = document.querySelector('#error');


function result(){
    if(firstName.value == ""){
        errorBox.innerHTML= "enter your firstname";
    }else if(lastName.value == ""){
        errorBox.innerHTML= "enter your latname";

    }
}