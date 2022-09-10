/* Components for front end development */
var feContainer = document.getElementById("skillInfo");
var webDevSrcDown = document.getElementById("webDevSrcDown");
var frontEnd = document.getElementById("feContainer");
var testHTML = document.getElementById("testHTML");
webDevSrcDown.addEventListener("click",addWebDeveloperInfo);
var skills = document.getElementsByClassName("skillItem");
var webDevSrcUp = document.getElementById("webDevSrcUp");
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
/* Components for back end development */
var sweContainer = document.getElementById('SWEDevelopment');
var sweSrcUp = document.getElementById('sweUp');
var sweSrcDown = document.getElementById('sweDown');
sweSrcDown.addEventListener("click",addSweInfo);
sweSrcUp.addEventListener("click",removeSweInfo);
var javaSkill = document.createElement("li");
javaSkill.setAttribute("id","skillId");
javaSkill.innerHTML += '<h4 class = "skillItem" id = "item">JAVA  <div class="skills html">90%</div></h4>'; 
var pythonSkill = document.createElement("li");
pythonSkill.setAttribute("id","skillId");
pythonSkill.innerHTML += '<h4 class = "skillItem" id = "item">Python  <div class="skills html">90%</div></h4>'; 
function addSweInfo(e){
    sweContainer.appendChild(javaSkill);
    sweContainer.appendChild(pythonSkill);
}
function removeSweInfo(e){
    sweContainer.removeChild(javaSkill);
    sweContainer.removeChild(pythonSkill);
}