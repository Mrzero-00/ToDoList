const form = document.querySelector(".form_class"), input = form.querySelector("input");  // input 태그를 고름.
const username = document.querySelector(".user_class");
const resetBtn = document.getElementById("reset");

const CurrentUser = "CurrentUser";
const todos = 'todos';


function handleSubmit(event){
    event.preventDefault();
    
    const Currentvalue = input.value;
    setusername(Currentvalue);
    paintingname(Currentvalue);
}

function paintingname(text){
    form.classList.remove("showing_class");
    form.classList.add("hidden_class");
    username.classList.remove("hidden_class");
    username.classList.add("showing_class");
    username.innerText=`hello ${text}`;
 }

function setusername(text){
    localStorage.setItem(CurrentUser,text);
}

function resetUser(){
    localStorage.removeItem(CurrentUser);
    localStorage.removeItem(todos);
    location.reload();
}

function askName(){
    username.classList.remove("showing_class");
    username.classList.add("hidden_class");
    form.classList.remove("hidden_class");
    form.classList.add("showing_class");
    form.addEventListener("submit",handleSubmit);
}

function loadname(){
    const CurrentUsername = localStorage.getItem(CurrentUser);

    if(CurrentUsername === null){
        askName();
    }else{
        paintingname(CurrentUsername);
    }
    
}

function usernameReset(){
    resetBtn.addEventListener("click",()=>{
        resetUser();
    });
}


function init(){
    loadname();
    usernameReset();
}

init();