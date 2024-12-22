import React, { useContext } from "react";
import { postRequestOptions, SAVEINFOAPI } from "../constants";
import { toast, Toaster } from 'react-hot-toast';
import { AppContext } from "../ContextApi";
import Maininformation from "../FormData";



const BasicInfo = ({ register, handleSubmit, errors, userId, userSavedData }) => {

  const { sectactivetab } = useContext(AppContext)

  const saveInfo = async (data) => {

    const apiUrl = userSavedData.BasicInfo ? `api/updateData/basicinfo` : `${SAVEINFOAPI}?userId=${userId}`

    const infoData = {
      userId: userId,
      summary: data?.basicinfo?.summary,
      fullName: data.basicinfo.fullName,
      email: data.basicinfo.email,
      mobile: data.basicinfo.mobile,
      linkedinLink: data.basicinfo.linkedinLink,
      githubLink: data.basicinfo.githubLink,
      portfolioLink: data.basicinfo.portfolioLink
    }

    postRequestOptions.body = JSON.stringify(infoData)
    try {
      const response = await fetch(`http://localhost:3000/${apiUrl}`, postRequestOptions)
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

  // const deletInfo = () =>{
  //   saveInfo({delete : true})
  // }

  return (
    <>
      <div className="form-main-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-input-box">
                <label htmlFor="Fullname">Summary</label>
                <textarea
                  name="summary"
                  placeholder="Add Summary"
                  rows={4}
                  {...register("basicinfo.summary", {
                    required: "Please add 15 to 20 words of summary"
                  })}
                />

                {errors && errors?.basicinfo?.summary && (
                  <p className="error-message">{errors.basicinfo.summary.message}</p>
                )}


              </div>
            </div>
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

                {errors && errors?.basicinfo?.fullName && (
                  <p className="error-message">{errors.basicinfo.fullName.message}</p>
                )}

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
                    required: "Please enter mobile no",
                    pattern: {
                      value: /^[0-9]{10}$/, // Assuming you want a 10-digit numeric value for a mobile number
                      message: "mobile number is invalid",
                    },
                  })}
                />
                {errors && errors?.basicinfo?.mobile && (
                  <p className="error-message">{errors.basicinfo.mobile.message}</p>
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
                    required: "Please enter email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                />

                {errors && errors?.basicinfo?.email && (
                  <p className="error-message">{errors.basicinfo.email.message}</p>
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
              {userSavedData.BasicInfo === false  ? "Save" : "Update"}
            </button>
          </div>
        </form>
        {/* {userSavedData.Basicinfo && (
          <button onClick={() =>deletInfo()}>
            Delete
          </button>
        )} */}
        <Toaster />
      </div>
    </>
  );
};

export default BasicInfo;
