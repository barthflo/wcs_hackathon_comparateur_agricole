import './InteractiveMap.css';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Circle } from 'react-leaflet';
import * as L from 'leaflet';
import QGIcon from '../../assets/home_icon.png';
import { useEffect, useState } from 'react';
import { FETCH } from "../../Fetch";
import axios from "axios";
import "./pop_up_component/popup-component";
import "./pop_up_component/pop.css";

export const qgIcon = new L.Icon({
    iconUrl: QGIcon,
    iconAnchor: [27, 55],
    popupAnchor: [10, -44],
    iconSize: [56, 56],
});

export default function InteractiveMap() {
    const [lat, setLatitude] = useState();
    const [long, setLongitude] = useState();
    const [avaibleGPS, setAvaibleGPS] = useState(true);

    const [getFarmer, setFarmer] = useState({});
    const [farmerLoading, setFarmerLoading] = useState(false);
    let name = {};

    useEffect(() => {
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
              });
        } else {
            setAvaibleGPS(false);
        }
    }, []);

    useEffect(() => {
        axios
          .get(`${FETCH}/farmers`)
          .then((res) => {
            setFarmer(res.data);
            setFarmerLoading(true);
          })
          .catch(function (erreur) {
            console.log(erreur);
          });
      }, []);

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    
      if (farmerLoading) {
        let allname = getFarmer.map((res) => res.first_name);
        name = allname[getRandomInt(1001)];
      }

    const positionQG = [48.4470213, 1.5375294];
    const localisationCircle = { color: '#5a9449' };

    return lat&&long ? (
        <MapContainer className="map" center={[lat, long]} zoom={13} scrollWheelZoom={true} wheelPxPerZoomLevel={400}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LayerGroup>
                <Circle
                    center={[lat, long]}
                    pathOptions={localisationCircle}
                    radius={800}
                />
            </LayerGroup>
                    
            <Marker position={positionQG} icon={qgIcon}>
                <Popup className="popup">
                    <p className="popup-locaux">Locaux de ComparateurAgricole</p>
                </Popup>
            </Marker>
        </MapContainer>
    ) : avaibleGPS ? (
        <p className="wait-localisation">Veuillez activer la géolocalisation</p> )
        :
        ( <p className="no-localisation">Désolé... Votre navigateur ne dispose pas d'un système de géolocalisation</p> 
    );
}
