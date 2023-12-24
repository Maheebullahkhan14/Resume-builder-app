import { selectIcon } from "../Assets";
import { TemplateData } from "../Data";

import Modal from "react-bootstrap/Modal";

const TemplatesModal = ({
  show,
  setshow,
  setSelectedTemplate,
  selectedTemplate,
}) => {
  const handleDocumentType = (type) => {
    setSelectedTemplate(type);
    localStorage.setItem('SELECTED_TEMPLATE', JSON.stringify(type));
  };

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setshow(false)}
        className="custom-modal"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            className="templates-modal-title"
          >
            Select Template
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="templates-cover-box">
            <div className="templates-main-wrapper-cover d-flex flex-wrap justify-content-around">
              {TemplateData.map((template) => {
                return (
                  <div
                    className={selectedTemplate.id === template.id ? 'templates-box selected-template' : 'templates-box' }
                    key={template.id}
                    onClick={() => handleDocumentType(template)}
                  >
                    <img src={template.img}></img>
                    <h6 className="template-name text-center">
                      {template.name}
                    </h6>
                    {selectedTemplate.id === template.id && (
                      <div className="selected-img-box">
                        <img src={selectIcon}></img>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TemplatesModal;
