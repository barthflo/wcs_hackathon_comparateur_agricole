import './InteractiveMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import QGIcon from '../../assets/home_icon.png';

export const qgIcon = new L.Icon({
    iconUrl: QGIcon,
    iconAnchor: [27, 55],
    popupAnchor: [10, -44],
    iconSize: [72, 72],
});

export default function InteractiveMap() {
    const positionQG = [48.4470213, 1.5375294];

    return(
        <MapContainer className="map" center={positionQG} zoom={13} scrollWheelZoom={true} wheelPxPerZoomLevel={400}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Marker position={positionQG} icon={qgIcon}>
                <Popup className="popup">
                   <p className="popup-locaux">Locaux de ComparateurAgricole</p>
                </Popup>
            </Marker>
        </MapContainer>
    );
}