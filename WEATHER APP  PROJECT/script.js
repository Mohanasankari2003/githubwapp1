document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        const apiKey = 'a6b3ef1a7beee093f0ae56d83f12390c';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();

                
            })
            .then(data => {
                if (data.cod === 200) {
                    const weatherData = `
                        <h2>${data.name}</h2>
                        <p>Temperature: ${data.main.temp} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                    `;
                    document.getElementById('weatherResult').innerHTML = weatherData;
                    document.getElementById('weatherResult').style.display = 'block'; // Ensure result is shown
                } else {
                    document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
                
                
                    document.getElementById('weatherResult').style.display = 'block'; // Ensure result is shown
                }
            })
            .catch(error => {
                document.getElementById('weatherResult').innerHTML = `<p>Error fetching data: ${error.message}</p>`;
                document.getElementById('weatherResult').style.display = 'block'; // Ensure result is shown
                console.error('Error:', error);
            });
    } else {
        document.getElementById('weatherResult').innerHTML = '<p>Please enter a city name</p>';
        document.getElementById('weatherResult').style.display = 'block'; // Ensure result is shown
    }
});