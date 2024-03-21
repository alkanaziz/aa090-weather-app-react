import { Context } from "../CityContext";

function Weather() {
  const { weatherData, city } = Context();
  console.log(weatherData)

  return (
    <div className="rounded-lg mx-4">
      <h2 className="font-bold text-3xl text-center">{weatherData.list ? weatherData.city.name : ''}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {weatherData.list
          ? weatherData.list.map((item, index) => (
              <div key={index} className="rounded-lg bg-sky-500 p-4">
                <img
                  className="h-24 w-28"
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt=""
                />
                <h3 className="text-xl font-semibold">
                  {new Date(item.dt * 1000).toLocaleDateString("de-Ge", {
                    weekday: "long",
                  })}
                </h3>
                <p className="text-sm text-gray-900">
                  {" "}
                  {item.weather[0].description}
                </p>
                <p className="text-sm text-red-900"> {item.dt_txt}</p>
                <p className="text-sm text-red-900">
                  <span className="font-light">Humidity:</span>{" "}
                  {item.main.humidity}%
                </p>
                <p className="text-sm text-red-900">
                  <span className="font-light">Temperature:</span>{" "}
                  {item.main.temp}°C
                </p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
export default Weather;
