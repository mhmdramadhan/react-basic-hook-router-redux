import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import clasess from './ErrorModal.module.css';

// create portal (backdrop has in pubic/index.html)
const Backdrop = (props) => {
  return <div className={clasess.backdrop} onClick={() => props.setError(false)} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={clasess.modal}>
      <header className={clasess.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={clasess.content}>
        <p>{props.message}</p>
      </div>
      <footer className={clasess.actions}>
        {/* create button onclick */}
        <Button onClick={() => props.setError(false)}>Okay</Button>
        {/* <Button on>Okay</Button> */}
      </footer>
    </Card>
  );
};
// element backdrop-root dan overlay-root ada di index.html
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop setError={props.setError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          setError={props.setError}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
