import { Context } from "../CityContext";

function Form() {
  const { city, setCity, fetchWeatherData } = Context();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  }

  return (
    <div className="mb-5 flex w-full items-center justify-center p-5">
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="rounded-l-md bg-sky-100 px-4 py-2 outline-none md:w-96"
          type="text"
          placeholder="Search for city..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button
          className="rounded-r-md bg-sky-700 px-4 py-2 text-white hover:bg-sky-900"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default Form;
