import InputControl from "../Components/smallComponents/InputControll";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SAVE_PROJECTS_API, postRequestOptions } from "../constants";
import Maininformation from "../FormData";
import { AppContext } from "../ContextApi";
import { useContext } from "react";
import toast from "react-hot-toast";

const Projects = ({ register, userId,Toaster,getSavedModules , userSavedData , handleSubmit, errors, projectFields, appendProject, removeProject }) => {

    const { sectactivetab } = useContext(AppContext)

    const apiUrl = userSavedData.Projects === false ?  `${SAVE_PROJECTS_API}?userId=${userId}` : `api/updateData/projects`

    const onSubmit = (data) => {
        saveProjects(data.projects);
    };

    const API_URL = process.env.REACT_APP_API_URL;

    const saveProjects = async (data) => {
        const infoData = {
            userId: userId,
            projectData: data
        }
        postRequestOptions.body = JSON.stringify(infoData)
        try {
            const response = await fetch(`${API_URL}/${apiUrl}`, postRequestOptions)
            if (!response.ok) {
                const errorResponse = await response.json()
                toast.error(errorResponse.msg)
                return
            } 
            const res = await response.json()
            toast.success(res.msg)
            sectactivetab(Object.keys(Maininformation)[4])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="form-main-cover">
            <form onSubmit={handleSubmit(onSubmit)}>
                {projectFields?.map((item, index) => (
                    <div key={index} className="resume-form-main-cover-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-input-box">
                                    <label htmlFor={`projects[${index}].title`}>Title</label>
                                    <input
                                        type="text"
                                        id={`projects[${index}].title`}
                                        placeholder="Enter project title"
                                        {...register(`projects[${index}].title`, {
                                            required: "Title is required",
                                        })}
                                        defaultValue={item.title}
                                    />
                                    {errors?.projects?.[index]?.title && (
                                        <span>{errors.projects[index].title.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-input-box">
                                    <label htmlFor={`projects[${index}].link`}>Link</label>
                                    <input
                                        type="text"
                                        id={`projects[${index}].link`}
                                        placeholder="Project link"
                                        {...register(`projects[${index}].link`, {
                                            required: "Link is required",
                                        })}
                                        defaultValue={item.link}
                                    />
                                    {errors?.projects?.[index]?.link && (
                                        <span>{errors.projects[index].link.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-input-box">
                                    <label htmlFor={`projects[${index}].endDate`}>End Date</label>
                                    <input
                                        type="date"
                                        id={`projects[${index}].endDate`}
                                        placeholder="Enter end date"
                                        {...register(`projects[${index}].endDate`, {
                                            required: "End date is required",
                                        })}
                                        defaultValue={item.endDate}
                                    />
                                    {errors?.projects?.[index]?.endDate && (
                                        <span>{errors.projects[index].endDate.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-input-box">
                                    <label htmlFor={`projects[${index}].description`}>Description</label>
                                    <textarea
                                     
                                        rows={4}
                                        id={`projects[${index}].description`}
                                        placeholder="Enter project description"
                                        {...register(`projects[${index}].description`, {
                                            required: "Description is required",
                                        })}
                                        defaultValue={item.description}
                                    />
                                    {errors?.projects?.[index]?.description && (
                                        <span>{errors.projects[index].description.message}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        {index > 0 && (
                            <button
                                className="remove-form-btn"
                                type="button"
                                onClick={() => removeProject(index)}
                            >
                                <RxCross2 />
                            </button>
                        )}
                    </div>
                ))}
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
                            { userSavedData.Projects === false ? "Save" : "update" }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Projects