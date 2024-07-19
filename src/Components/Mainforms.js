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
import { PROJECTS_VAR } from "../constants";
import { MODULESAPI } from "../constants";
import { getRequestOptions } from "../constants";
import toast from "react-hot-toast";

import FormHeader from "./FormHeader";

const Mainforms = ({ userData, userId }) => {
  const {
    register,
    control,
    handleSubmit,
    reset ,
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
    name : "projects"
  });
  const { activetabsection, Resumesections } = useContext(AppContext);

  const onSubmit = (data) => {
    console.log(data);
  };

  const Projects = () => {
    const projectKey = Object.keys(userSavedData).find((data) => data === PROJECTS_VAR)
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
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
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

  const [userSavedData, setUserSavedData] = useState([])

  const getSavedModules = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${MODULESAPI}?userId=${userId}`, getRequestOptions)
      if (!response.ok) {
        const errorResponse = await response.json()
        toast.error(errorResponse.msg)
        return
      }
      const res = await response.json();
      setUserSavedData(res?.savedModules)
      const projectKey = Object.keys(res?.savedModules).find((data) => data === PROJECTS_VAR)
      reset({
        projects: res?.savedModules[projectKey]?.projectData
      });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (userSavedData) {
      const projectKey = Object.keys(userSavedData).find((data) => data === PROJECTS_VAR)
      console.log(userSavedData[projectKey])
    }
    
  }, [userSavedData])

  useEffect(() =>{
    getSavedModules()
  },[userId])

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
