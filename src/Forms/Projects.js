import InputControl from "../Components/smallComponents/InputControll";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Projects = ({ register, handleSubmit, errors, onSubmit, projectFields, appendProject, removeProject }) => {
    return (
        <div className="form-main-cover">
            <form onSubmit={handleSubmit(onSubmit)}>
                {projectFields.map((item, index) => {
                    return (
                        <>
                            <div className="resume-form-main-cover-wrapper">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <InputControl
                                            type="text"
                                            label="Title"
                                            placeholder="Enter project title"
                                            name={`projects[${index}].title`}
                                            register={register}
                                            defaultValue={item.title}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputControl
                                            type="text"
                                            label="Description"
                                            placeholder="Enter project description"
                                            name={`projects[${index}].description`}
                                            register={register}
                                            defaultValue={item.description}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputControl
                                            type="text"
                                            label="Link"
                                            placeholder="project link"
                                            name={`projects[${index}].link`}
                                            register={register}
                                            defaultValue={item.link}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <InputControl
                                            type="date"
                                            label="End date"
                                            placeholder="Enter profession"
                                            name={`projects[${index}].endDate`}
                                            register={register}
                                            defaultValue={item.endDate}
                                        />
                                    </div>
                                </div>
                                {index > 0 && (
                                    <button className="remove-form-btn" type="button" onClick={() => removeProject(index)}>
                                        <RxCross2/>
                                    </button>
                                )}
                            </div>
                        </>
                    );
                })}

                <div className="form-footer-btn-cover d-flex justify-content-center">
                    <button
                        className="Add-more-form-btn"
                        type="button"
                        onClick={() =>
                            appendProject({
                                college: "",
                                degree: "",
                                degreestartDate: "",
                                degreeEnddate: "",
                                degreegrade: "",
                            })
                        }
                    >
                        <span><IoAddCircleOutline /></span>
                        Add
                    </button>
                    <div className="submit-btn-box">
                        <button className="submit-btn" type="submit">
                            <span><MdSaveAlt /></span>
                            Save
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Projects