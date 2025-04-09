'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { LatLngExpression } from 'leaflet';

const position: LatLngExpression = [51.505, -0.09];  // Beispiel für London

return (
  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
    <MapContainer
      center={position}  // center erwartet LatLngExpression (Array)
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  </div>
);
