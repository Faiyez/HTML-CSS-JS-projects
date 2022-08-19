var boxActive = document.getElementsByClassName('box active');
var box = document.getElementsByClassName('box');

var setImage = document.getElementsByClassName('chosenColor');
var selectedPhone = document.getElementsByClassName('chosenPhoneColor');
var whitePhone = document.getElementById('whitePhone');
const goldPhone = document.getElementById('goldPhone');
var circle = document.getElementById("circle");
const upButton = document.querySelector('#upButton');
var downButton = document.getElementById("downButton");
var rotateValue = circle.style.transform;
var rotateSum;

upButton.addEventListener("click", anticlockwise);
downButton.addEventListener("click", clockwise);
boxActive.addEventListener("click", changeImage);
box.addEventListener("click",changeImage);

function anticlockwise(event){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

function clockwise(event){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
function changeImage(event){
    document.querySelector(".proImage").src=event.children[0].src;
}