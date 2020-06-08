const body = document.querySelector('body');
const image_number = 3;

// api
/*
function ImageLoad(){
    console.log("finish loding");
}
*/

function printImage(imagenumber){
    const image = new Image();
    image.src=`./jps/${imagenumber+1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgimage");
    //image.addEventListener("loadend",ImageLoad);  // api를 활용한다면 필요할수 있음 
    
}
function genRandom(){
    const number = Math.floor(Math.random() * 11);
    return number;
}

function init(){
    const randomNumber = genRandom();
    printImage(randomNumber);
}

Math.random();
Math.floor();  // 소숫점 아래 버림 3.1 -> 3
Math.ceil();   // 소숫점 아래 반올림 3.1 -> 4

init();