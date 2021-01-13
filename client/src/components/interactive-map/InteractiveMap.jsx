import "./InteractiveMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import QGIcon from "../../assets/home_icon.png";
import { useEffect, useState } from "react";
import { FETCH } from "../../Fetch";
import axios from "axios";
import "./pop_up_component/popup-component";
import "./pop_up_component/pop.css";

export const qgIcon = new L.Icon({
  iconUrl: QGIcon,
  iconAnchor: [27, 55],
  popupAnchor: [10, -44],
  iconSize: [72, 72],
});

export default function InteractiveMap() {
  const positionQG = [48.4470213, 1.5375294];

  const [getFarmer, setFarmer] = useState({});
  const [farmerLoading, setFarmerLoading] = useState(false);

  const [getCity, setCity] = useState({});
  const [cityLoading, setCityLoading] = useState(false);
  let name = {};

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

  useEffect(() => {
    axios
      .get(`${FETCH}/cities`)
      .then((res) => {
        setCity(res.data);
        setCityLoading(true);
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


  return (
    <MapContainer
      className="map"
      center={positionQG}
      zoom={13}
      scrollWheelZoom={true}
      wheelPxPerZoomLevel={400}
    >
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
