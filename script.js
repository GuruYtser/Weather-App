const api = "";
const submit = document.getElementById('submit');
const main = document.getElementsByTagName('main')[0];
const body = document.getElementsByTagName('body')[0];
const main2 = document.createElement('main');
async function weather(){
    const search = document.getElementById('search').value.trim().toLowerCase();
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api}&units=metric`);
    if(!response.ok){
        throw new Error(`error occured`);
    }
    const data = await response.json();
    const {main: {temp, humidity}, name} = data;
    main2.innerHTML = `
    <div class="main2">
        <div class="syudad">${name}</div>
        <div class="temperature">Temperature: ${Math.round(temp)}°C</div>
        <div class="humid">Humidity: ${humidity}%</div>
    </div>  
        `;
    if(temp <= 27){
        body.style.background = "url('assets/cold.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center"; 
        main2.innerHTML = `<div class="status">🧊</div>
        <div class="syudad">${name}</div>
        <div class="temperature">Temperature: ${Math.round(temp)}°C</div>
        <div class="humid">Humidity: ${humidity}%</div>`
    }
    else if(temp > 27){
        body.style.background = "url('assets/sunny.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center"; 
        main2.innerHTML = `
        <div class="status">☀️</div>
        <div class="syudad">${name}</div>
        <div class="temperature">Temperature: ${Math.round(temp)}°C</div>
        <div class="humid">Humidity: ${humidity}%</div>`
    }
    else if(temp < 5){
        body.style.background = "url('assets/winter.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center"; 
        main2.innerHTML = `<div class="status">❄️</div>
        <div class="syudad">${name}</div>
        <div class="temperature">Temperature: ${Math.round(temp)}°C</div>
        <div class="humid">Humidity: ${humidity}%</div>`
    }
    document.body.append(main2);
    } catch(error){
      console.error(error);
      main2.innerHTML = `<h1>Error Occured</h1>`
    }
}


submit.addEventListener('click', weather);
