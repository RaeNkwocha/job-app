import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const JobApplicants = () => {
    const [jobApplicants, setJobApplicants] = useState([])
    const [job,setJob]=useState(["job"])
    const client = axios.create({
        baseURL: "https://api.carelobby.flux.i.ng/v1/",
      });
    //   header
    client.interceptors.request.use(
        function (config) {
          if (!config.headers) config.headers = {};
          if (localStorage.getItem("jwt") != null) {
            config.headers["Authorization"] =
              "Bearer " + localStorage.getItem("jwt");
          }
          return config;
        },
        function (error) {
          return Promise.reject(error);
        }
      );
    // 
      useEffect(() => {
        client.get(`job-applications?filters[job]=2&populate=*`).then((response) => {
          setJobApplicants(response.data);
        });
      }, []);
      console.log(jobApplicants);
  return (
      <></>
    // <div className="col-md-8 grid-margin stretch-card">
    //   <div style={{ background: "white", color: "black" }} className="card">
    //     <div className="card-body">
    //       <div className="d-flex flex-row justify-content-between">
    //         <h4 className="card-title mb-1">Avaliable Jobs</h4>
    //         <p className="text-muted mb-1">Posted at</p>
    //       </div>
    //       <div className="row">
    //         <div className="col-12">
    //           {jobs.slice(0, 5).map((job) => (
    //             <div className="preview-list">
    //               <div className="preview-item border-bottom">
    //                 <div className="preview-thumbnail">
    //                   <div className="preview-icon bg-primary">
    //                     <i className="mdi mdi-file-document"></i>
    //                   </div>
    //                 </div>

    //                 <div
    //                   onClick={() => handleSubmit(job)}
    //                   style={{ cursor: "pointer" }}
    //                   className="preview-item-content d-sm-flex flex-grow"
    //                 >
    //                   <div className="flex-grow">
    //                     <h6 className="preview-subject">
    //                       {job.attributes.title}
    //                     </h6>

    //                     <p className="text-muted mb-0">
    //                       Type: {job.attributes.type}
    //                     </p>
    //                   </div>
    //                   <div className="mr-auto text-sm-right pt-2 pt-sm-0">
    //                     <p className="text-muted">{job.attributes.createdAt}</p>
    //                     <p
    //                       className="text-muted mb-0"
    //                       style={{ color: "white" }}
    //                     >
    //                       Apply Now{" "}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //           <div
    //             style={{
    //               display: "grid",
    //               placeItems: "center",
    //               marginTop: "20px",
    //             }}
    //           >
    //             {" "}
    //             <button>See more job openings</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default JobApplicants;
