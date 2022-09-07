var feContainer = document.getElementById("skillInfo");
var webDevSrcDown = document.getElementById("webDevSrcDown");
var frontEnd = document.getElementById("feContainer");
var testHTML = document.getElementById("testHTML");
webDevSrcDown.addEventListener("click",addWebDeveloperInfo);
var skills = document.getElementsByClassName("skillItem");
var webDevSrcUp = document.getElementById("webDevSrcUp");
//var webDevSrcUp = document.createElement('p');
//webDevSrcUp.innerHTML += '<i class="fa-solid fa-angle-up" id = "webUp"></i>';
webDevSrcUp.addEventListener("click",removeWebDeveloperInfo);
var htmlSkill = document.createElement('li');
htmlSkill.setAttribute('id', 'skillId');
htmlSkill.innerHTML += '<h4 class = "skillItem" id = "item">HTML  <div class="skills html">90%</div></h4>'; 
var cssSkill = document.createElement('li');
cssSkill.setAttribute('id', 'skillId');
cssSkill.innerHTML += '<h4 class = "skillItem">CSS <div class="skills CSS">90%</div></h4></h4>';
var JSSkill = document.createElement('li');
JSSkill.setAttribute('id', 'skillId');
JSSkill.innerHTML += '<h4 class = "skillItem" id = "item">Java Script  <div class="skills JS">90%</div></h4>'; 
function addWebDeveloperInfo(e){
    frontEnd.appendChild(htmlSkill);
    frontEnd.appendChild(cssSkill);
    frontEnd.appendChild(JSSkill);
}
function removeWebDeveloperInfo(e){
    frontEnd.removeChild(htmlSkill);
    frontEnd.removeChild(cssSkill);
    frontEnd.removeChild(JSSkill);
}
