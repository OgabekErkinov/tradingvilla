import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const SunnyMap = () => {
  const position = [25.9420, -80.1256];

  return (
    <div className='h-full w-full'>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        className='h-full w-full'
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={position}>
          <Popup>Sunny Isles Beach</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SunnyMap;
