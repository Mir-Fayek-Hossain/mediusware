import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllContactsQuery } from "../services/api";
import ListItem from "./ListItem";

const ModalAll = () => {
  const [list, setList] = useState(null);
  const [isEven, setIsEven] = useState(false);
  const { data, isSuccess } = useGetAllContactsQuery();

  useEffect(() => {
    if (data?.results) {
      setList(data.results);
    }
  }, [data?.results, isSuccess, isEven]);

  return (
    <>
      <div>
        <div style={{ position: "absolute", height: "100vh", width: "100vw", top: 0, left: 0, backgroundColor: "black", opacity: 0.3 }}></div>
        <div style={{ position: "absolute", height: "500px", width: "500px", top: "calc(50vh - 250px)", left: "calc(50vw - 250px)", backgroundColor: "white", borderRadius: "20px", padding: "20px" }}>
          <Link to="/problem-2">
            <button button style={{ marginLeft: "auto", display: "block", border: "2px solid #46139f", backgroundColor: "white", color: "#46139f" }} className="btn btn-danger" type="button">
              Close
            </button>
          </Link>
          All
          <ul>
            {list
              ? isEven
                ? list
                    .filter((color) => color.id % 2 === 0)
                    .map((v, i) => (
                      <ListItem key={`list-${Math.random()}`} list={v} />
                    ))
                : list.map((v, i) => (
                  <ListItem key={`list-${Math.random()}`} list={v} />
                      
                  ))
              : "Loading"}
          </ul>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/problem-2/all">
              <button className="btn btn-lg" style={{ backgroundColor: "#46139f", color: "white" }} type="button">
                All Contacts
              </button>
            </Link>
            <Link to="/problem-2/us">
              <button className="btn btn-lg" style={{ backgroundColor: "#ff7f5d", color: "white" }} type="button">
                US Contacts
              </button>
            </Link>
            <input type="checkbox" checked={isEven} onChange={() => setIsEven(!isEven)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAll;
