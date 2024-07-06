const tempElement = document.querySelector("#temperaturaElement");
const humElement = document.querySelector("#humidityElement");

document.addEventListener('DOMContentLoaded', getWeather);

async function getWeather() {
    try {
        let apiKey = '37047d3c44a8e87aa11f5ae1d88fb92b'; // Substitua com sua chave de API válida
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?lat=-22.7386&lon=-45.5921&appid=${apiKey}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        if (!response.ok) {
            throw new Error(`${data.cod} - ${data.message}`);
        }

        let temperature = data.main.temp.toFixed(1);
        let humidity = data.main.humidity;

        tempElement.textContent = `${temperature} °C`;
        humElement.textContent = `${humidity}%`;
    } catch (error) {
        console.error('Erro ao buscar os dados do clima:', error.message);
        // Poderia adicionar um tratamento adicional aqui, como exibir uma mensagem de erro na página
    }
}


getWeather();