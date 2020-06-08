const clockContainer = document.querySelector(".clock_class");
const clockTitle = clockContainer.querySelector("h1"); 


setInterval(getdate,1000); //setInterval()은 2개의 인수를 받는데 앞은 지속적으로 실행될 함수, 2번째는 m/s단위의 시간임
function getdate()
{
    const date = new Date();
    const hour = date.getHours();
    const minuit = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${ hour <10 ? `0${hour}` : hour }:${minuit <10 ? `0${minuit}`: minuit }:${second<10 ? `0${second}`:second}`;
        
}
//!!!삼항연산자로 섹시하게 코딩!

