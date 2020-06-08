const title = document.querySelector("#h1_id");

title.style.color = "red";
title.innerHTML ="I Want Work in Paris!!"
function eventhandler(){
    if(title.style.color ==="red"){
        title.classList.add("class_blue");
        title.classList.remove("class_red");
        title.style.color = "blue";
    }else{
        title.classList.add("class_red");
        title.classList.remove("class_blue");
        title.style.color = "red";
    }
   
}



title.addEventListener("click",eventhandler);

