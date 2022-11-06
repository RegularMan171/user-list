import React from "react";
import PortalReactDOM from 'react-dom';
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onError} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.eTitle}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.eMsg}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onError}>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {PortalReactDOM.createPortal(
        <Backdrop onError={props.onError} />,
        document.getElementById("backdrop-root")
      )}
      {PortalReactDOM.createPortal(
        <ModalOverlay
          eTitle={props.eTitle}
          eMsg={props.eMsg}
          onError={props.onError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
