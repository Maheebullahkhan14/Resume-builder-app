import React, { useContext, useState } from "react";
import info_icon from "../Assets/info_icon.png";
import { AppContext } from "../ContextApi";
import {
  sectionIcon1,
  sectionIcon2,
  sectionIcon3,
  sectionIcon4,
  sectionIcon5,
} from "../Assets";

const Sectionbar = () => {
  const { Resumesections, Maininformation, sectactivetab, activetabsection } =
    useContext(AppContext);

  const handleactive = (key, item) => {
    sectactivetab(Object.keys(Maininformation)[key]);
    console.log(item);
    console.log(Object.keys(Maininformation)[key]);
  };

  return (
    <div className="left-menu-bar-main-cover">
      <div className="left-menu-tab-box-cover">
        <div className="left-menu-tab-box">
          <div className="section-header">
            <h4 className="left-menu-headings">Sections</h4>
            <p className="left-menu-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="row">
            {Object.keys(Resumesections).map((item, idx) => (
              <div className="col-lg-6 p-0">
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
                    <h5 className="text-center">{item}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionbar;
