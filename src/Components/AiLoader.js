import React from 'react';


const AiLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-line" style={{ width: '80%' }}></div>
      <div className="skeleton-line" style={{ width: '60%' }}></div>
      <div className="skeleton-line" style={{ width: '90%' }}></div>
    </div>
  );
};

export default AiLoader;
