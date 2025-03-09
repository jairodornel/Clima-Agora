// Chave 5ba32403704dd387c899d19e11221566


const apiKey= "5ba32403704dd387c899d19e11221566";
const apiCountryURL= "https://flagsapi.com/:country_code/:style/:size.png";
const apiUnsplash = "https://source.unsplash.com/1600x900/?"; 


const cityInput= document.querySelector('#city-input');
const searchBtn= document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind span');
const weatherContainer= document.querySelector('#weather-data')



const getWeatherData= async(city) =>{
    //const apiWeatherURL=
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res= await fetch(apiWeatherURL);
    const data= await res.json()


    return data; 

}








const showWeatherDate= async (city) =>{
     const data = await getWeatherData(city)

     cityElement.innerText= data.name; 
     tempElement.innerText= parseInt(data.main.temp);
     descElement.innerText = data.weather[0].description;
     weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`); 
     countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`); 
     umidityElement.innerText = `${data.main.humidity}%`;
     windElement.innerText = `${data.wind.speed}km/h`;


     weatherContainer.classList.remove("hide"); 





}






searchBtn.addEventListener("click", (e) =>{
     e.preventDefault(); 
     
     const city= cityInput.value;




     showWeatherDate(city); 
})

cityInput.addEventListener("keyup", (e) =>{
     if(e.code=== "Enter"){
          const city= e.target.value
          showWeatherDate(city); 

     }
})
