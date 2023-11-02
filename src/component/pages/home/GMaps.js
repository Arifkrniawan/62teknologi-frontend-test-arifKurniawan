import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_GMAPS,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const center = { lat: -5.381794415357787, lng: 105.25949046658901 };
  return (
    <GoogleMap zoom={10} center={center} className="Container Map-Container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default GMaps;
