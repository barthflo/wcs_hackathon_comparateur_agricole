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
import Popup_component from './pop_up_component/popup-component';
import { FcSearch } from 'react-icons/fc';

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

  const [datas, setDatas] = useState();
  const [isLoadingData, setIsLoadingData] = useState(false);

  const [buyercity, setBuyercity] = useState({});
  const [isLoadingBuyercity, setLoadingBuyercity] = useState(false);

  const [product, setProduct] = useState("all");
  const [farmSize, setFarmSize] = useState("all");
  const [checkClient, setCheckClient] = useState(true);
  const [checkBuyer, setCheckBuyer] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

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
      .get(`${FETCH}/data?size=${farmSize}`)
      .then((res) => {
        setDatas(product !== "all" ? res.data.filter(item => item.category === product) : res.data);
        setIsLoadingData(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, [farmSize, product]);

  useEffect(() => {
    axios
      .get(`${FETCH}/buyerscity`)
      .then((res) => {
        setBuyercity(res.data);
        setLoadingBuyercity(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  const positionQG = [48.4470213, 1.5375294];
  const localisationCircle = { color: "#5a9449" };


  const handleChangeSize = (e) => {
    e.preventDefault();
    setFarmSize(e.target.value)
  }

  const handleChangeClient = (e) => {
    e.preventDefault();
    setCheckClient(!checkClient)
  }

  const handleChangeBuyer = (e) => {
    e.preventDefault();
    setCheckBuyer(!checkBuyer)
  }

  const handleChangeProduct = (e) => {
    e.preventDefault();
    setProduct(e.target.value)
  }

  const resetSearch = (e) => {
    e.preventDefault();
    setProduct("all");
    setFarmSize("all");
    setCheckClient(true);
    setCheckBuyer(false);
  }

  return lat && long ? (
    <div>
      <div className="openFilterDiv">
        <div className="burgerFilter pr-4" onClick={() => setOpenFilter(!openFilter)}>
          <FcSearch size={"2em"} />
        </div>
        <form >
          <div className={"formFilter" + (openFilter ? " open-chat" : " close-chat")}>
            <h2 className="mt-5">Recherche avancée</h2>

            <label className="checkFilter mt-5 mb-3">
              Agriculteur Client
            <input type="checkbox" className="ml-3" defaultChecked={checkClient} value="client" onChange={handleChangeClient}></input>
            </label>
            <label className="checkFilter mb-5">
              Acheteur
            <input type="checkbox" className="ml-3" defaultChecked={checkBuyer} value="buyers" onChange={handleChangeBuyer}></input>
            </label>
            <label>Type de produit:
            <select value={product} onChange={handleChangeProduct}>
                <option value="all" selected> Tous les produits </option>
                <option value="ble">Blé</option>
                <option value="avoine">Avoine</option>
                <option value="triticale">Triticale</option>
                <option value="orge">Orge</option>
                <option value="mais">Maïs</option>
                <option value="pois">Pois</option>
                <option value="colza">Colza</option>
                <option value="tournesol">Tournesol</option>
                <option value="feverol">Feverol</option>
              </select>
            </label>
            <label>Surface d'exploitation:
                <select value={farmSize} onChange={handleChangeSize}>
                <option selected value="all"> Toutes tailles </option>
                <option value="little"> Moins de 100 ha</option>
                <option value="medium"> Entre 100 ha et 200 ha</option>
                <option value="big"> Plus de 200 ha </option>
              </select>
            </label>
            <button onClick={resetSearch} className="btn btn-outline-primary"> Réinitialiser </button>
          </div>
        </form>
      </div>
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
            <h3 className="popup-locaux">Locaux de ComparateurAgricole</h3>
          </Popup>
        </Marker>

        {isLoadingData && checkClient ?
          datas.slice(0, 1000).map((data, index) => (
            <Marker position={[data.lat, data.long]} icon={tractorIcon}>
              <Popup className="popup-farmer">
                <Popup_component infos={data} />
              </Popup>
            </Marker>
          ))
          : null
        }

        {isLoadingBuyercity && checkBuyer
          ? buyercity.slice(0, 8).map((res) => (
            <Marker position={[res.lat, res.long]} icon={buyerIcon}>
              <Popup className="popup-buyer">
                <h3 className="popup-locaux">{res.name}</h3>
              </Popup>
            </Marker>
          ))
          : null}
      </MapContainer>
    </div>
  ) : avaibleGPS ? (
    <p className="wait-localisation">Veuillez activer la géolocalisation</p>
  ) : (
        <p className="no-localisation">
          Désolé... Votre navigateur ne dispose pas d'un système de géolocalisation
        </p>
      );
}
