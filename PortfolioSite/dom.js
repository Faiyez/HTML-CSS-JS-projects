/* Components for front end development */
var webDevelopment = document.getElementById("webDevelopment");
webDevelopment.addEventListener("click",addWebDeveloperInfo);
var SWEDevelopment = document.getElementById("SWEDevelopment");
SWEDevelopment.addEventListener("click",addSweInfo);
var skillsDisplay = document.getElementById("skillsDisplay");
var feContainer = document.getElementById("skillInfo");
var webDevSrcDown = document.getElementById("webDevSrcDown");
var frontEnd = document.getElementById("feContainer");
var testHTML = document.getElementById("testHTML");
/*webDevSrcDown.addEventListener("click",addWebDeveloperInfo);*/
var skills = document.getElementsByClassName("skillItem");
var webDevSrcUp = document.getElementById("webDevSrcUp");
/*webDevSrcUp.addEventListener("click",removeWebDeveloperInfo);*/
var htmlSkill = document.createElement('li');
htmlSkill.setAttribute('id', 'skillId');
htmlSkill.innerHTML += '<h4 class = "skillItem" id = "item">HTML  <div class="skills html"></div></h4>'; 
var cssSkill = document.createElement('li');
cssSkill.setAttribute('id', 'skillId');
cssSkill.innerHTML += '<h4 class = "skillItem">CSS <div class="skills CSS"></div></h4></h4>';
var JSSkill = document.createElement('li');
JSSkill.setAttribute('id', 'skillId');
JSSkill.innerHTML += '<h4 class = "skillItem" id = "item">Java Script  <div class="skills JS"></div></h4>'; 
function addWebDeveloperInfo(e){
    deleteChild();
    skillsDisplay.appendChild(htmlSkill);
    skillsDisplay.appendChild(cssSkill);
    skillsDisplay.appendChild(JSSkill);
}
/* Components for back end development */
var sweContainer = document.getElementById('SWEDevelopment');
var sweSrcUp = document.getElementById('sweUp');
var sweSrcDown = document.getElementById('sweDown');
sweSrcDown.addEventListener("click",addSweInfo);
sweSrcUp.addEventListener("click",removeSweInfo);
var javaSkill = document.createElement("li");
javaSkill.setAttribute("id","skillId");
javaSkill.innerHTML += '<h4 class = "skillItem" id = "item">JAVA  <div class="skills html"></div></h4>'; 
var pythonSkill = document.createElement("li");
pythonSkill.setAttribute("id","skillId");
pythonSkill.innerHTML += '<h4 class = "skillItem" id = "item">Python  <div class="skills html"></div></h4>'; 
function deleteChild(){
    var container = document.getElementById('skillsDisplay');
    container.innerHTML = '';
}
function addSweInfo(e){
    deleteChild();
    skillsDisplay.appendChild(pythonSkill);
    skillsDisplay.appendChild(javaSkill);
}
