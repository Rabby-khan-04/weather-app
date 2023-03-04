const loadData = async (city) => {
  const API_KEY = "5f488f7ce1d463b8c26a18f6ff2506e8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod == 404) {
      alert(data.message);
    } else {
      showWeather(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const showWeather = (data) => {
  const { weather, main, name } = data;
  document.getElementById("temp").innerText = main.temp;
  document.getElementById("status").innerText = weather[0].main;
  document.getElementById("city").innerText = name;
};

document.getElementById("search-btn").addEventListener("click", () => {
  const cityName = document.getElementById("city-input").value;
  loadData(cityName);
  console.log(value);
});

loadData("dhaka");
