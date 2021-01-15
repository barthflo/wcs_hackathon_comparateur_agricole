import React from "react";
import { useEffect, useState } from "react";
import { FETCH } from "../../../Fetch";
import axios from "axios";
import "./pop.css";

function Popup_component(props) {
  const { infos } = props;

  const [datas, setDatas] = useState();
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    axios
      .get(`${FETCH}/products/${infos.farmer_id}`)
      .then((res) => {
        setDatas(res.data);
        setIsLoadingData(true);
      })
      .catch(function (erreur) {
        console.log(erreur);
      });
  }, []);

  return (
      <section className="pop-up-container">
        <div className="pop-up-title">
          <h3 className="pop-up-city">{infos.city}</h3>
          <div className="pop-up-products">
            {isLoadingData? 
              datas.map((data, index) => <p key={index} className="product">{data.name + " (" + data.category + ") - "}<span className="important">{data.price}</span>{" €/T"}</p>)
              : 
              null
            }
          </div>
        </div>
        <p className="pop-up-info-surface">Surface exploitable : <span className="important">{infos.farm_size}</span> hectars</p>
      </section>
  );
}

export default Popup_component;
