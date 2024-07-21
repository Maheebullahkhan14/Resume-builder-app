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
import Projects from "../Forms/Projects";
import { PROJECTS_VAR, EDUCATION_VAR, BASICINFO_VAR, WORKEXPINFO_VAR } from "../constants";
import { MODULESAPI } from "../constants";
import { getRequestOptions } from "../constants";
import toast from "react-hot-toast";
import { formatDate } from "../utils";

import FormHeader from "./FormHeader";

const Mainforms = ({ userData, userId }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      basicinfo: [{
        fullName: "",
        email: "",
        githubLink: "",
        linkedinLink: "",
        mobile: ""
      }],
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
          title: "",
          description: "",
          link: "",
          endDate: "",
        },
      ],
      workexp: [
        {
          company: "",
          startDate: "",
          endDate: "",
          role: "",
          location: "",
          description: ""
        }
      ]
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  const { fields: projectFields, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: "projects",
  });

  const { fields: workExpFields, append: appendWorkExp, remove: removeWorkExp } = useFieldArray({
    control,
    name: "workexp",
  });

  const { activetabsection, Resumesections } = useContext(AppContext);

  const onSubmit = (data) => {
    console.log(data);
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
        return <WorkExp register={register} handleSubmit={handleSubmit} append={appendWorkExp} fields={workExpFields} remove={removeWorkExp} />;
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
        return <Projects register={register} projectFields={projectFields} handleSubmit={handleSubmit} errors={errors} appendProject={appendProject} removeProject={removeProject} />;
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
      const educationKey = Object.keys(userSavedData).find((data) => data === EDUCATION_VAR);
      const infoKey = Object.keys(userSavedData).find((data) => data === BASICINFO_VAR);
      const workexpKey = Object.keys(userSavedData).find((data) => data === WORKEXPINFO_VAR);
      const defaultValues = {
        educations: userSavedData[educationKey] && userSavedData[educationKey][0]?.educationData.map(item => ({
          ...item,
          startDate: formatDate(item.startDate),
          endDate: formatDate(item.endDate)
        })) || [{ college: "", degree: "", degreestartDate: "", degreeEnddate: "", degreegrade: "" }],
        projects: userSavedData[projectKey] && userSavedData[projectKey][0]?.projectData || [{ Title: "", description: "", link: "", endDate: "" }],
        workexp: userSavedData[workexpKey] && userSavedData[workexpKey][0]?.workExpData.map(item => ({
          ...item,
          startDate: formatDate(item.startDate),
          endDate: formatDate(item.endDate)
        })) || [{
          company: "",
          startDate: "",
          endDate: "",
          role: "",
          location: "",
          description: ""
        }],
        basicinfo: userSavedData[infoKey] && userSavedData[infoKey][0] || [{
          fullName: "",
          email: "",
          githubLink: "",
          linkedinLink: "",
          mobile: ""
        }]
      };
      reset(defaultValues);
    }

  }, [userSavedData, reset])

  useEffect(() => {
    getSavedModules()
  }, [userId])

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
