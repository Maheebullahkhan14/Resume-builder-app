import React from "react";
import InputControl from "../Components/smallComponents/InputControll";

const WorkExp = ({ register, handleSubmit }) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="form-main-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <InputControl
                type="text"
                label="Company"
                placeholder="Enter Company Name"
                name="Company"
                register={register}
              />
            </div>
            <div className="col-lg-6">
              <InputControl
                type="date"
                label="Start date"
                placeholder="Enter profession"
                name="Startdata"
                register={register}
              />
            </div>
            <div className="col-lg-6">
              <InputControl
                type="date"
                label="End date"
                placeholder="Enter profession"
                name="Enddate"
                register={register}
              />
            </div>
            <div className="col-lg-6">
              <InputControl type="text" label="Role" placeholder="Enter Role" name="JobRole"
                register={register}/>
            </div>
            <div className="col-lg-6">
              <InputControl
                type="text"
                label="Location"
                placeholder="Enter Location"
                name="Location"
                register={register}
              />
            </div>
            <div className="col-lg-6">
              <InputControl
                type="text"
                label="description"
                placeholder="Enter description"
                name="description"
                register={register}
              />
            </div>
          </div>
          <div className="submit-btn-box">
            <button className="add-more">
              Add More
            </button>
            <button className="submit-btn" type="submit">
             Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WorkExp;
