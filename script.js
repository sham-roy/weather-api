function search(){
    cityName=searchbar.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b41ec3be35c7dac8aabbc21ba253137a`)
    .then(data=>data.json()).then(data=>displayData(data))
        
}

function displayData( weatherData ) {

    city1= weatherData.name
    description= weatherData.weather[0].description
    icon= weatherData.weather[0].icon
    temp= weatherData.main.temp_max
    temp=Math.floor(temp-273.15)
    humidity= weatherData.main.humidity
    wind=  weatherData.wind.speed
    country= weatherData.sys.country

    result.innerHTML=`
        <p class="mt-3">Weather in <span class="text-orange-500"> ${city1} , ${country} </span></p>
        <p class="mt-3">${description} - <span class="text-orange-500">${temp}°C </span </p>
        <p class="mt-3">Humidity - <span class="text-orange-500"> ${humidity}% </span> </p>
        <p class="mt-3">Wind speed - <span class="text-orange-500"> ${wind} km/h</span> </p>
    `
}