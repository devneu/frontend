import React from "react";
import "./FormErrorMessage.scss";

interface FormErrorMessageProps {
    message: string
}


const FormErrorMessage = ({message}: FormErrorMessageProps):any => {
    return message ? <div className="error-message">{message}</div>: "";
};

export default FormErrorMessage;