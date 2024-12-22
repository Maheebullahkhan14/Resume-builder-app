import React, { useContext, useState, useEffect } from "react";
import Sectionbar from "./Sectionbar";
import Mainforms from "./Mainforms";
import Resumesetting from "./Resumesetting";
import { getRequestOptions , MODULESAPI} from "../constants";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


const Maincontainer = ({Toaster}) => {

  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || '')
  const [userData , setUserData] = useState([])
  const [userSavedData , setUserSavedData] = useState([])

  const getSavedModules = async () =>{
    try {
      const response = await fetch(`http://localhost:3000/${MODULESAPI}?userId=${userId}` , getRequestOptions)
      if (!response.ok) {
        const errorResponse = await response.json()
        toast.error(errorResponse.msg)
        return
      }
      const res = await response.json();
      setUserSavedData(res?.savedModules)
    } catch (error) {
        console.log(error)
    }

    
  }

  useEffect(() => {
    if (userId) {
      const fetchUser = async () =>{
        try {
          const response = await fetch(`http://localhost:3000/api/getUser?userId=${userId}`, getRequestOptions)
          const res = await response.json();
          setUserData(res)
        } catch (error) {
          console.log(error)
        }
      }
      fetchUser();
      getSavedModules();
    }
  }, [userId])

  return (
    <>
      <div className="main-cover-box-wrapper">
        <div className="main-cover-box">
          <div className="row">
            <div className="col-lg-2">
              <div className="left-menu-bar-section">
                <Sectionbar userSavedData={userSavedData}/>
              </div>
            </div>
            <div className="col-lg-7 p-0">
              <div className="main-form-cover-wrapper">
                <div className="main-form-content-box">
                  <Mainforms Toaster={Toaster} userSavedData={userSavedData}  userId={userId} />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="settings-main-cover-wrapper">
                <Resumesetting userData={userData} userSavedData={userSavedData} userData={userData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default Maincontainer;
