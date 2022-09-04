const API_KEY = `7fcdb7e51094e5541e023795297a3224`;
const loadTemparature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const displayTemperature = (data) => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemparature(city);
})

loadTemparature('dhaka');