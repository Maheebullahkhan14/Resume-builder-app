import React from "react";

const HeaderStrip = ({userData}) => {
  return (
    <>
      <div className="header-strip-card-cover mb-3">
        <h5>Welcome , <span> {userData?.firstName} {' '} {userData?.lastName}</span></h5>
      </div>
    </>
  );
};

export default HeaderStrip;
