import "./InteractiveMap.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from "react-leaflet";
import * as L from "leaflet";
import { useEffect, useState } from "react";
import { FETCH } from "../../Fetch";
import axios from "axios";
import "./pop_up_component/popup-component";
import "./pop_up_component/pop.css";
import tractor from "../../assets/tractor_icon-min.png";
import QGIcon from "../../assets/home_icon-min.png";
import buyer from "../../assets/buyer_icon-min.png";


export const qgIcon = new L.Icon({
  iconUrl: QGIcon,
  iconAnchor: [16, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 50],
});

export const tractorIcon = new L.Icon({
  iconUrl: tractor,
  iconAnchor: [5, 42],
  popupAnchor: [10, -44],
  iconSize: [28, 28],
});

export const buyerIcon = new L.Icon({
  iconUrl: buyer,
  iconAnchor: [5, 42],
  popupAnchor: [10, -44],
  iconSize: [28, 28],
});

export default function InteractiveMap() {
  const [lat, setLatitude] = useState();
  const [long, setLongitude] = useState();
  const [avaibleGPS, setAvaibleGPS] = useState(true);

  const [getFarmer, setFarmer] = useState({});
  const [farmercity, setFarmercity] = useState({});
  const [buyercity, setBuyercity] = useState({});

  const [isLoadingFarmerCity, setLoadingFarmerCity] = useState(false);
  const [isLoadingFarmer, setLoadingFarmer] = useState(false);
  const [isLoadingBuyercity, setLoadingBuyercity] = useState(false);

  let name = {};

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
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
        setLoadingFarmer(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${FETCH}/farmercity`)
      .then((res) => {
        setFarmercity(res.data);
        setLoadingFarmerCity(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${FETCH}/buyerscity`)
      .then((res) => {
        console.log(res.data);
        setBuyercity(res.data);
        setLoadingBuyercity(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  console.log(buyercity);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  if (isLoadingFarmer) {
    let allname = getFarmer.map((res) => res.first_name);
    name = allname[getRandomInt(1001)];
  }

  const positionQG = [48.4470213, 1.5375294];
  const localisationCircle = { color: "#5a9449" };


  return lat && long ? (
    <MapContainer
      className="map"
      center={[lat, long]}
      zoom={13}
      scrollWheelZoom={true}
      wheelPxPerZoomLevel={400}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayerGroup>
        <Circle
          center={[lat, long]}
          pathOptions={localisationCircle}
          radius={800}
          className="circle-localisation"
        />
      </LayerGroup>

      <Marker position={positionQG} icon={qgIcon}>
        <Popup className="popup">
          <p className="popup-locaux">Locaux de ComparateurAgricole</p>
        </Popup>
      </Marker>

      {isLoadingFarmerCity
        ? farmercity.slice(0, 1000).map((res) => (
            <Marker position={[res.lat, res.long]} icon={tractorIcon}>
              <Popup className="popup">
                <p className="popup-locaux">Locaux de ComparateurAgricole</p>
              </Popup>
            </Marker>
          ))
        : null}

      {isLoadingBuyercity
        ? buyercity.slice(0, 8).map((res) => (
            <Marker position={[res.lat, res.long]} icon={buyerIcon}>
              <Popup className="popup">
                <p className="popup-locaux">Locaux de ComparateurAgricole</p>
              </Popup>
            </Marker>
          ))
        : null}

    </MapContainer>
  ) : avaibleGPS ? (
    <p className="wait-localisation">Veuillez activer la géolocalisation</p>
  ) : (
    <p className="no-localisation">
      Désolé... Votre navigateur ne dispose pas d'un système de géolocalisation
    </p>
  );
}
