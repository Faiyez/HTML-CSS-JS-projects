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
var skills = document.getElementsByClassName("skillItem");
var webDevSrcUp = document.getElementById("webDevSrcUp");
var htmlSkill = document.createElement('li');
htmlSkill.setAttribute('id', 'skillId');
htmlSkill.innerHTML += '<h2 class = "skillItem" id = "item"><i class="fa-solid fa-square-check"></i>  HTML  <i class="fa-brands fa-html5"></i></h2>'; 
var cssSkill = document.createElement('li');
cssSkill.setAttribute('id', 'skillId');
//cssSkill.innerHTML += '<h4 class = "skillItem">CSS <div class="skills CSS"></div></h4></h4>';
cssSkill.innerHTML += '<h2 class = "skillItem"><i class="fa-solid fa-square-check"></i>  CSS  <i class="fa-brands fa-css3-alt"></i></h2>';
var JSSkill = document.createElement('li');
JSSkill.setAttribute('id', 'skillId');
JSSkill.innerHTML += '<h2 class = "skillItem" id = "item"><i class="fa-solid fa-square-check"></i>  Java Script   <i class="fa-brands fa-js"></i></h2>'; 
var reactSkill = document.createElement('li');
reactSkill.setAttribute('id', 'skillId');
reactSkill.innerHTML += '<h2 class = "skillItem" id = "item"><i class="fa-solid fa-square-check"></i>  React JS   <i class="fa-brands fa-react"></i></h2>'; 
function addWebDeveloperInfo(e){
    deleteChild();
    webDevelopment.style.backgroundColor='#90e0ef';
    SWEDevelopment.style.background='white';
    skillsDisplay.appendChild(htmlSkill);
    skillsDisplay.appendChild(cssSkill);
    skillsDisplay.appendChild(JSSkill);
    skillsDisplay.appendChild(reactSkill);
}
/* Components for back end development */
var sweContainer = document.getElementById('SWEDevelopment');
var sweSrcUp = document.getElementById('sweUp');
var sweSrcDown = document.getElementById('sweDown');
sweSrcDown.addEventListener("click",addSweInfo);

var javaSkill = document.createElement("li");
javaSkill.setAttribute("id","skillId");
javaSkill.innerHTML += '<h2 class = "skillItem" id = "item"><i class="fa-solid fa-square-check"></i>  JAVA   <i class="fa-brands fa-java"></i></h2>'; 
var pythonSkill = document.createElement("li");
pythonSkill.setAttribute("id","skillId");
pythonSkill.innerHTML += '<h2 class = "skillItem" id = "item"><i class="fa-solid fa-square-check"></i> Python  <i class="fa-brands fa-python"></i></h2>'; 
function deleteChild(){
    var container = document.getElementById('skillsDisplay');
    container.innerHTML = '';
}
function addSweInfo(e){
    deleteChild();
    SWEDevelopment.style.background='#90e0ef';
    webDevelopment.style.background='white';
    skillsDisplay.appendChild(pythonSkill);
    skillsDisplay.appendChild(javaSkill);

}
