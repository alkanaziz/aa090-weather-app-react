import { Context } from "../CityContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Leaflet = () => {
  const { city, coordinate } = Context();
  console.log(coordinate);
  return (
    <div className="flex justify-center items-center">
      <div
        className="m-10 w-full rounded-xl overflow-hidden"
      >
        {coordinate.length > 0 && (
          <MapContainer
            center={coordinate}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "40vh" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={coordinate}>
              <Popup>{city}</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};
export default Leaflet;
