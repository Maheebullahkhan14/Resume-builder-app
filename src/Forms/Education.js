import { useState, useEffect, useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { SAVE_EDUCATION_API, postRequestOptions } from "../constants";
import { AppContext } from "../ContextApi";
import toast from "react-hot-toast";
import Maininformation from "../FormData";

const Education = ({ register, Toaster,userSavedData , userId , handleSubmit, watch, errors, setValue, fields, append, remove }) => {
    const [isStillStudying, setIsStillStudying] = useState([]);
    const { sectactivetab } = useContext(AppContext)
    const watchedFields = watch('educations');

    const apiUrl = userSavedData.Projects === false ?  `${SAVE_EDUCATION_API}?userId=${userId}` : `api/updateData/education`


    // Debugging: Log fields array
    useEffect(() => {
        const checkStillStudying = fields.some((field) => field.isStudying == "1");
        setIsStillStudying(checkStillStudying);
    }, [watchedFields]);

    const onSubmit = (data) => {
       saveEducation(data.educations);
    };

    const saveEducation = async (data) => {
        const infoData = {
            userId: userId,
            educationData: data
        }
        postRequestOptions.body = JSON.stringify(infoData)
        try {
            const response = await fetch(`http://localhost:3000/${apiUrl}`, postRequestOptions)
            if (!response.ok) {
                const errorResponse = await response.json()
                toast.error(errorResponse.msg)
                return
            }
            const res = await response.json()
            toast.success(res.msg)
            sectactivetab(Object.keys(Maininformation)[3])
        } catch (error) {
            console.log(error)
        }
    }


    const handlestillStudying = (index, value) => {
        const updatedFields = fields.map((field, i) =>
            i === index ? { ...field, isStudying: value } : field
        );
        setValue("educations", updatedFields);
    };

    return (
        <div className="form-main-cover">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {fields?.map((item, index) => (
                    <div key={index} className="resume-form-main-cover-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-input-box">
                                    <label htmlFor={`education[${index}].college`}>
                                        College
                                    </label>
                                    <input
                                        type="text"
                                        name={`educations[${index}].college`}
                                        id={`educations[${index}].college`}
                                        placeholder="Enter College Name"
                                        {...register(`educations[${index}].college`, {
                                            required: "College is required",
                                        })}
                                    />
                                    {errors?.educations?.[index]?.college && (
                                        <span>{errors.educations[index].college.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-input-box">
                                    <label htmlFor={`educations[${index}].degree`}>
                                        Degree
                                    </label>
                                    <input
                                        type="text"
                                        name={`educations[${index}].degree`}
                                        id={`educations[${index}].degree`}
                                        placeholder="Enter Degree"
                                        {...register(`educations[${index}].degree`, {
                                            required: "Degree is required",
                                        })}
                                        defaultValue={item.degree}
                                    />
                                    {errors?.educations?.[index]?.degree && (
                                        <span>{errors.educations[index].degree.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-input-box">
                                    <label htmlFor={`educations[${index}].isStudying`}>
                                        Still Studying
                                    </label>
                                    <div className="study-input-box-cover">
                                        <label className="study-input-box">
                                            <input
                                                type="radio"
                                                value="1"
                                                name={`educations[${index}].isStudying`}
                                                id={`educations[${index}].isStudying`}
                                                {...register(`educations[${index}].isStudying`, {
                                                    required: "Please select an option",
                                                })}
                                                checked={item.isStudying == "1"}
                                                onChange={() => handlestillStudying(index, "1")}
                                            />
                                            Yes
                                        </label>
                                        <label className="study-input-box">
                                            <input
                                                type="radio"
                                                value="0"
                                                name={`educations[${index}].isStudying`}
                                                id={`educations[${index}].isStudying`}
                                                {...register(`educations[${index}].isStudying`, {
                                                    required: "Please select an option",
                                                })}
                                                checked={item.isStudying == "0"}
                                                onChange={() => handlestillStudying(index, "0")}
                                            />
                                            No
                                        </label>
                                    </div>
                                    {errors?.educations?.[index]?.isStudying && (
                                        <span>{errors.educations[index].isStudying.message}</span>
                                    )}
                                </div>
                            </div>
                                {console.log(item.isStudying)}
                            <div className="col-lg-4">
                                <div className="form-input-box">
                                    <label htmlFor={`educations[${index}].startDate`}>
                                        Start date
                                    </label>
                                    <input
                                        type="date"
                                        name={`educations[${index}].startDate`}
                                        id={`educations[${index}].startDate`}
                                        placeholder="Enter Start Date"
                                        {...register(`educations[${index}].startDate`, {
                                            required: "Start date is required",
                                        })}
                                        defaultValue={item.startDate}
                                    />
                                    {errors?.educations?.[index]?.startDate && (
                                        <span>{errors.educations[index].startDate.message}</span>
                                    )}
                                </div>
                            </div>

                            {item?.isStudying == "0" && (
                                <div className="col-lg-4">
                                    <div className="form-input-box">
                                        <label htmlFor={`educations[${index}].endDate`}>
                                            End date
                                        </label>
                                        <input
                                            type="date"
                                            id={`educations[${index}].endDate`}
                                            placeholder="Enter End Date"
                                            {...register(`educations[${index}].endDate`, {
                                                required: "End date is required",
                                            })}
                                            defaultValue={item.endDate}
                                        />
                                        {errors?.educations?.[index]?.endDate && (
                                            <span>{errors.educations[index].endDate.message}</span>
                                        )}
                                    </div>
                                </div>
                            )}
                            {item?.isStudying == "0" && (
                                <div className="col-lg-4">
                                    <div className="form-input-box">
                                        <label htmlFor={`educations[${index}].grade`}>
                                            Grade
                                        </label>
                                        <input
                                            type="text"
                                            id={`educations[${index}].grade`}
                                            placeholder="Enter Grade"
                                            {...register(`educations[${index}].grade`, {
                                                required: "Grade is required",
                                            })}
                                            defaultValue={item.grade}
                                        />
                                        {errors?.educations?.[index]?.grade && (
                                            <span>{errors.educations[index].grade.message}</span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        {index > 0 && (
                            <button
                                className="remove-form-btn"
                                type="button"
                                onClick={() => remove(index)}
                            >
                                <RxCross2 />
                            </button>
                        )}
                    </div>
                ))}
                <div className="form-footer-btn-cover d-flex justify-content-center">
                    <button
                        className={isStillStudying ? "disable-btn Add-more-form-btn" : "Add-more-form-btn"}
                        type="button"
                        onClick={() =>
                            append({
                                college: "",
                                degree: "",
                                startDate: "",
                                endDate: "",
                                grade: "",
                                stillStudying: "0", // Default value
                            })
                        }
                        disabled={isStillStudying}
                    >
                        <span>
                            <IoAddCircleOutline />
                        </span>
                        Add
                    </button>
                    <div className="submit-btn-box">
                        <button className="submit-btn" type="submit">
                            <span>
                                <MdSaveAlt />
                            </span>
                            { userSavedData.Education === false ? "Save" : "update" }
                        </button>
                    </div>
                </div>
            </form>
            <Toaster/>
        </div>
    );
};

export default Education;
