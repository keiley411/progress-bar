import React from "react";
import './Input.css'

function Input({ percentage }) {
  return (
    <div className="major" >
      <div className="main"
        style={{
          width: `${percentage}%`,
          height: "50px",
          backgroundColor:"wheat"

          
        }}
      ></div>
    </div>
  );
};

export default Input;
