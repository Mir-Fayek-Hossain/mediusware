import React, { useEffect, useState } from "react";

const Problem1 = () => {
    const [show, setShow] = useState("all");

    // input field data
    const [data, setData] = useState({
        name: "",
        status: "",
    });

    //library where all data will be stored
    const [library, setLibrary] = useState([
        {
            name: "Mediusware",
            status: "Active",
        },
        {
            name: "Fayek",
            status: "Completed",
        },
        {
            name: "Mir",
            status: "Pending",
        },
    ]);

    //table data according to status
    const [tableData, setTableData] = useState([]);

    const handleClick = (val) => {
        setShow(val);
    };
    
    //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setLibrary([...library, data]);
        setData({
            name: "",
            status: "",
        });

        //if data.status is eqqual to status push the data into filtered data
        if (show == data.status) {
            setTableData([[...library, data]]);
        }
    };

    useEffect(() => {
        if (show == "active" || show == "completed") {
            let filteredData = library?.filter((data) => {
                return data?.status.toLowerCase() == show;
            });
            setTableData(filteredData);
        } else {
            //priority for status filter in status equal to all
            const statusPriority = {
                active: 1,
                completed: 2,
            };

            let sortedData = [...library]?.sort((a, b) => {
                const statusA = statusPriority[a.status] || 3;
                const statusB = statusPriority[b.status] || 3;
                return statusA - statusB;
            });
            setTableData(sortedData);
        }
    }, [show, library]);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        className="row gy-2 gx-3 align-items-center mb-4"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) =>
                                    setData({ ...data, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                value={data.status}
                                onChange={(e) =>
                                    setData({ ...data, status: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "all" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "active" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "completed" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData?.map((data, idx) => (
                                <tr key={idx}>
                                    <td>{data?.name}</td>
                                    <td>{data?.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
