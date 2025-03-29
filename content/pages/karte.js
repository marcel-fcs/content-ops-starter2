import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Notwendig für das Styling der Karte
import { useEffect } from 'react';
import L from 'leaflet';

const Karte = () => {
  // Korrektur des Standard-Marker-Bildes in Leaflet
  useEffect(() => {
    const DefaultIcon = new L.Icon({
      iconUrl: '/leaflet/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: '/leaflet/marker-shadow.png',
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Unsere OpenStreetMap Karte</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Hier ist ein Marker!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
