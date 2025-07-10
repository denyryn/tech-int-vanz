import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    navigator.geolocation.getCurrentPosition(async (position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;

      const map = L.map(mapRef.current!).setView([userLat, userLon], 14);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      L.marker([userLat, userLon])
        .addTo(map)
        .bindPopup("Lokasi Anda")
        .openPopup();

      const url = `https://nominatim.openstreetmap.org/search?format=json&q=oma+opa&limit=10&bounded=1&viewbox=${
        userLon - 0.1
      },${userLat + 0.1},${userLon + 0.1},${userLat - 0.1}`;
      const res = await fetch(url);
      const data = await res.json();

      data.forEach((place: any) => {
        const lat = parseFloat(place.lat);
        const lon = parseFloat(place.lon);
        const name = place.display_name;

        L.marker([lat, lon]).addTo(map).bindPopup(name);
      });
    });
  }, []);

  return <div ref={mapRef} className="w-full h-screen" />;
}
