import React ,{useContext} from "react";
import Sectionbar from "./Sectionbar";
import Mainforms from "./Mainforms";
import Resumesetting from "./Resumesetting";

const Maincontainer = () => {
  return (
    <>
      <div className="main-cover-box-wrapper">
        <div className="main-cover-box">
          <div className="row">
            <div className="col-lg-2">
              <div className="left-menu-bar-section">
                <Sectionbar/>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="main-form-cover-wrapper">
                <div className="main-form-content-box">
                  <Mainforms />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="settings-main-cover-wrapper">
                <Resumesetting />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Maincontainer;
