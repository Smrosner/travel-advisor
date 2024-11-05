import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "./icons/SearchIcon";

interface SearchProps {
  onPlaceSelect?: (place: google.maps.places.PlaceResult) => void;
}

export const Search = ({ onPlaceSelect }: SearchProps) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    const autocomplete = new places.Autocomplete(inputRef.current, options);
    setPlaceAutocomplete(autocomplete);

    return () => {
      if (autocomplete) {
        google.maps.event.clearInstanceListeners(autocomplete);
      }
    };
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    const listener = placeAutocomplete.addListener("place_changed", () => {
      const place = placeAutocomplete.getPlace();
      onPlaceSelect?.(place);
    });

    return () => {
      google.maps.event.removeListener(listener);
    };
  }, [placeAutocomplete, onPlaceSelect]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <SearchIcon />
        <input
          ref={inputRef}
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-500
          placeholder-gray-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};
