import React, { useState, useEffect } from "react";
import "./Myacc.css";

const Myacc = () => {
  useEffect(() => {
    document.title = "Myacc";
  });

    return (
      <div className="Myacc-container">
        <div className="Myacc-status"/>
      </div>
    );
  };
  
  export default Myacc;