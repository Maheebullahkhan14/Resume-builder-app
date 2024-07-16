
const Education = ({ register, handleSubmit, errors, onSubmit, fields, append, remove }) => {
    return (
        <div className="form-main-cover">
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields?.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-input-box">
                                        <label htmlFor={`educations[${index}].college`}>
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
                                        <label htmlFor={`educations[${index}].degreestartDate`}>
                                            Start date
                                        </label>
                                        <input
                                            type="date"
                                            id={`educations[${index}].degreestartDate`}
                                            placeholder="Enter Start Date"
                                            {...register(`educations[${index}].degreestartDate`, {
                                                required: "Start date is required",
                                                // Add other validation rules and messages as needed
                                            })}
                                            defaultValue={item.degreestartDate}
                                        />
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].degreestartDate && (
                                            <span>
                                                {errors.educations[index].degreestartDate.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-input-box">
                                        <label htmlFor={`educations[${index}].degreeEnddate`}>
                                            End date
                                        </label>
                                        <input
                                            type="date"
                                            id={`educations[${index}].degreeEnddate`}
                                            placeholder="Enter End Date"
                                            {...register(`educations[${index}].degreeEnddate`, {
                                                required: "End date is required",
                                                // Add other validation rules and messages as needed
                                            })}
                                            defaultValue={item.degreeEnddate}
                                        />
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].degreeEnddate && (
                                            <span>
                                                {errors.educations[index].degreeEnddate.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-input-box">
                                        <label htmlFor={`educations[${index}].degreegrade`}>
                                            Grade
                                        </label>
                                        <input
                                            type="text"
                                            id={`educations[${index}].degreegrade`}
                                            placeholder="Enter Grade"
                                            {...register(`educations[${index}].degreegrade`, {
                                                required: "Grade is required",
                                                // Add other validation rules and messages as needed
                                            })}
                                            defaultValue={item.degreegrade}
                                        />
                                        {errors && errors.educations && errors.educations[index] && errors.educations[index].degreegrade && (
                                            <span>
                                                {errors.educations[index].degreegrade.message}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={() => remove(index)}>
                                Remove
                            </button>
                        </div>
                    );
                })}

                <button
                    className="Add-more"
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

export default Education