import { APIProvider } from "@vis.gl/react-google-maps";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Map } from "./components/Map";
// import { PlaceDetails } from "./components/PlaceDetails";

export default function App() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 pt-2 px-10">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-gray-800">List</h2>
              <List />
            </div>
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold text-gray-800">Map</h2>
              <Map />
            </div>
          </div>
        </div>
        {/* <PlaceDetails /> */}
      </div>
    </APIProvider>
  );
}
