import React from "react";
import ReactDOM from "react-dom";
//Style
import classes from './Modal.module.css'
//  Portals
const Backdrop = (props) => {
    return <div className={classes.backdrop}/>;
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
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('overlays'))};
            {ReactDOM.createPortal(<ModalOverlay children={props.children}/>, document.getElementById('overlays'))};
        </React.Fragment>
    );
};
export default Modal;