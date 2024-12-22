import React, { useContext, useState } from "react";
import info_icon from "../Assets/info_icon.png";
import { AppContext } from "../ContextApi";
import { IoIosLogOut } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";


import {
  sectionIcon1,
  sectionIcon2,
  sectionIcon3,
  sectionIcon4,
  sectionIcon5, MainLogo, logoutIcon
} from "../Assets";

const Sectionbar = ({ userSavedData }) => {
  const { Resumesections, Maininformation, sectactivetab, activetabsection } =
    useContext(AppContext);

  const handleactive = (key, item) => {
    sectactivetab(Object.keys(Maininformation)[key]);
    console.log(Object.keys(Maininformation)[key]);
  };



  return (
    <div className="left-menu-bar-main-cover">
      <div className="left-menu-tab-box-cover">
        <div className="logo-box">
          <img src={MainLogo} alt='CV logo' ></img>
          <span>Cv Maker</span>
        </div>
        <div className="left-menu-tab-box">
          <div className="row">
            {Object.keys(Resumesections).map((item, idx) => {
              // Check if the current item has a corresponding entry in the data
              const hasData = userSavedData[item] !== undefined && (userSavedData[item] === true || userSavedData[item].length > 0);

              return (
                <div className="col-lg-12 p-0" key={item}>
                  <div
                    className={
                      "section-tab-box" +
                      (item === activetabsection ? " active-section-tab" : "")
                    }
                    onClick={() => handleactive(idx, item)}
                  >
                    <div className="section-icon-box">
                      {idx === 0 && <img src={sectionIcon1} alt="info_icon" />}
                      {idx === 1 && <img src={sectionIcon2} alt="info_icon" />}
                      {idx === 2 && <img src={sectionIcon3} alt="info_icon" />}
                      {idx === 3 && <img src={sectionIcon4} alt="info_icon" />}
                      {idx === 4 && <img src={sectionIcon5} alt="info_icon" />}
                    </div>
                    <div className="section-title-box">
                      <h5 className="text-center">{item}
                        {hasData && (
                          <span>
                            <TiInputChecked />
                          </span>
                        )}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="logout-card-cover">
          <div className="logout-card-box">
            <img src={logoutIcon}></img>
            <div className="logut-btn-box">
              <button><span><IoIosLogOut /></span> Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionbar;
