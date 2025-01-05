import React, { useEffect , useContext } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SAVE_WORKEXP_API ,postRequestOptions } from "../constants";
import { toast , Toaster } from 'react-hot-toast';
import Maininformation from "../FormData";
import { AppContext } from "../ContextApi";

const WorkExp = ({ register,userSavedData, handleSubmit,errors , userId , fields, setValue, appendWorkExp, removeWorkExp }) => {

const {sectactivetab } = useContext(AppContext)

const API_URL = process.env.REACT_APP_API_URL;

  const handlestillWorking = (index, value) => {
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, currentlyWorking: value } : field
    );
    setValue("workexp", updatedFields);
  };

  const apiUrl = userSavedData.workExp === false ?  `${SAVE_WORKEXP_API}?userId=${userId}` : `api/updateData/workexperience` 

  const saveWorkExp = async (data) => {
    const infoData = {
      userId: userId,
      workExpData : data
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
      sectactivetab(Object.keys(Maininformation)[1])
  } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data) => {
    saveWorkExp(data.workexp);
  };
  return (
    <>
      <div className="form-main-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields?.map((item, index) => (
              <div key={index} className="resume-form-main-cover-wrapper">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="form-input-box">
                              <label htmlFor={`workexp[${index}].company`}>Company</label>
                              <input
                                  type="text"
                                  id={`workexp[${index}].company`}
                                  name={`workexp[${index}].company`}
                                  placeholder="Enter Company Name"
                                  required
                                  {...register(`workexp[${index}].company`, {
                                      required: "Company name is required",
                                  })}
                              />
                              {errors?.workexp?.[index]?.company && (
                                  <span>{errors.workexp[index].company.message}</span>
                              )}
                          </div>
                      </div>

                      <div className="col-lg-6">
                          <div className="form-input-box">
                              <label htmlFor={`workexp[${index}].startDate`}>Start Date</label>
                              <input
                                  type="date"
                                  id={`workexp[${index}].startDate`}
                                  name={`workexp[${index}].startDate`}
                                  placeholder="Enter start date"
                                  {...register(`workexp[${index}].startDate`, {
                                      required: "Start date is required",
                                  })}
                                  required
                              />
                              {errors?.workexp?.[index]?.startDate && (
                                  <span>{errors.workexp[index].startDate.message}</span>
                              )}
                          </div>
                      </div>

                      <div className="col-lg-6">
                          <div className="form-input-box">
                              <label htmlFor={`workexp[${index}].currentlyWorking`}>Still Working</label>
                              <div className="study-input-box-cover">
                                  <label className="study-input-box">
                                      <input
                                          type="radio"
                                          value="1"
                                          name={`workexp[${index}].currentlyWorking`}
                                          id={`workexp[${index}].currentlyWorking`}
                                          {...register(`workexp[${index}].currentlyWorking`, {
                                              required: "Please select an option",
                                          })}
                                          checked={item.currentlyWorking == "1"}
                                          onChange={() => handlestillWorking(index, "1")}
                                      />
                                      Yes
                                  </label>
                                  <label className="study-input-box">
                                      <input
                                          type="radio"
                                          value="0"
                                          name={`workexp[${index}].currentlyWorking`}
                                          id={`workexp[${index}].currentlyWorking`}
                                          {...register(`workexp[${index}].currentlyWorking`, {
                                              required: "Please select an option",
                                          })}
                                          checked={item.currentlyWorking == "0"}
                                          onChange={() => handlestillWorking(index, "0")}
                                      />
                                      No
                                  </label>
                              </div>
                              {errors?.workexp?.[index]?.currentlyWorking && (
                                  <span>{errors.workexp[index].currentlyWorking.message}</span>
                              )}
                          </div>
                      </div>
                      {item.currentlyWorking == "0" && (
                          <div className="col-lg-6">
                              <div className="form-input-box">
                                  <label htmlFor={`workexp[${index}].endDate`}>End Date</label>
                                  <input
                                      type="date"
                                      id={`workexp[${index}].endDate`}
                                      placeholder="Enter end date"
                                      {...register(`workexp[${index}].endDate`, {
                                          required: "End date is required",
                                      })}
                                  />
                                  {errors?.workexp?.[index]?.endDate && (
                                      <span>{errors.workexp[index].endDate.message}</span>
                                  )}
                              </div>
                          </div>
                      )}

                      <div className="col-lg-6">
                          <div className="form-input-box">
                              <label htmlFor={`workexp[${index}].role`}>Role</label>
                              <input
                                  type="text"
                                  id={`workexp[${index}].role`}
                                  placeholder="Enter Role"
                                  {...register(`workexp[${index}].role`, {
                                      required: "Role is required",
                                  })}
                              />
                              {errors?.workexp?.[index]?.role && (
                                  <span>{errors.workexp[index].role.message}</span>
                              )}
                          </div>
                      </div>

                      <div className="col-lg-6">
                          <div className="form-input-box">
                              <label htmlFor={`workexp[${index}].location`}>Location</label>
                              <input
                                  type="text"
                                  id={`workexp[${index}].location`}
                                  placeholder="Enter Location"
                                  {...register(`workexp[${index}].location`, {
                                      required: "Location is required",
                                  })}
                              />
                              {errors?.workexp?.[index]?.location && (
                                  <span>{errors.workexp[index].location.message}</span>
                              )}
                          </div>
                      </div>

                      <div className="col-lg-12">
                          <div className="form-input-box">
                              <label htmlFor={`workexp[${index}].description`}>Description</label>
                              <textarea
                                    rows={4}
                                  id={`workexp[${index}].description`}
                                  placeholder="Enter description"
                                  {...register(`workexp[${index}].description`, {
                                      required: "Description is required",
                                  })}
                              />
                              {errors?.workexp?.[index]?.description && (
                                  <span>{errors.workexp[index].description.message}</span>
                              )}
                          </div>
                      </div>
                  </div>

                  {index > 0 && (
                      <button
                          className="remove-form-btn"
                          type="button"
                          onClick={() => removeWorkExp(index)}
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
                appendWorkExp({
                    company: "",
                    startDate: "",
                    endDate: "",
                    role: "",
                    location: "",
                    description: "",
                    currentlyWorking: "0"
                })
              }
            >
              <span><IoAddCircleOutline /></span>
              Add
            </button>
            <div className="submit-btn-box">
              <button className="submit-btn" type="submit">
                <span><MdSaveAlt /></span>
                {userSavedData.workExp === false ? "Save" :  "Update" }
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster/>
    </>
  );
};

export default WorkExp;
