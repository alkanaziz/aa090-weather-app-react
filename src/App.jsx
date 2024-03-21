import { CityProvider } from "./CityContext";

function App() {
  return (
    <>
      <CityProvider>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </CityProvider>
    </>
  );
}

export default App;
