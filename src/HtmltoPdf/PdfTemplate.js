import html2pdf from "html2pdf.js";
import Modal from "react-bootstrap/Modal";
import BasicTemplate from "./Templates/BasicTemplate";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState, useEffect } from "react";
import FontColorControls from "./EditoControlls";

const PdfTemplate = ({ showPdfTemplate, userData, setshowpdfTemplate, userSavedData }) => {

  const GoogleFontsApiKey = process.env.REACT_APP_FONT_API_KEY


  const generatePdf = () => {
    const element = document.getElementById("pdf-container");
    console.log(userData)
    const opt = {
      margin: [0, 0, 20, 0], //[top, left, bottom, right]
      filename: `${userData?.firstName}_resume`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  const [color, setColor] = useState('#000000');
  const [fonts, setFonts] = useState([]);
  const [selectedfont, setSelectedFont] = useState('Roboto');

  useEffect(() => {
    // Fetch Google Fonts
    const fetchFonts = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${GoogleFontsApiKey}`);
        if (response.status == 200) {
          const res = await response.json()
          setFonts(res?.items);
        }

      } catch (error) {
        console.error('Error fetching fonts:', error);
      }
    };

    fetchFonts();
  }, []);


  useEffect(() => {
    if (selectedfont) {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${selectedfont.replace(/\s+/g, '+')}:wght@400;700&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [selectedfont]);

  return (
    <>
      <Modal
        size="lg"
        show={showPdfTemplate}
        onHide={() => setshowpdfTemplate(false)}
        className="custom-modal pdf-modal-main-wrapper p-0"
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
          <div className="pdf-main-cover-box" id="pdf-container">
            <BasicTemplate selectedfont={selectedfont} setSelectedFont={setSelectedFont} fonts={fonts} userSavedData={userSavedData} setColor={setColor} color={color} />
          </div>
            <FontColorControls fonts={fonts} setSelectedFont={setSelectedFont} color={color} setColor={setColor}/>
          <button className="generate-pdf-btn" onClick={() => generatePdf()}>
            <MdOutlineFileDownload />
            <span>Download</span>
          </button>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default PdfTemplate;
