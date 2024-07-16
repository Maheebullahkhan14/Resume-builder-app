import React, { useEffect, useState } from "react";
import { useContext } from "react";
import InputControl from "./smallComponents/InputControll";
import { AppContext } from "../ContextApi";
import { useForm, useFieldArray } from "react-hook-form";
import BasicInfo from "../Forms/BasicInfo";
import WorkExp from "../Forms/WorkExp";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import HeaderStrip from "./HeaderStrip";
import Education from "../Forms/Education";

import deletechipimg from "../Assets/delete_chip_btn.png";
import FormHeader from "./FormHeader";

const Mainforms = ({ userData, userId }) => {
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
          degreegrade: "",
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
            userId={userId}
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
            fields={fields}
            append={append}
            remove={remove}
            onSubmit={onSubmit}
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

  return (
    <>
      <div className="main-form-cover-wrapper-box">
        <HeaderStrip userData={userData} />
        <FormHeader />
        <div className="form-box-cover">{activeform()}</div>
      </div>
    </>
  );
};

export default Mainforms;
