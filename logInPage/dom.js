//console.log(document.getElementById('myForm'));
//console.log(document.querySelector('.container'));
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(window);
//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//ul.remove();
//ul.lastElementChild.remove();
//.firstElementChild.textContent = 'hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h4>Hello<h4>';
//const btn = document.querySelector('.btn');
//btn.style.background = 'red';

//btn.addEventListener('click', e => {    //mouseout, mousehover
    //console.log('click');
    //e.preventDefault();
    //console.log(e.target);
    //console.log(e.target.className);
    //console.log(e.target.id);
    //document.querySelector('#myForm').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items').
    //lastElementChild.innerHTML='<h1>Hello<h1>';
    
//});
const myForm = document.querySelector('#myForm');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const ul = document.querySelector('.items');
let i = 1;

myForm.addEventListener('submit', onSubmit);
myForm.addEventListener('button', onRefresh);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please add both fields';
        setTimeout(() => msg.remove(),6000);
    }
    else{
        msg.classList.add('thxx');
        msg.innerHTML = 'Thxx for logging in ' + nameInput.value;
        setTimeout(() => msg.remove(),6000);
        //const li = document.createElement('li');
        
        ul.children[i].innerText = nameInput.value;
        i++;
        if(i > 3){
            i = 1;
        }

    //    li.appendChild(document.createTextNode(
    //    `${nameInput.value} : ${emailInput.value}`))
    //    userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}    



/*    
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
        `${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
*/    


function onRefresh(e){
    nameInput.value ='';
    emailInput.value = '';
}



