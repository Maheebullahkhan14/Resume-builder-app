import React from "react";
import { tabContent } from "../constants";

const FormHeader = ({ activetabsection }) => {
  const content = tabContent[activetabsection];

  if (!content) return null;

  return (
    <div className="form-header-details">
      <div className="form-header">
        <h6>{content.title}</h6>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default FormHeader;
