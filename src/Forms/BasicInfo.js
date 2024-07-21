import React, { useContext } from "react";
import { postRequestOptions, SAVEINFOAPI } from "../constants";
import { toast , Toaster } from 'react-hot-toast';
import { AppContext } from "../ContextApi";
import Maininformation from "../FormData";



const BasicInfo = ({ register, handleSubmit, errors, userId }) => {

  const {sectactivetab } = useContext(AppContext)

  const saveInfo = async (data) => {
    const infoData = {
      userId: userId,
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      linkedLink: data.linkedLink,
      githubLink: data.githubLink,
      portfolioLink: data.portfolioLink
    }

    postRequestOptions.body = JSON.stringify(infoData)
    try {
      const response = await fetch(`http://localhost:3000/${SAVEINFOAPI}?userId=${userId}`, postRequestOptions)
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
    saveInfo(data);
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
                  {...register("basicinfo.fullName", {
                    required: "Please enter fullname"
                  })}
                />

                {errors && errors.fullName && (
                  <p className="error-message">{errors.fullName.message}</p>
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
                  {...register("basicinfo.mobile", {
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
                  {...register("basicinfo.email", {
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
                  {...register("basicinfo.linkedinLink")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Github">Github</label>
                <input
                  type="text"
                  placeholder="Enter Github"
                  {...register("basicinfo.githubLink")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-input-box">
                <label htmlFor="Portfolio">Portfolio</label>
                <input
                  type="text"
                  placeholder="Enter Portfolio"
                  name="portfolioLink"
                  {...register("basicinfo.portfolioLink")}
                  // disabled={basicinfo.pro}
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
        <Toaster />
      </div>
    </>
  );
};

export default BasicInfo;
