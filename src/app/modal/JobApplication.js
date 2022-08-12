import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SubmitJob from "./SubmitJobApp";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "auto",
    height: "auto",
    backgroundColor: "#191C24",
    border: "1px solid lightgrey",
    borderRadius: 10,
    color: "white",
    margin: "25px",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({ children, job }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div style={{ padding: "30px" }}>
              <h2 style={{ color: "white", marginBottom: "30px" }}>
                Job title: {job.attributes.title}
              </h2>
              <div>
                <p className="desc">
                  job description: {job.attributes.description}
                </p>
                <p className="desc">
                  job requirements: {job.attributes.requirements}
                </p>
                <p className="desc">job type: {job.attributes.type}</p>
                <p className="desc">
                  job payment amount: {job.attributes.paymentAmount}
                </p>
                <p className="desc">
                  job duration: {job.attributes.start} - {job.attributes.end}
                </p>
                <p className="desc">job status: {job.attributes.status}</p>
              </div>
              <div style={{ marginTop: "30px" }}>
                  <a href='/user-pages/apply-for-job'>
                  <input type="submit" value="apply for job" />
                  </a>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
