import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './UserMap.css';
import userData from './userData'; // وارد کردن داده‌های کاربران
import userMarkerImg from './user-marker.png'; // مسیر مستقیم برای تصویر

// ساخت آیکون سفارشی برای کاربران
const userIcon = new L.Icon({
  iconUrl: userMarkerImg,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const UserMap = () => {
  return (
    <div className="map-container">
      <MapContainer center={[32.4279, 53.6880]} zoom={5} style={{ height: '600px', width: '100%', borderRadius: '10px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

        {userData.map((user, index) => (
          <Marker key={index} position={[user.latitude, user.longitude]} icon={userIcon}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} className="user-tooltip">
              <div>
                <strong>{user.name}</strong>
                <br />
                بازدیدها: {user.views}
              </div>
            </Tooltip>
            <Circle
              center={[user.latitude, user.longitude]}
              pathOptions={{ color: '#1E90FF', fillColor: '#87CEFA', fillOpacity: 0.3 }}
              radius={20000} // شعاع دایره بزرگ‌تر برای بهتر دیده شدن
            />
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default UserMap;
