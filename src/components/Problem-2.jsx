import React, { useState } from "react";
import { Link } from "react-router-dom";

const Problem2 = () => {
  const [open, setOpen] = useState(true);
  const [type, setType] = useState("All");

  const handleType = (type) => {
    setType(type);
  };

  const handleOpen = (type) => {
    setOpen(true);
    handleType(type);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Link to="all">
            <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => handleOpen("All")}>
              All Contacts
            </button>
          </Link>
          <Link to="us">
            <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => handleOpen("US")}>
              US Contacts
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Problem2;
