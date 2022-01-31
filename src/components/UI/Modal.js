import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

/* Styling to prevent user to see the menu */
const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onClick}></div>
    );
};

/* Styling for the modal */
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays'); // refers to overlays element in index.html

const Modal = (props) => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>       
    );
};
export default Modal;