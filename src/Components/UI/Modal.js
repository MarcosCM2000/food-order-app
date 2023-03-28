import React from "react";
import ReactDOM from "react-dom";
//Style
import classes from './Modal.module.css'
//  Portals
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>;
};
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};
const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays'))};
            {ReactDOM.createPortal(<ModalOverlay children={props.children}/>, document.getElementById('overlays'))};
        </React.Fragment>
    );
};
export default Modal;