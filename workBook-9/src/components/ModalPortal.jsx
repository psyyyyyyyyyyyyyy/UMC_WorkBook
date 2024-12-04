import { Children } from "react";
import reactDom from "react-dom";

const ModalPortal = ({Children}) => {
    if(typeof window === "undefined") {
        return null;
    }

    const node = document.getElementById("portal");

    return reactDom.createPortal(Children, node);
};

export default ModalPortal;