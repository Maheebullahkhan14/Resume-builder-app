import InputControl from "../Components/smallComponents/InputControll";

const Projects = ({ register, handleSubmit, errors, onSubmit, projectFields, appendProject, removeProject }) => {
    return (
        <div className="form-main-cover">
            <form onSubmit={handleSubmit(onSubmit)}>
                {projectFields.map((item, index) => {
                    return (
                        <>
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
                                <button type="button" onClick={() => removeProject(index)}>
                                    Remove
                                </button>
                            )}
                        </>
                    );
                })}
                <button
                    className="Add-more"
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
                    Add More
                </button>
                <div className="submit-btn-box">
                    <button className="submit-btn" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Projects