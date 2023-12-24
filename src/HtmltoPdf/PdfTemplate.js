import html2pdf from "html2pdf.js";
import Modal from "react-bootstrap/Modal";

const PdfTemplate = ({ showPdfTemplate, setshowpdfTemplate }) => {
  const generatePdf = () => {
    const element = document.getElementById("pdf-container");
    html2pdf(element);
  };

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
            <div className="pdf-cover-box">
              <div className="pdf-content-box">
                <div className="pdf-header mb-5">
                  <h5 className="user-name">Khan Maheeb</h5>
                  <div className="user-details">
                    <span className="user-detail-list">
                      linkedin kjsdhkjdfkjdf
                    </span>{" "}
                    |
                    <span className="user-detail-list">
                      github ksdhjkshdhsdsdh
                    </span>{" "}
                    |
                    <span className="user-detail-list">
                      email khanMaheeb@gmail.com
                    </span>
                  </div>
                </div>

                <section className="summary-section">
                  <h6 className="section-header">PROFESSIONAL SUMMARY</h6>
                  <div className="dotted-line"></div>
                  <div className="summary-para">
                    <p>
                      "Passionate frontend developer with a flair for creating
                      visually appealing and responsive web applications.
                      Proficient in modern technologies such as React,
                      JavaScript, and CSS to deliver seamless user experiences.
                      Proven ability to translate design concepts into
                      efficient, clean, and maintainable code. Adept at
                      collaborating with cross-functional teams to achieve
                      project goals and deadlines. Eager to contribute my skills
                      and creativity to elevate user interfaces at [Your Target
                      Company]."
                    </p>
                  </div>
                </section>

                <section className="Experience">
                  <h6 className="section-header">Experience</h6>
                  <div className="dotted-line"></div>
                  <div className="experience-list-wrapper">
                    <div className="experience-list-box mb-5">
                      <div className="experience-company-header d-flex justify-content-between">
                        <h6>Enirmaan Tech Solutions pvt ltd</h6>
                        <span className="experience-location">Mumbai</span>
                      </div>
                      <div className="experience-company-date-box">
                        <p>
                          <span className="start-date">Oct 2015</span>
                          {" - "}
                          <span className="end-date">Apr 2016</span>
                        </p>
                      </div>
                      <div className="experinence-para">
                        <p>
                          Passionate frontend developer with a flair for
                          creating visually appealing and responsive web
                          applications. Proficient in modern technologies such
                          as React, JavaScript, and CSS to deliver seamless user
                          experiences. Proven ability to translate design
                          concepts into efficient, clean, and maintainable code.
                        </p>
                      </div>
                    </div>
                    <div className="experience-list-box mb-5">
                      <div className="experience-company-header d-flex justify-content-between">
                        <h6>Enirmaan Tech Solutions pvt ltd</h6>
                        <span className="experience-location">Mumbai</span>
                      </div>
                      <div className="experience-company-date-box">
                        <p>
                          <span className="start-date">Oct 2015</span>
                          {" - "}
                          <span className="end-date">Apr 2016</span>
                        </p>
                      </div>
                      <div className="experinence-para">
                        <p>
                          Passionate frontend developer with a flair for
                          creating visually appealing and responsive web
                          applications. Proficient in modern technologies such
                          as React, JavaScript, and CSS to deliver seamless user
                          experiences. Proven ability to translate design
                          concepts into efficient, clean, and maintainable code.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="Education">
                  <h6 className="section-header">Education</h6>
                  <div className="dotted-line"></div>
                  <div className="experience-list-wrapper">
                    <div className="experience-list-box mb-5">
                      <div className="experience-company-header d-flex justify-content-between">
                        <h6>Anjuman Islam Kalsekar Technical Campus</h6>
                        <span className="experience-location">E.E/7.7 CGPA</span>
                      </div>
                      <div className="experience-company-date-box">
                        <p>
                          <span className="start-date">Oct 2015</span>
                          {" - "}
                          <span className="end-date">Apr 2016</span>
                        </p>
                      </div>
                      <div className="experinence-para">
                        <p>
                          Passionate frontend developer with a flair for
                          creating visually appealing and responsive web
                          applications. Proficient in modern technologies such
                          as React, JavaScript, and CSS to deliver seamless user
                          experiences. Proven ability to translate design
                          concepts into efficient, clean, and maintainable code.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="projects">
                  <div className="projects-main-wrapper-cover">
                    <h6 className="section-header">PROJECTS</h6>
                    <div className="dotted-line"></div>
                    <div className="projects-list-box-cover">
                      <div className="projects-title d-flex justify-content-between">
                        <h6>
                          Expend Tracker App{" "}
                          
                        </h6>
                        <span className="projects-end-date">Jan 2023</span>
                      </div>
                      <div className="project-description">
                        <p className="">
                          Passionate frontend developer with a flair for
                          creating visually appealing and responsive web
                          applications. Proficient in modern technologies such
                          as React, JavaScript, and CSS to deliver seamless user
                          experiences. Proven ability to translate design
                          concepts into efficient, clean, and maintainable code.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="skills">
                  <div className="skills-main-wrapper-cover">
                    <h6 className="section-header">SKILLS</h6>
                    <div className="dotted-line"></div>
                    <div className="skills-list-box-cover d-flex">
                      <p>ReactJs</p>
                      <p>JavaScript</p>
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>Bootstrap</p>
                      <p>Jquery</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <button onClick={() => generatePdf()}>Generate Pdf</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PdfTemplate;
