import { useEffect, useRef } from "react";
import L from "leaflet"; // Importiere Leaflet

const Map = () => {
  const mapContainerRef = useRef(null); // Referenz für den Container der Karte

  useEffect(() => {
    if (mapContainerRef.current) {
      // Initialisiere die Karte
      const map = L.map(mapContainerRef.current, {
        center: [51.505, -0.09], // Startkoordinaten der Karte (hier London)
        zoom: 13, // Anfangszoom
      });

      // Füge die OpenStreetMap Tiles hinzu
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "400px" }} // Setze die Größe der Karte
      className="rounded-lg shadow-lg" // Tailwind-Klassen für Styling
    ></div>
  );
};

export default Map;
