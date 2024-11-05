import GoogleMapReact from "google-map-react";
import MapPinIcon from "./icons/MapPinIcon";
import RatingIcon from "./icons/RatingIcon";

export const Map = () => {
  const coordinates = {
    center: {
      lat: 21.315603,
      lng: -157.858093,
    },
    zoom: 14,
  };

  return (
    <div className="mt-10" style={{ width: "100%", height: "100%" }}>
      <MapPinIcon />
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates.center}
        center={coordinates.center}
        defaultZoom={coordinates.zoom}
        margin={[50, 50, 50, 50]}
        options={{ gestureHandling: "greedy" }}
        onChange={() => {}}
        onChildClick={() => {}}
      />
      <RatingIcon />
    </div>
  );
};
