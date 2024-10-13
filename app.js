const apiKey = 'Infelizmente, não consigo usar este código porque ainda não tenho uma chave de API';

async function getWeather() {
    const city = document.getElementById("city").value;
    if(!city){
        alert('Porfavor insira o nome de uma cidade!');
        return
    }
}

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`;

try{
    const response = await fetch(apiUrl);
    const data = await response.json();

    if(data.cod == "404"){
        alert('Cidade não encontrada. Tente novamente');
        return;
    }

    document.getElementById("city-name").innerText = `Clima em ${data.name}`;
    document.getElementById("temperature").innerText = `Temperatura: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `Descrição: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `Humidade: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `Vento: ${data.wind.speed} km/h`;
}catch(error){
    console.error("Erro ao buscar os dados do clima:",  error);
    alert('Erro ao buscar os dados do clima. Tente mais tarde.');
}

