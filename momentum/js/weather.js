const weather_location = document.querySelector("#weather span:last-child");
const weather_current = document.querySelector("#weather span:first-child");

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
const WeatherAPIKey = "445522a2f8134422839163518241808";

function getWeather(lat, long)
{
    fetch(`https://api.weatherapi.com/v1/current.json?key=${WeatherAPIKey}&q=${lat},${long}&aqi=no`)
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else
        {
            console.log(response.status);
        }        
    })
    .then(data => {
        onGeoData(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function onGeoData(Data)
{    
    console.log(Data);
    const myData = Data;
    let myLocation = `${myData.location.country}`;
    let myCurrent = `${myData.current.temp_c}℃ `;
    let myIcon =    `Icon : ${myData.current.condition.icon}`;
    console.log(myLocation);
    console.log(myCurrent);
    console.log(myIcon);
    weather_location.innerText = myLocation;
    weather_current.innerText = myCurrent;
    const icon = document.createElement("img");
    icon.src = `https:${myData.current.condition.icon}`;
    weather_current.appendChild(icon);
    
}

function onGeoSuccess(position)
{
    console.log(position);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    //const myData = getWeather(lat, long);
    const myData = getWeather(lat, long );
    //console.log(myData);
    //onGeoData(myData);
}

function onGeoError()
{
    console.log("onGeoError");
}