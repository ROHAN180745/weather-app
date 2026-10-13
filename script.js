const apikey="6c703555812922eae423d5dd5a6aff3e";
    
    const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric";
    


    let btn=document.querySelector("button");
    let inp=document.querySelector("input");
    btn.addEventListener("click",checkweather);

    
    let weatherImg=document.querySelector(".weather-icon");

    async function checkweather(){
      let city=inp.value;
      const resp=await fetch(apiurl+`&appid=${apikey}`+`&q=${city}`);
      let data =await resp.json();
      
      if(resp.status== 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      }

      else{
        document.querySelector(".temp").innerHTML=data.main.temp +`°C`;
      document.querySelector(".humidity").innerHTML=data.main.humidity +`%`;
      document.querySelector(".wind").innerHTML=data.wind.speed+`km/hr`;
      document.querySelector(".city").innerHTML=city;

      const condition = data.weather[0].main;
      console.log(condition);

       if (condition === "Clouds") {
            weatherImg.src = "clouds.png";
        } 
        else if (condition === "Clear") {
            weatherImg.src = "clear.png";
        } 
        else if (condition === "Rain") {
            weatherImg.src = "rain.png";
        } 
        else if (condition === "Drizzle") {
            weatherImg.src = "drizzle.png";
        } 
        else if (condition === "Snow") {
            weatherImg.src = "snow.png";
        } 
        else if (condition === "Mist" || condition === "Fog" ||
                 condition === "Haze") {
            weatherImg.src = "mist.png";
        } 
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
      }

    }

    