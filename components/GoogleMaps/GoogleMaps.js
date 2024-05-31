import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading Maps...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 59.927125, lng: 10.72597 }), []);

  return (
    <GoogleMap
      zoom={16}
      center={{ lat: 59.927125, lng: 10.72597 }}
      mapContainerClassName="w-full h-96"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
