import { RxCross2 } from "react-icons/rx";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";



const Education = ({ register, handleSubmit, errors, onSubmit, fields, append, remove }) => {
    return (
        <div className="form-main-cover">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {fields?.map((item, index) => {
                    return (
                        <div key={index} className="resume-form-main-cover-wrapper">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-input-box">
                                        <label htmlFor={`education[${index}].college`}>
                                            College
                                        </label>
                                        <input
                                            type="text"
                                            id={`educations[${index}].college`}
                                            placeholder="Enter College Name"
                                            {...register(`educations[${index}].college`, {
                                                required: "College is required",
                                                // Add other validation rules and messages as needed
                                            })}
                                        // defaultValue={item?.college || ""}
                                        />
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].college && (
                                            <span>
                                                {errors.educations[index].college.message}
                                            </span>
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
                                            id={`educations[${index}].degree`}
                                            placeholder="Enter Degree"
                                            {...register(`educations[${index}].degree`, {
                                                required: "Degree is required",
                                                // Add other validation rules and messages as needed
                                            })}
                                            defaultValue={item.degree}
                                        />
                                        {errors && errors[`educations[${index}]?.degree`] && (
                                            <span>
                                                {errors[`educations[${index}].degree`].message}
                                            </span>
                                        )}
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].degree && (
                                            <span>
                                                {errors.educations[index].degree.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-input-box">
                                        <label htmlFor={`educations[${index}].startDate`}>
                                            Start date
                                        </label>
                                        <input
                                            type="date"
                                            id={`educations[${index}].startDate`}
                                            placeholder="Enter Start Date"
                                            {...register(`educations[${index}].startDate`, {
                                                required: "Start date is required",
                                                // Add other validation rules and messages as needed
                                            })}
                                            defaultValue={item.startDate}
                                        />
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].startDate && (
                                            <span>
                                                {errors.educations[index].startDate.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-6">
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
                                                // Add other validation rules and messages as needed
                                            })}
                                            defaultValue={item.endDate}
                                        />
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].endDate && (
                                            <span>
                                                {errors.educations[index].endDate.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-6">
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
                                                // Add other validation rules and messages as needed
                                            })}
                                            defaultValue={item.grade}
                                        />
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].grade && (
                                            <span>
                                                {errors.educations[index].grade.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button className="remove-form-btn" type="button" onClick={() => remove(index)}>
                                <RxCross2/>
                            </button>
                        </div>
                    );
                })}
                <div className="form-footer-btn-cover d-flex justify-content-center">
                    <button
                        className="Add-more-form-btn"
                        type="button"
                        onClick={() =>
                            append({
                                college: "",
                                degree: "",
                                degreestartDate: "",
                                degreeEnddate: "",
                                degreegrade: "",
                            })
                        }
                    >
                        <span><IoAddCircleOutline/></span>
                        Add 
                    </button>
                    <div className="submit-btn-box">
                        <button className="submit-btn" type="submit">
                            <span><MdSaveAlt/></span>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Education