const API_KEY = "869adfa08447eb8269f4211a1078592f" //날씨 api
const Coords = "coords";
const weather = document.querySelector(".weather_class");


function getWeather(lat,long){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()}
    ).then(function(json){
        const Current_temp = json.main.temp;
        const Current_hear = json.name;
        weather.innerText = `${Current_temp}℃# ${Current_hear}`; 
    });
}




function saveGeodata(Geo_data){
    localStorage.setItem(Coords,JSON.stringify(Geo_data)); // Geo_data 는 스트링 형식이 아니기떄문에 JSON.stringify(변환하고싶은변수) 를 통해 스트링으로 변환 필요

}

function SuccesGeo(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const Geo_data={
        latitude,
        longitude     // 오브젝트 아이디와 값이 똑같은 변수명을 가지고 잇다면 이렇게 생략 가능.    
    };
    saveGeodata(Geo_data);
    getWeather(Geo_data.latitude,Geo_data.longitude);

}

function FailGeo(){
    console.log("failed read Current Geo Data");

}


function askgeoLocation(){
    navigator.geolocation.getCurrentPosition(SuccesGeo,FailGeo);  // 성공시 앞에 실패시 뒤에를 실행하는 인터럽트

}

function loadcords(){
    const CurrentCoords = localStorage.getItem(Coords);
    if(CurrentCoords === null){
        askgeoLocation();
    }else{
        const ParseCoords = JSON.parse(CurrentCoords);
        console.log(ParseCoords);
        getWeather(ParseCoords.latitude,ParseCoords.longitude);

    }
}

function init(){
    loadcords();
}

init();