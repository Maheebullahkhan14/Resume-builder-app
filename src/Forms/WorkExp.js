import React from "react";
import InputControl from "../Components/smallComponents/InputControll";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const WorkExp = ({ register, handleSubmit, fields, append, remove }) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="form-main-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => {
            return (
              <>
                <div className="resume-form-main-cover-wrapper">
                  <div className="row">
                    <div className="col-lg-6">
                      <InputControl
                        type="text"
                        label="Company"
                        placeholder="Enter Company Name"
                        name={`workexp[${index}].company`}
                        register={register}
                      />
                    </div>
                    <div className="col-lg-4">
                      <InputControl
                        type="date"
                        label="Start date"
                        placeholder="Enter profession"
                        name={`workexp[${index}].startDate`}
                        register={register}
                        defaultValue={item.startDate}
                        
                      />
                    </div>
                    <div className="col-lg-2">
                      <InputControl
                        type="checkbox"
                        label="Company"
                        className="mt-4"
                        placeholder="Enter Company Name"
                        name={`workexp[${index}].currentlyWorking`}
                        register={register}
                      />
                    </div>
                    {item.currentlyWorking !== 1 && (
                      <div className="col-lg-6">
                        <InputControl
                          type="date"
                          label="End date"
                          placeholder="Enter profession"                        
                          name={`workExp[${index}].endDate`}
                          register={register}
                        />
                      </div>
                    )}
                    <div className="col-lg-6">
                      <InputControl type="text" label="Role" placeholder="Enter Role" name={`workexp[${index}].role`}
                        register={register} />
                    </div>
                    <div className="col-lg-6">
                      <InputControl
                        type="text"
                        label="Location"
                        placeholder="Enter Location"
                        name={`workexp[${index}].location`}
                        register={register}
                        defaultValue={item.location}
                      />
                    </div>
                    <div className="col-lg-6">
                      <InputControl
                        type="text"
                        label="description"
                        placeholder="Enter description"
                        name={`workexp[${index}].description`}
                        register={register}
                      />
                    </div>
                  </div>
                  {index > 0 && (
                    <button className="remove-form-btn" type="button" onClick={() => remove(index)}>
                      <RxCross2 />
                    </button>
                  )}
                </div>
              </>
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
              <span><IoAddCircleOutline /></span>
              Add
            </button>
            <div className="submit-btn-box">
              <button className="submit-btn" type="submit">
                <span><MdSaveAlt /></span>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default WorkExp;
