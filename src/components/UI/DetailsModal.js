import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Context from "../store/context";

import Card from "./Card";
import styles from "./DetailsModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Modal = (props) => {
  const ctx = useContext(Context);

  return (
    <Card className={styles.modal}>
      <div>{props.children}</div>
      <div className={styles["btn-container"]}>
        {ctx.isTask && (
          <button onClick={props.onComplete} className={styles["edit-btn"]}>
            Complete
          </button>
        )}
        <button className={styles["delete-btn"]} onClick={props.onDelete}>
          Delete
        </button>
        <button className={styles["close-btn"]} onClick={props.onClick}>
          Close
        </button>
      </div>
    </Card>
  );
};

const DetailsModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onComplete={props.onComplete}
          onDelete={props.onDelete}
          onClick={props.onConfirm}
        >
          {props.children}
        </Modal>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default DetailsModal;
