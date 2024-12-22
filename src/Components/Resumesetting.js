import React, { useEffect, useState } from "react";
import info_icon from "../Assets/info_icon.png";
import TemplatesModal from "./TemplatesModal";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { fontsIcon , previewIcon , selectIcon , downloadPdfIcon ,aiIcon } from "../Assets";
import PdfTemplate from "../HtmltoPdf/PdfTemplate";
import AiModal from "./AiModal";

const Resumesetting = ({userData , userSavedData}) => {
  const [show, setshow] = useState(false);
  const [showAiModal, setshowAiModal] = useState(false);
  const [showPdfTemplate , setshowpdfTemplate] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(
    JSON.parse(localStorage.getItem("SELECTED_TEMPLATE")) || []
  );

  const handleResumeDownload = (e) =>{
    console.log(e)
  }


  return (
    <>
      <div className="resume-setting-main-wrapper">
        <div className="resume-setting-header">
          <h4>Resume Settings</h4>
          <p>
            Customize your resume's appearance with formatting options and
            templates in Resume.
          </p>
        </div>
        <div className="selected-template-box-cover">
          <h6>Selected Template</h6>
          <div className="selected-template-box">
            <div className="selected-template-img-box">
              <img src={selectedTemplate.img}></img>
            </div>
            <p>{selectedTemplate.name}</p>
            <button
              className="change-template-button"
              onClick={() => setshow(true)}
            >
              {" "}
              Change Template
            </button>
          </div>
        </div>
        <div className="template-option-main-wrapper">
          <div className="template-setting-header">
            <h6>Template options </h6>
          </div>
          <div className="template-options-box-cover d-flex justify-content-between">
            <div className="template-option" onClick={() => setshowpdfTemplate(true)}>
              <img src={previewIcon} alt="info-icon"></img>
              <h6>Preview Resume</h6>
            </div>
            <div className="template-option">
              <img src={downloadPdfIcon} alt="info-icon"></img>
              <DropdownButton
                title="Download PDF"
                className="download-pdf-drop-down"
                onSelect={(e) =>handleResumeDownload(e)}
              >
                <Dropdown.Item>PDF</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Word </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Print</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="template-option" onClick={() => setshow(true)}>
              <img src={selectIcon} alt="info-icon"></img>
              <h6>Select Template</h6>
            </div>
            <div className="template-option" onClick={() =>setshowAiModal(true)}>
              <img src={aiIcon} alt="info-icon"></img>
              <h6>Create with Ai</h6>
            </div>
          </div>
        </div>
      </div>
      <TemplatesModal
        show={show}
        setshow={setshow}
        setSelectedTemplate={setSelectedTemplate}
        selectedTemplate={selectedTemplate}
      />
      <PdfTemplate
        showPdfTemplate={showPdfTemplate}
        setshowpdfTemplate={setshowpdfTemplate}
        userSavedData={userSavedData}
        userData={userData}
      />
      <AiModal show={showAiModal} setshow={setshowAiModal} />
    </>
  );
};

export default Resumesetting;
