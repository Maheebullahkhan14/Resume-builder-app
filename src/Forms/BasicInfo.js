import React from "react";
import InputControl from "../Components/smallComponents/InputControll";
import { useForm } from "react-hook-form"; 


const BasicInfo = ({ register, handleSubmit, errors }) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <>
      <div className="form-main-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Fullname">FullName</label>
                <input
                  type="text"
                  placeholder="Enter FullName"
                  name="Fullname"
                  {...register("fullname", {
                    required: "please enter fullname ",
                    // Add additional validation rules as needed
                  })}
                />
                
                {errors && errors.fullname && (
                  <p className="error-message">{errors.fullname.message}</p>
                )}
                {/* {console.log(errors.fullname)} */}
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Mobile">Mobile</label>
                <input
                  type="text"
                  placeholder="Enter mobile no"
                  name="Mobile"
                  {...register("mobile", {
                    required: "please enter mobile no",
                    pattern: {
                      value: /^[0-9]{10}$/, // Assuming you want a 10-digit numeric value for a mobile number
                      message: "mobile number is invalid",
                    },
                  })}
                />
                
                {errors && errors.mobile && (
                  <p className="error-message">{errors.mobile.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="Email"
                  {...register("email", {
                    required: "please enter email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors && errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Linkedin">Linkedin</label>
                <input
                  type="text"
                  placeholder="Enter Linkedin"
                  name="Linkedin"
                  {...register("Linkedin")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Github">Github</label>
                <input
                  type="text"
                  placeholder="Enter Github"
                  name="Github"
                  {...register("Github")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Portfolio">Portfolio</label>
                <input
                  type="text"
                  placeholder="Enter Portfolio"
                  name="Portfolio"
                  {...register("Portfolio")}
                />
              </div>
            </div>
          </div>
          <div className="submit-btn-box">
            <button className="submit-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicInfo;
