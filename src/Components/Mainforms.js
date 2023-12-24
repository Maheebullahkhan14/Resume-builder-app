import React, { useEffect, useState } from "react";
import { useContext } from "react";
import InputControl from "./smallComponents/InputControll";
import { AppContext } from "../ContextApi";
import { useForm, useFieldArray } from "react-hook-form";
import BasicInfo from "../Forms/BasicInfo";
import WorkExp from "../Forms/WorkExp";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import deletechipimg from "../Assets/delete_chip_btn.png";
import FormHeader from "./FormHeader";

const Mainforms = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      educations: [
        {
          college: "",
          degree: "",
          degreestartDate: "",
          degreeEnddate: "",
          degreegrade: "" ,
        },
      ],
      projects: [
        {
          Title: "",
          description: "",
          link: "",
          EndOfProjectDate: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });
  const { activetabsection, Resumesections } = useContext(AppContext);

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors?.educations);
  }, [errors]);

  const Education = ({ register, handleSubmit, errors }) => {
    console.log(errors);
    return (
      <div className="form-main-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
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
                        defaultValue={item.college}
                      />
                      {errors && errors.educations[index].college && (
                          <p className="error-message">
                            {errors.educations[index].college.message}
                          </p>
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
                      {errors[`educations[${index}].degree`] && (
                        <span>
                          {errors[`educations[${index}].degree`].message}
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
                      {errors[`educations[${index}].degreestartDate`] && (
                        <span>
                          {
                            errors[`educations[${index}].degreestartDate`]
                              .message
                          }
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
                      {errors[`educations[${index}].degreeEnddate`] && (
                        <span>
                          {errors[`educations[${index}].degreeEnddate`].message}
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
                      {errors[`educations[${index}].degreegrade`] && (
                        <span>
                          {errors[`educations[${index}].degreegrade`].message}
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

  const Projects = () => {
    return (
      <div className="form-main-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
            return (
              <>
                <div className="row">
                  <div className="col-lg-6">
                    <InputControl
                      type="text"
                      label="Title"
                      placeholder="Enter project title"
                      name={`projects[${index}].Title`}
                      register={register}
                      defaultValue={item.Title}
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
                      name={`projects[${index}].degreeEnddate`}
                      register={register}
                      defaultValue={item.degreeEnddate}
                    />
                  </div>
                </div>
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </>
            );
          })}
          <button
            className="Add-more"
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

  const Skills = () => {
    const [tags, setTags] = useState([]);

    const handleTagChange = (tags) => {
      setTags(tags);
    };

    return (
      <>
        <label>Skills:</label>
        <TagsInput
          value={tags}
          onChange={handleTagChange}
          className="form-input-box skill-input"
        />
      </>
    );
  };

  const activeform = () => {
    // console.log(allCollegeData)
    switch (Resumesections[activetabsection]) {
      case Resumesections.Basicinfo:
        return (
          <BasicInfo
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        );
      case Resumesections.WorkExp:
        return <WorkExp register={register} handleSubmit={handleSubmit} />;
      case Resumesections.Education:
        return (
          <Education
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        );
      case Resumesections.Projects:
        return <Projects />;
      case Resumesections.Skills:
        return <Skills />;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <>
      <div className="main-form-cover-wrapper-box">
        <FormHeader />
        <div className="form-box-cover">{activeform()}</div>
      </div>
    </>
  );
};

export default Mainforms;
