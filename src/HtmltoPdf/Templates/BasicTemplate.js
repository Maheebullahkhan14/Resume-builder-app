import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChromePicker } from 'react-color';

const BasicTemplate = ({ userSavedData ,selectedfont,setSelectedFont , color , setColor , fonts }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    const basicinfo = userSavedData?.Basicinfo[0] || {
        fullName: "Your Name",
        email: "youremail@example.com",
        linkedinLink: "",
        githubLink: ""
    };

    const workExperience = userSavedData?.workExp[0]?.workExpData || [
        {
            company: "Your First Company",
            location: "Your City",
            startDate: "2022-01-01",
            endDate: "2023-01-01",
            description: "Lorem ipsum dolor sit amet.",
            role: "Your Role"
        }
    ];

    const education = userSavedData?.Education[0]?.educationData || [
        {
            college: "Your College",
            degree: "Your Degree",
            startDate: "2020-01-01",
            endDate: "2022-01-01",
            grade: "Your Grade"
        }
    ];

    const projects = userSavedData?.Projects[0]?.projectData || [
        {
            title: "Your Project Title",
            description: "Lorem ipsum dolor sit amet.",
            endDate: "2022-01-01",
            link: "yourprojectlink.com"
        }
    ];

    return (
        <>
            <div className="pdf-cover-box" style={{fontFamily : selectedfont}}>
                <div className="pdf-content-box">
                    <div className="pdf-header mb-5">
                        <h5
                            className="user-name"
                            style={{ fontFamily: selectedfont, color: color }}
                        >
                            {basicinfo.fullName}
                        </h5>
                        <div className="user-details">
                            {basicinfo.linkedinLink && (
                                <span className="user-detail-list">
                                    Linkedin : <span className="social-details">
                                        <Link to={basicinfo.linkedinLink}>
                                        {basicinfo.linkedinLink.replace(/(^\w+:|^)\/\//, '').split('/')[0]}
                                    </Link>
                                    </span>
                                </span>
                            )}
                            |
                            <span className="user-detail-list">
                                Github: <span className='social-details'>
                                {basicinfo.githubLink || 'github.com/yourprofile'}
                                    </span> 
                            </span>
                            |
                            <span className="user-detail-list">
                                Email: <span className='social-details'>
                                {basicinfo.email}</span> 
                            </span>
                        </div>
                    </div>

                    <section className="Experience">
                        <h6
                            className="section-header"
                            style={{ fontFamily: selectedfont, color: color }}
                        >
                            Experience
                        </h6>
                        <div className="dotted-line"></div>
                        <div className="experience-list-wrapper">
                            {workExperience.map((exp, index) => (
                                <div className="experience-list-box mb-5" key={index}>
                                    <div className="experience-company-header d-flex justify-content-between">
                                        <h6
                                            style={{ fontFamily: selectedfont, color: color }}
                                        >
                                            {exp.company}
                                        </h6>
                                        <span className="experience-location">{exp.location}</span>
                                    </div>
                                    <div className="experience-company-date-box">
                                        <p>
                                            <span className="start-date">{formatDate(exp.startDate)}</span>
                                            {" - "}
                                            <span className="end-date">{exp.currentlyWorking ? 'Present' : formatDate(exp.endDate)}</span>
                                        </p>
                                    </div>
                                    <div className="experinence-para">
                                        <p>{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="Education">
                        <h6
                            className="section-header"
                            style={{ fontFamily: selectedfont, color: color }}
                        >
                            Education
                        </h6>
                        <div className="dotted-line"></div>
                        <div className="experience-list-wrapper">
                            {education.map((edu, index) => (
                                <div className="experience-list-box mb-5" key={index}>
                                    <div className="experience-company-header d-flex justify-content-between">
                                        <h6
                                            style={{ fontFamily: selectedfont, color: color }}
                                        >
                                            {edu.college}
                                        </h6>
                                        <span className="experience-location">{edu.grade || 'N/A'}</span>
                                    </div>
                                    <div className="experience-company-date-box">
                                        <p>
                                            <span className="start-date">{formatDate(edu.startDate)}</span>
                                            {" - "}
                                            <span className="end-date">{edu.isStudying ? 'Present' : formatDate(edu.endDate)}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="projects">
                        <h6
                            className="section-header"
                            style={{ fontFamily: selectedfont, color: color }}
                        >
                            PROJECTS
                        </h6>
                        <div className="dotted-line"></div>
                        <div className="projects-list-box-cover">
                            {projects.map((project, index) => (
                                <div className="projects-list-box mb-5" key={index}>
                                    <div className="projects-title d-flex justify-content-between">
                                        <h6
                                            style={{ fontFamily: selectedfont, color: color }}
                                        >
                                            {project.title || "Your Project"}
                                        </h6>
                                        <span className="projects-end-date">{project.endDate || "Project End Date"}</span>
                                    </div>
                                    <div className="project-description">
                                        <p>{project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="skills">
                        <h6
                            className="section-header"
                            style={{ fontFamily: selectedfont, color: color }}
                        >
                            SKILLS
                        </h6>
                        <div className="dotted-line"></div>
                        <div className="skills-list-box-cover d-flex">
                            <p>ReactJs</p>
                            <p>JavaScript</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>Jquery</p>
                        </div>
                    </section>
                </div>
            </div>

            
        </>
    );
};

export default BasicTemplate;
