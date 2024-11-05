import { APIProvider } from "@vis.gl/react-google-maps";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Map } from "./components/Map";
// import { PlaceDetails } from "./components/PlaceDetails";

export default function App() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="flex flex-col items-center h-screen m-4 p-4">
        <Header />
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-4">
            <List />
          </div>
          <div className="md:col-span-8">
            <Map />
          </div>
        </div>
        {/* <PlaceDetails /> */}
      </div>
    </APIProvider>
  );
}
