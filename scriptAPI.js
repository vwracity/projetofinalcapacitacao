document.addEventListener('DOMContentLoaded', getWeather);

async function getWeather() {
    try {
        const apiKey = '37047d3c44a8e87aa11f5ae1d88fb92b';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Campos+do+Jordao&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`${data.cod} - ${data.message}`);
        }

        const temperature = data.main.temp.toFixed(1);
        const humidity = data.main.humidity;

        const temperatureElement = document.getElementById('temperature');
        const humidityElement = document.getElementById('humidity');

        temperatureElement.textContent = `${temperature} °C`;
        humidityElement.textContent = `${humidity}%`;
    } catch (error) {
        console.error('Erro ao buscar os dados do clima:', error.message);
    }
}
