import React from "react";
import { IoMdResize } from "react-icons/io";
import { MdAccountBalance } from "react-icons/md";
import { TiAdjustBrightness } from "react-icons/ti";
import "./pop.css";



function Popup_component(props) {
  return (
    <div className="pop-up">
      <h3 className="text-center">{props.name}</h3>

      <div className="container-global-li">
        <div className="flex-responsive">
          <div className="container-li d-flex flex-row justify-content-around align-items-center mr-3 ml-3 fs-5">
            <div>
              <IoMdResize className="icons-farmer-pop-up" />
            </div>
            <p className="ml-2">Lorem</p>
          </div>

          <div className="container-li d-flex flex-row justify-content-around align-items-center mr-3 ml-3 fs-5">
            <div>
              <MdAccountBalance className="icons-farmer-pop-up" />
            </div>
            <p className="ml-2">Lorem</p>
          </div>
        </div>
        <div className="flex-responsive">
          <div className="container-li d-flex flex-row justify-content-around align-items-center mr-3 ml-3 fs-5">
            <div>
              <TiAdjustBrightness className="icons-farmer-pop-up" />
            </div>
            <p className="ml-2">Lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup_component;
