import React, { useState } from "react";

const ListItem = ({ list }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ cursor: "pointer" }}>
      <div onClick={() => setOpen(true)}>
        {list.id} - {list.phone}
      </div>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0, backgroundColor: "gray", opacity: 0.3, borderRadius: "20px" }}></div>
          <div style={{ position: "absolute", height: "300px", width: "300px", top: "calc(50% - 150px)", left: "calc(50% - 150px)", backgroundColor: "white", borderRadius: "20px", padding: "20px" }}>
            <button onClick={() => setOpen(false)} button style={{ marginLeft: "auto", display: "block", border: "2px solid #46139f", backgroundColor: "white", color: "#46139f" }} className="btn btn-danger" type="button">
              Close
            </button>
            <p>
              {list.id} - {list.phone}
            </p>
            <p>
              {list.country.id} - {list.country.name}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
